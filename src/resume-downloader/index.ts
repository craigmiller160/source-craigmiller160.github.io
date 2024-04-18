import path from 'path';
import { google } from 'googleapis';
import fs from 'fs/promises';
import { z } from 'zod';
import type { Position, Resume } from '../resume/resume';
import { match } from 'ts-pattern';
import { produce } from 'immer';

const KEYFILE_PATH = path.join(
	process.cwd(),
	'market-tracker-service-account.json'
);
const SCOPES = ['https://www.googleapis.com/auth/drive'];
const FILE_ID = '1KNIsz3VBRhLTX9wLp8NhaeVzc1z4VMIQMDzvTK2MuNA';
const OUTPUT_DIR = path.join(import.meta.dirname, '..', 'resume');
const RAW_OUTPUT_FILE = path.join(OUTPUT_DIR, 'my-resume.txt');
const PARSED_OUTPUT_FILE = path.join(OUTPUT_DIR, 'my-resume.json');
const STARTS_WITH_WHITESPACE_REGEX = /^\s+/;
const STARTS_WITH_ASTERISK_REGEX = /^\*/;
const ITEM_AND_DATES_REGEX = /^(?<item>.+)\((?<dates>.+)\)$/;

const itemAndDatesSchema = z
	.object({
		item: z.string(),
		dates: z.string()
	})
	.readonly();

const BASE_RESUME: Resume = {
	name: '',
	contact: {
		email: ''
	},
	education: '',
	certifications: [],
	experience: [],
	honorsAndAchievements: [],
	intro: {
		body: '',
		title: ''
	},
	skills: {
		agileExperience: [],
		cloudDeployment: [],
		databases: [],
		frameworksAndTools: [],
		languages: []
	}
};

const resumeResponseSchema = z.string();

const auth = new google.auth.GoogleAuth({
	keyFile: KEYFILE_PATH,
	scopes: SCOPES
});

const drive = google.drive({
	version: 'v3',
	auth
});

const downloadResume = async () => {
	const response = await drive.files.export({
		fileId: FILE_ID,
		mimeType: 'text/plain'
	});
	const resumeText = resumeResponseSchema
		.parse(response.data)
		.replace('\r\n', '\n');
	await fs.writeFile(RAW_OUTPUT_FILE, resumeText);

	const parsed = parseResume(resumeText);
	await fs.writeFile(PARSED_OUTPUT_FILE, JSON.stringify(parsed, null, 2));
};

type ResumeSection = 'contact' | 'intro' | 'experience' | 'skills';
type ResumeParsingContext = Readonly<{
	resume: Resume;
	section: ResumeSection;
	experienceIndex: number;
}>;

const parseResume = (resumeText: string): Resume => {
	const lines = resumeText.split('\n');
	const startingContext: ResumeParsingContext = {
		resume: BASE_RESUME,
		section: 'contact',
		experienceIndex: 0
	};

	return (
		lines
			.filter((line) => !!line.trim())
			// The use of this reducer plus the immutable design patterns does result in an O(n^2) algorithm
			// Given the small size of the dataset, plus the infrequency of its execution, this is an acceptable tradeoff for the clean algorithm
			.reduce(parseLine, startingContext).resume
	);
};

const parseLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext =>
	match(context.section)
		.with('contact', () => parseContactLine(context, line))
		.with('intro', () => parseIntroLine(context, line))
		.with('experience', () => parseExperienceLine(context, line))
		.with('skills', () => context)
		.exhaustive();

const parseExperienceLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext => {
	if ('Industry Experience' === line.trim()) {
		return context;
	}

	if ('Technical Knowledge' === line.trim()) {
		return produce(context, (draft) => {
			draft.section = 'skills';
		});
	}

	const hasExperience = context.resume.experience.length > 0;
	const currentExperienceHasAchievements =
		context.resume.experience[context.experienceIndex]?.achievements
			?.length > 0;
	const isOpeningExperienceLine =
		STARTS_WITH_WHITESPACE_REGEX.test(line) &&
		!STARTS_WITH_ASTERISK_REGEX.test(line.trim());
	if (
		isOpeningExperienceLine &&
		(currentExperienceHasAchievements || !hasExperience)
	) {
		const newExperienceIndex = currentExperienceHasAchievements
			? context.experienceIndex + 1
			: context.experienceIndex;
		const groups = ITEM_AND_DATES_REGEX.exec(line.trim())?.groups;
		const experienceCompanyLine = itemAndDatesSchema.parse(groups);
		return produce(context, (draft) => {
			draft.experienceIndex = newExperienceIndex;
			draft.resume.experience[newExperienceIndex] = {
				achievements: [],
				company: experienceCompanyLine.item,
				dates: experienceCompanyLine.dates,
				positions: []
			};
		});
	}

	if (isOpeningExperienceLine) {
		const positions = line
			.trim()
			.split(',')
			.map((text) => ITEM_AND_DATES_REGEX.exec(text.trim())?.groups)
			.map((groups) => itemAndDatesSchema.parse(groups))
			.map(
				({ item, dates }): Position => ({
					title: item,
					dates
				})
			);
		return produce(context, (draft) => {
			draft.resume.experience[draft.experienceIndex].positions =
				positions;
		});
	}

	if (STARTS_WITH_ASTERISK_REGEX.test(line)) {
		// TODO handle this
		return context;
	}

	return context;
};

const parseIntroLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext => {
	if (!context.resume.intro.title) {
		return produce(context, (draft) => {
			draft.resume.intro.title = line.trim();
		});
	}

	return produce(context, (draft) => {
		draft.resume.intro.body = line.trim();
		draft.section = 'experience';
	});
};

const parseContactLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext => {
	if (STARTS_WITH_WHITESPACE_REGEX.test(line)) {
		return context;
	}

	if (context.resume.name.length > 0) {
		return produce(context, (draft) => {
			draft.resume.contact.email = line.trim();
			draft.section = 'intro';
		});
	}

	return produce(context, (draft) => {
		draft.resume.name = line.trim();
	});
};

void downloadResume();

import path from 'path';
import { google } from 'googleapis';
import fs from 'fs/promises';
import { z } from 'zod';
import type { Resume } from '../resume/resume';
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

type ResumeSection = 'contact' | 'intro' | 'experience';
type ResumeParsingContext = Readonly<{
	resume: Resume;
	section: ResumeSection;
}>;

const parseResume = (resumeText: string): Resume => {
	const lines = resumeText.split('\n');
	const startingContext: ResumeParsingContext = {
		resume: BASE_RESUME,
		section: 'contact'
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
		.exhaustive();

const parseExperienceLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext => {
	if ('Industry Experience' === line.trim()) {
		return context;
	}

	if (/^\s+/.test(line)) {
		// TODO handle this
		return context;
	}

	if (/^\*/.test(line)) {
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
	});
};

const parseContactLine = (
	context: ResumeParsingContext,
	line: string
): ResumeParsingContext => {
	if (/^\s+/.test(line)) {
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

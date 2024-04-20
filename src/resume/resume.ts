import { z } from 'zod';

export const contactInfoSchema = z
	.object({
		email: z.string().email()
	})
	.readonly();

export type ContactInfo = z.TypeOf<typeof contactInfoSchema>;

export const introductionSchema = z
	.object({
		title: z.string(),
		body: z.string()
	})
	.readonly();

export type Introduction = z.TypeOf<typeof introductionSchema>;

export const positionSchema = z
	.object({
		title: z.string(),
		dates: z.string()
	})
	.readonly();

export type Position = z.TypeOf<typeof positionSchema>;

export const jobSchema = z
	.object({
		company: z.string(),
		dates: z.string(),
		positions: z.array(positionSchema).readonly(),
		achievements: z.array(z.string()).readonly()
	})
	.readonly();

export type Job = z.TypeOf<typeof jobSchema>;

export const skillsSchema = z
	.object({
		languages: z.array(z.string()).readonly(),
		frameworksAndTools: z.array(z.string()).readonly(),
		databases: z.array(z.string()).readonly(),
		cloudDeployment: z.array(z.string()).readonly(),
		agileExperience: z.array(z.string()).readonly()
	})
	.readonly();

export type Skills = z.TypeOf<typeof skillsSchema>;

const educationSchema = z
	.object({
		degree: z.string(),
		institution: z.string()
	})
	.readonly();
export type Education = z.TypeOf<typeof educationSchema>;

export const resumeSchema = z
	.object({
		name: z.string(),
		contact: contactInfoSchema,
		intro: introductionSchema,
		experience: z.array(jobSchema).readonly(),
		skills: skillsSchema,
		certifications: z.array(z.string()).readonly(),
		education: educationSchema,
		honorsAndAchievements: z.array(z.string()).readonly()
	})
	.readonly();

export type Resume = z.TypeOf<typeof resumeSchema>;

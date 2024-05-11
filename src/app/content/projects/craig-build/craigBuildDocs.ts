import type { Documentation } from '../documentation-common/Documentation';

const commonDocs: ReadonlyArray<Documentation> = [
	{
		type: 'text-only',
		title: 'Introduction',
		text: [
			`Over the years, I've built a lot of personal projects, far more even than I'm showcasing in this portfolio. My years in the industry demonstrated the value of standardized, uniform build tools. While I have yet to build a full CI/CD for myself, this tool is pretty close.`,
			`The only thing separating this tool, which I call 'craig-build' (because I am highly un-creative at naming things), from a real CI/CD is the fact that it is not automated. I need to invoke it on my machine via a command. However, with a single command it will scan the project, identify which type of project it is, validate the configuration, build, test, and deploy it. It is the heart of my current home infrastructure, and one day I may take the final steps and convert it into a proper CI/CD.`
		]
	}
];

export const placeholderDocs: ReadonlyArray<Documentation> = [
	...commonDocs,
	{
		type: 'text-only',
		title: 'More Details Coming Soon...',
		text: []
	}
];

/*
 * Craig Build Phases

- Gather Pre-Run Info
	- Build Tool Info
	- Command Info
	- Project Type
	- Project Info
- Pre-Run Validation
	- Project Version
	- Dependency Versions
	- Git Tag Version
- Build & Publish
	- Run all project validations (linting, tests, etc)
	- Build artifact
	- Prepare pre-release version
	- Publish to Sonatype Nexus
- Git Tag
- Build & Publish Docker
- Deploy to Kubernetes
- Run Terraform
 */

export const fullDocs: ReadonlyArray<Documentation> = [...commonDocs];

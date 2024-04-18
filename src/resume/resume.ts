export type ContactInfo = Readonly<{
    phone: string;
    email: string;
    address1: string;
    address2: string;
}>;

export type Introduction = Readonly<{
    title: string;
    body: string;
}>;

export type Position = Readonly<{
    title: string;
    dates: string;
}>;

export type Job = Readonly<{
    company: string;
    dates: string;
    positions: ReadonlyArray<Position>;
    achievements: ReadonlyArray<string>;
}>;

export type Skills = Readonly<{
    languages: ReadonlyArray<String>;
    frameworksAndTools: ReadonlyArray<string>;
    databases: Readonly<string>;
    cloudDeployment: ReadonlyArray<string>;
    agileExperience: ReadonlyArray<string>;
}>;

export type Resume = Readonly<{
    name: string;
    contact: ContactInfo;
    intro: Introduction;
    experience: ReadonlyArray<Job>;
    skills: Skills;
    certifications: ReadonlyArray<string>;
    education: string;
    honorsAndAchievements: ReadonlyArray<string>;
}>;
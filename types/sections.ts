export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  softwareSkills: SoftwareSkillType[];
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  location: string;
  subHeader: string;
  graduation: string;
  //desc: string;
  gpa?: string;
  descBullets?: string;
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  //role: string;
  projectName: string;
  companyLogo: string;
  //date: string;
  //desc: string;
  descBullets?: React.ReactNode[] | string[];
  github?: string;
};

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  desc: string;
  github?: string;
  link?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  feedback: string;
};


export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Certificate {
  title: string;
  description?: string;
  issuer: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
}
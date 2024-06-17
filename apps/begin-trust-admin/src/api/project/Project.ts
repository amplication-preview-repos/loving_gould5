export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  link: string | null;
  name: string | null;
  techStack?: Array<"Option1">;
  updatedAt: Date;
};

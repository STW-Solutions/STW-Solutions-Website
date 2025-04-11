import { ProjectCategory, Project } from "./models";

export const filterProjectsByCategories = (
  projects: Project[],
  categories: ProjectCategory[]
) => {
  return projects.filter((project) =>
    categories.every((category) => project.categories.includes(category))
  );
};

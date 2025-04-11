import { ProjectCategories, Project } from "./models";

export const filterProjectsByCategories = (
  projects: Project[],
  categories: ProjectCategories[]
) => {
  return projects.filter((project) =>
    categories.every((category) => project.categories.includes(category))
  );
};

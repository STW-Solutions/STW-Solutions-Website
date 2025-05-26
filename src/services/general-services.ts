import { ProjectCategory, Project } from "../models";

export const filterProjectsByCategories = (
  projects: Project[],
  categories: ProjectCategory[]
) => {
  return projects.filter((project) =>
    categories.every((category) => project.categories.includes(category))
  );
};

export const getImageUrl = (htmlContent: any) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const imageLinks = [];
  let match;
  while ((match = imgRegex.exec(htmlContent)) !== null) {
    imageLinks.push(match[1]);
  }
  return imageLinks;
};

export const setBlogId = (id: number) => {
  localStorage.setItem("blogIdentifier", JSON.stringify(id));
};

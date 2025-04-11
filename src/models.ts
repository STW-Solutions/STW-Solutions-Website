export interface SlideButtonData {
  dataBsSlideTo: string;
  ariaLabel: string;
}

export interface CarouselItems {
  title?: string;
  imageSrc?: string;
  alt?: string;
  information?: string;
  backgroundColor?: string;
}

export enum ProjectCategory {
  UNDER_DEVELOPMENT = "UNDER DEVELOPMENT",
  COMING_SOON = "COMING SOON",
  FORESTRY = "FORESTRY",
  WASTE_MANAGEMENT = "WASTE MANAGEMENT"
 }

export interface Project {
  name: string,
  categories: ProjectCategory[],
  description: string,
  moreInfo: string,
  imageSrc: string,
  imageAlt: string,
  imageClass? : string,
  backgroundColor?: string
}
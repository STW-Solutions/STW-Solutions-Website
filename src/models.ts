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
  summary?: string,
  firstDetails?: string,
  secondDetails?: string,
  thirdDetails?: string,
  fourthDetails?: string,
  moreInfo: string,
  imageSrc: string,
  imageAlt: string,
  imageClass? : string,
  backgroundColor?: string,
  alias?: string,
  startDate?: string,
  endDate?: string
}
export interface SolutionsTemplateProps {
  header: string;
  forestryHeader: string;
  forestrySubHeader: string;
  callToAction: string;
  forestrySolutions: string;
  businessText: string;
  exploreText: string;
  topProjectsText: string;
  cardData: {
    title: string;
    imgSrc: string;
    description: string;
    linkText: string;
    altText: string;
  }[];
  initiatives: {
    img: string;
    title: string;
    text: string;
  }[];
}
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

export interface BlogAuthor {
  id: number,
  name: string
}

export interface BlogComment {
  id: number,
  author_name: string,
  content: {
    rendered: string
  },
  date: string
}

export interface BlogCategory {
  id: number,
  name: string,
  taxonomy: string
}

export interface Blog {
  comment_status: string,
  content: {
    protected: boolean,
    rendered: string
  },
  date: string,
  dateGMT: string,
  excerpt: {
    protected: boolean,
    rendered: string
  },
  featured_media: number,
  guid: {
    rendered: string
  },
  id: number,
  modified: string,
  modifiedGMT: string,
  status: string,
  title: {
    rendered: string
  }
  type: string,
  _embedded: {
    author: BlogAuthor[],
    replies: BlogComment[][],
    "wp:term": BlogCategory[][]
  },
  slug: string
}

export interface PageInfo {
  size: number,
  numberOfPages: number,
  currentPage: number,
  previousPage: number
}
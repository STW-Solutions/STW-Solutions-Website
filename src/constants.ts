import reason1 from "../src/images/reason1.png";
import reason2 from "../src/images/reason2.png";
import reason3 from "../src/images/reason3.png";
import cleanhub from "../src/images/CleanHub.png";
import enef from "../src/images/ENEFCam.png";
import carbonsate from "../src/images/Carbonsate.png";
import minepded from "../src/images/MINEPDED.png";
import ministryForestry from "../src/images/MinistryForestry.png";
import volkswagen from "../src/images/Volkswagen.webp";
import carbonsateCameroon from "../src/images/carbonsate-cameroon.avif";
import { Project, ProjectCategories } from "./models";

export const WhyUs = [
  {
    title: "promote_sustainability_development",
    imageSrc: reason1,
    alt: "promote_sustainability_development",
    information: "promote_sustainability_development_description",
  },
  {
    title: "conserve_natural_resources",
    imageSrc: reason2,
    alt: "conserve_natural_resources",
    information: "conserve_natural_resources_description",
  },
  {
    title: "support_communities",
    imageSrc: reason3,
    alt: "support_communities",
    information: "support_communities_description",
  },
];

export const Partners = [
  {
    imageSrc: cleanhub,
    alt: "CleanHub logo",
    link: "https://www.cleanhub.com/",
  },
  {
    imageSrc: carbonsate,
    alt: "Carbonsate logo",
    link: "https://www.carbonsate.com/",
  },
  {
    imageSrc: volkswagen,
    alt: "Volkswagen logo",
    link: "https://www.vw.com/",
  },
  {
    imageSrc: enef,
    alt: "ENEF logo",
    link: "https://www.minfof.gov.cm/",
  },
  {
    imageSrc: minepded,
    alt: "MINEPDED logo",
    link: "https://www.minfof.gov.cm/",
  },
  {
    imageSrc: ministryForestry,
    alt: "Ministry of Forestry Logo",
    link: "https://www.minfof.gov.cm/",
  },
];

export const SlideButtonsPartnersData = [
  {
    dataBsSlideTo: "0",
    ariaLabel: "Slide 1",
  },
  {
    dataBsSlideTo: "1",
    ariaLabel: "Slide 2",
  },
  {
    dataBsSlideTo: "2",
    ariaLabel: "Slide 3",
  },
  {
    dataBsSlideTo: "3",
    ariaLabel: "Slide 4",
  },
  {
    dataBsSlideTo: "4",
    ariaLabel: "Slide 5",
  },
  {
    dataBsSlideTo: "5",
    ariaLabel: "Slide 6",
  },
];

 export const projects: Project[] = [
  {
    name: "Ngaoundal - ARR Project",
    categories: [ProjectCategories.COMING_SOON, ProjectCategories.FORESTRY],
    description: "Reforestation and restoration project",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Garoua-Boulai - ARR Project",
    categories: [ProjectCategories.COMING_SOON, ProjectCategories.FORESTRY],
    description: "Forest restoration project",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Betare-Oya - ARR Project",
    categories: [ProjectCategories.COMING_SOON, ProjectCategories.FORESTRY],
    description: "Reforestation and restoration project",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Bafia - ARR Project",
    categories: [ProjectCategories.COMING_SOON, ProjectCategories.FORESTRY],
    description: "Kiri tree plantation",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Kundi - REDD+ Project",
    categories: [ProjectCategories.COMING_SOON, ProjectCategories.FORESTRY],
    description:
      "The Koundi Forest Conservation Project, led by STW Solutions , aims to protect and sustainably manage over 100 hectares of critical rainforest in Eastern Cameroon. This initiative focuses on combating climate change, promoting sustainable development, and conserving regional biodiversity. By creating employment opportunities and improving the quality of life for local residents, the project also emphasizes education and outreach programs to raise awareness about the importance of forest conservation.",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Biomass storage with solar energy",
    categories: [ProjectCategories.UNDER_DEVELOPMENT, ProjectCategories.FORESTRY],
    description:
      "The Cameroon Project is a unique initiative that combines biomass storage with solar energy and community-driven development to address both environmental and social challenges in Cameroon. The project utilizes wood residues from a sawmill for long-term carbon storage. Solar panels are built on top of the storage site to provide reliable electricity to the village.",
    moreInfo: "https://www.carbonsate.com/cameroon",
    imageSrc: carbonsateCameroon,
    imageAlt: "",
    imageClass: "carbonsate-cameroon-img"
  },
  {
    name: "Limbe - Waste handling",
    categories: [ProjectCategories.UNDER_DEVELOPMENT, ProjectCategories.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Douala - Waste handling",
    categories: [ProjectCategories.UNDER_DEVELOPMENT, ProjectCategories.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
  {
    name: "Kribi - Waste handling",
    categories: [ProjectCategories.UNDER_DEVELOPMENT, ProjectCategories.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: "",
    imageAlt: ""
  },
];

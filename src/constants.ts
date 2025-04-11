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
import { Project, ProjectCategory } from "./models";
import wasteManagementDouala from "../src/images/STW-Solution-Waste-Management-Douala-Project.jpg"
import wasteManagementLimbe from "../src/images/STW-Solution-Waste-Management-Limbe.jpg"
import wasteManagementKribi from "../src/images/STW-Solution-Waste-Management-Kribi.jpg"
import forestryProjectKoundi from "../src/images/STW-Solution-Forest-Projects-Koundi.jpg";
import forestryProjectNgaoundal from "../src/images/STW-Solution-Forest-Projects-Ngaoundal.jpg";
import forestryProjectGaroua from "../src/images/STW-Solution-Forest-Projects-Garoua.jpg";
import forestryProjectBetare from "../src/images/STW-Solution-Forest-Projects-Betare.jpg";
import forestryProjectBafia from "../src/images/STW-Solution-Forest-Projects-Bafia(Kiwi_trees).jpg";

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
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    description: "Reforestation and restoration project",
    moreInfo: "#",
    imageSrc: forestryProjectNgaoundal,
    imageAlt: "forest_in_ngaoundal",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Garoua-Boulai - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    description: "Forest restoration project",
    moreInfo: "#",
    imageSrc: forestryProjectGaroua,
    imageAlt: "forest_in_garoua",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Betare-Oya - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    description: "Reforestation and restoration project",
    moreInfo: "#",
    imageSrc: forestryProjectBetare,
    imageAlt: "forest_in_beta_oya",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Bafia - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    description: "Kiri tree plantation",
    moreInfo: "#",
    imageSrc: forestryProjectBafia,
    imageAlt: "kiri_trees",
    backgroundColor: "#FFFFFF",
    imageClass: "bafia-project-image"
  },
  {
    name: "Koundi - REDD+ Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    description:
      "The Koundi Forest Conservation Project, led by STW Solutions, aims to protect and sustainably manage over 100 hectares of critical rainforest in Eastern Cameroon. This initiative focuses on combating climate change, promoting sustainable development, and conserving regional biodiversity.",
    moreInfo: "#",
    imageSrc: forestryProjectKoundi,
    imageAlt: "koundi_conservation_project",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Biomass storage with solar energy",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.FORESTRY],
    description:
      "The Cameroon Project is a unique initiative that combines biomass storage with solar energy and community-driven development to address both environmental and social challenges in Cameroon. The project utilizes wood residues from a sawmill for long-term carbon storage.",
    moreInfo: "https://www.carbonsate.com/cameroon",
    imageSrc: carbonsateCameroon,
    imageAlt: "the_cameroon_project_image",
    imageClass: "carbonsate-cameroon-img",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Limbe - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: wasteManagementLimbe,
    imageAlt: "waste_management_limbe",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Douala - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: wasteManagementDouala,
    imageAlt: "waste_management_douala",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Kribi - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    description: "Plastic waste collection",
    moreInfo: "#",
    imageSrc: wasteManagementKribi,
    imageAlt: "waste_management_kribi",
    backgroundColor: "#FFFFFF"
  },
];

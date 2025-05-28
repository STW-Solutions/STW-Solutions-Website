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
import {Project, ProjectCategory} from "./models";
import wasteManagementDouala from "../src/images/STW-Solution-Waste-Management-Douala-Project.jpg"
import wasteManagementLimbe from "../src/images/STW-Solution-Waste-Management-Limbe.jpg"
import wasteManagementKribi from "../src/images/STW-Solution-Waste-Management-Kribi.jpg"
import forestryProjectKoundi from "../src/images/STW-Solution-Forest-Projects-Koundi.jpg";
import forestryProjectNgaoundal from "../src/images/STW-Solution-Forest-Projects-Ngaoundal.jpg";
import forestryProjectGaroua from "../src/images/STW-Solution-Forest-Projects-Garoua.jpg";
import forestryProjectBetare from "../src/images/STW-Solution-Forest-Projects-Betare.jpg";
import forestryProjectBafia from "../src/images/STW-Solution-Forest-Projects-Bafia(Kiwi_trees).jpg";
import serviceBg from '../src/images/solutions/service-bg.png';
import renewResource from '../src/images/solutions/renewResource.jpeg';
import wasteMgmt from '../src/images/solutions/wasteMgmt.jpeg';
import earthSvg from '../src/images/solutions/earth.svg';
import climateChangePng from '../src/images/solutions/climate-change.png';
import plantPng from '../src/images/solutions/plant.png';
import renewableResourceBg from '../src/images/solutions/renewableResourceBg.png';
import image1RenewableResourcesPng from '../src/images/solutions/image1RenewableResources.png';
import image2RenewableResourcesPng from '../src/images/solutions/image2RenewableResources.png';
import image3RenewableResourcesPng from '../src/images/solutions/image3RenewableResources.png';
import wasteMgmtBg from '../src/images/solutions/wasteMgmtBg.png';
import image1wasteMgmtPng from '../src/images/solutions/image1wasteMgmt.png';
import image2wasteMgmtPng from '../src/images/solutions/image2wasteMgmt.png';
import image3wasteMgmtPng from '../src/images/solutions/image3wasteMgmt.png';


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
    link: "https://www.carbonsate.com/cameroon",
  },
  {
    imageSrc: volkswagen,
    alt: "Volkswagen logo",
    link: "https://www.vw.com/",
  },
  {
    imageSrc: enef,
    alt: "ENEF logo",
    link: "https://enefcameroun.cm/",
  },
  {
    imageSrc: minepded,
    alt: "MINEPDED logo",
    link: "https://minepded.gov.cm/en/",
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
    summary: "Reforestation and restoration project",
    moreInfo: "/project-details/koundi-conversation-project",
    imageSrc: forestryProjectNgaoundal,
    imageAlt: "forest_in_ngaoundal",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Garoua-Boulai - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    summary: "Forest restoration project",
    moreInfo: "/project-details/koundi-conversation-project",
    imageSrc: forestryProjectGaroua,
    imageAlt: "forest_in_garoua",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Betare-Oya - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    summary: "Reforestation and restoration project",
    moreInfo: "/project-details/koundi-conversation-project",
    imageSrc: forestryProjectBetare,
    imageAlt: "forest_in_beta_oya",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Bafia - ARR Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    summary: "Kiri tree plantation",
    moreInfo: "/project-details/koundi-conversation-project",
    imageSrc: forestryProjectBafia,
    imageAlt: "kiri_trees",
    backgroundColor: "#FFFFFF",
    imageClass: "bafia-project-image"
  },
  {
    name: "Koundi - REDD+ Project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    summary:
      "The Koundi Forest Conservation Project aims to protect and sustainably manage over 100 hectares of critical rainforest in Eastern Cameroon.",
    moreInfo: "/project-details/koundi-conversation-project",
    imageSrc: forestryProjectKoundi,
    imageAlt: "koundi_conservation_project",
    backgroundColor: "#FFFFFF",
    alias: "koundi-conversation-project",
    firstDetails:"The Koundi Forest Conservation Project, led by STW Solutions , aims to protect and sustainably manage over 100 hectares of critical rainforest in Eastern Cameroon. This initiative focuses on combating climate change, promoting sustainable development, and conserving regional biodiversity. By creating employment opportunities and improving the quality of life for local residents, the project also emphasizes education and outreach programs to raise awareness about the importance of forest conservation."
  },
  {
    name: "Biomass storage with solar energy",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.FORESTRY],
    summary:
      "The Cameroon Project is a unique initiative that combines biomass storage with solar energy and community-driven development to address both environmental and social challenges in Cameroon.",
    firstDetails: "The Cameroon Project is a unique initiative that combines biomass storage with solar energy and community-driven development to address both environmental and social challenges in Cameroon. The project utilizes wood residues from a sawmill for long-term carbon storage. Solar panels are built on top of the storage site to provide reliable electricity to the village.",
    secondDetails: "In Cameroon, waste biomass from forestry operations is often burned, releasing stored carbon back into the atmosphere. The Project offers a sustainable alternative by purchasing this biomass from a local sawmill and storing it in a way that prevents decomposition, achieving long-term carbon removal. This approach not only mitigates CO₂ emissions but also turns a by-product into a valuable resource for climate action.",
    thirdDetails: "The Cameroon Project creates jobs and new income sources for the local community by engaging workers in biomass collection, storage management, solar plant installation, and environmental monitoring. By purchasing biomass waste from the local sawmill, the project also provides an additional revenue stream for community members.",
    fourthDetails: "Built on top of the biomass storage site, the solar plant supplies clean electricity to the off-grid village. This access to power improves daily life, enables local businesses to grow. The project also invests in capacity building by offering training in biomass logistics, solar technology, and environmental monitoring. These programs equip community members with valuable skills, empowering them for future opportunities and promoting long-term environmental stewardship.",
    moreInfo: "/project-details/cameroon-project",
    imageSrc: carbonsateCameroon,
    imageAlt: "the_cameroon_project_image",
    imageClass: "carbonsate-cameroon-img",
    backgroundColor: "#FFFFFF",
    alias: "cameroon-project",
    startDate: "September 2023",
    endDate: "December 2026"
  },
  {
    name: "Limbe - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    summary: "Plastic waste collection",
    moreInfo: "/project-details/cameroon-project",
    imageSrc: wasteManagementLimbe,
    imageAlt: "waste_management_limbe",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Douala - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    summary: "Plastic waste collection",
    moreInfo: "/project-details/cameroon-project",
    imageSrc: wasteManagementDouala,
    imageAlt: "waste_management_douala",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "Kribi - Waste handling",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.WASTE_MANAGEMENT],
    summary: "Plastic waste collection",
    moreInfo: "/project-details/cameroon-project",
    imageSrc: wasteManagementKribi,
    imageAlt: "waste_management_kribi",
    backgroundColor: "#FFFFFF"
  },
];

 export const solutions = {
   solutionForestry: {
     header: serviceBg,
     forestryHeader: "solution_forestry_header_1",
     forestrySubHeader: "Projects_Completed",
     callToAction: "Get_Involved",
     forestrySolutions: "Forests_Preserved",
     businessText: "Our_Forestry_Solutions",
     exploreText: "Explore_our_initiatives",
     topProjectsText: "Lets_Talk",
     cardData: [
       {
         title: "Renewable_Resources",
         imgSrc: renewResource,
         description: "Our_agriculture_mirrors",
         linkText: "Learn_More",
         altText: "Renewable_Resources"
       },
       {
         title: "Waste_Management",
         imgSrc: wasteMgmt,
         description: "Recycling_plastic_minimizes",
         linkText: "Learn_More",
         altText: "Waste_Management"
       }
     ],
     initiatives: [
       {
         img: earthSvg,
         title: "Forest_Conservation_Initiatives",
         text: "forest_con_text"
       },
       {
         img: climateChangePng,
         title: "Improved_Forest_Management",
         text: "improved_fores_mgmt_text"
       },
       {
         img: plantPng,
         title: "Paulownia_Tomentosa_Tree",
         text: "tree_planting_init_text"
       }
     ]
   },
   solutionRenewableEnergy: {
     header: renewableResourceBg,
     forestryHeader: "renewable_resources_header_1",
     forestrySubHeader: "Projects_Completed",
     callToAction: "Get_Involved",
     forestrySolutions: "Forests_Preserved",
     businessText: "Our_Renewable_Resources",
     exploreText: "Explore_our_initiatives",
     topProjectsText: "Lets_Talk",
     cardData: [
       {
         title: "Renewable_Resources",
         imgSrc: renewResource,
         description: "Our_agriculture_mirrors",
         linkText: "Learn_More",
         altText: "Renewable_Resources"
       },
       {
         title: "Waste_Management",
         imgSrc: wasteMgmt,
         description: "Recycling_plastic_minimizes",
         linkText: "Learn_More",
         altText: "Waste_Management"
       }
     ],
     initiatives: [
       {
         img: image1RenewableResourcesPng,
         title: "heading_sustainable_agriculture",
         text: "description_sustainable_agriculture"
       },
       {
         img: image2RenewableResourcesPng,
         title: "heading_regenerative_agroforestry",
         text: "description_regenerative_agroforestry"
       },
       {
         img: image3RenewableResourcesPng,
         title: "heading_waste_to_resource_agriculture",
         text: "description_waste_to_resource_agriculture"
       }
     ]
   },
   solutionWasteManagement: {
     header: wasteMgmtBg,
     forestryHeader: "waste_management_header_1",
     forestrySubHeader: "Projects_Completed",
     callToAction: "Get_Involved",
     forestrySolutions: "Forests_Preserved",
     businessText: "Our_Waste_Management",
     exploreText: "Explore_our_initiatives",
     topProjectsText: "Lets_Talk",
     cardData: [
       {
         title: "Renewable_Resources",
         imgSrc: renewResource,
         description: "Our_agriculture_mirrors",
         linkText: "Learn_More",
         altText: "Renewable_Resources"
       },
       {
         title: "Waste_Management",
         imgSrc: wasteMgmt,
         description: "Recycling_plastic_minimizes",
         linkText: "Learn_More",
         altText: "Waste_Management"
       }
     ],
     initiatives: [
       {
         img: image1wasteMgmtPng,
         title: "heading_waste_collection",
         text: "description_waste_collection"
       },
       {
         img: image2wasteMgmtPng,
         title: "heading_circular_economy",
         text: "description_circular_economy"
       },
       {
         img: image3wasteMgmtPng,
         title: "heading_community_engagement",
         text: "description_community_engagement"
       }
     ]
   }

 }

 export const  faqData = [
  {
    question: "What are the key factors to consider when choosing which crops to plant?",
    answer: "When selecting crops, it's important to consider factors like your local climate and soil conditions, market demand for different crops, available resources such as water and labor, potential pests and diseases in your region, and your own farming goals and expertise."
  },
  {
    question: "How can I improve the fertility of my soil naturally?",
    answer: "You can enhance soil fertility through various natural methods, including incorporating organic matter like compost and manure, practicing crop rotation, planting cover crops, reducing tillage, and ensuring proper drainage and aeration."
  },
  {
    question: "What are some common sustainable farming practices?",
    answer: "Sustainable farming practices include no-till or reduced tillage, crop rotation, cover cropping, integrated pest management (IPM), water-efficient irrigation techniques, agroforestry, and the use of renewable energy sources."
  },
  {
    question: "How can I effectively manage pests and diseases in my crops without relying heavily on synthetic pesticides?",
    answer: "Integrated Pest Management (IPM) is a strategy that emphasizes a combination of methods, including biological control (using natural enemies of pests), cultural practices (like crop rotation and sanitation), physical barriers, and targeted use of pesticides only when necessary and at economic thresholds."
  },
  {
    question: "What are the benefits of crop rotation?",
    answer: "Crop rotation helps to improve soil health by balancing nutrient use, reducing the buildup of specific pests and diseases, improving soil structure, and can even help with weed suppression."
  },
  {
    question: "How can I conserve water in my agricultural practices?",
    answer: "Water conservation techniques in agriculture include using drip irrigation or micro-sprinklers, mulching to reduce evaporation, planting drought-tolerant crops, rainwater harvesting, and improving soil health to increase water retention."
  },
  {
    question: "What are some ways to add value to my agricultural products?",
    answer: "Adding value can involve processing your raw products (e.g., making jam from fruits, grinding grains into flour), packaging and branding your products, selling directly to consumers through farmers' markets or online platforms, or creating value-added products like dried herbs or infused oils."
  }
];


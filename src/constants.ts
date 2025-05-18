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
import wasteManagementDouala from "../src/images/STW-Solution-Waste-Management-Douala-Project.jpg";
import wasteManagementLimbe from "../src/images/STW-Solution-Waste-Management-Limbe.jpg";
import wasteManagementKribi from "../src/images/STW-Solution-Waste-Management-Kribi.jpg";
import forestryProjectKoundi from "../src/images/STW-Solution-Forest-Projects-Koundi.jpg";
import forestryProjectNgaoundal from "../src/images/STW-Solution-Forest-Projects-Ngaoundal.jpg";
import forestryProjectGaroua from "../src/images/STW-Solution-Forest-Projects-Garoua.jpg";
import forestryProjectBetare from "../src/images/STW-Solution-Forest-Projects-Betare.jpg";
import forestryProjectBafia from "../src/images/STW-Solution-Forest-Projects-Bafia(Kiwi_trees).jpg";
import serviceBg from "../src/images/solutions/service-bg.png";
import renewResource from "../src/images/solutions/renewResource.jpeg";
import wasteMgmt from "../src/images/solutions/wasteMgmt.jpeg";
import earthSvg from "../src/images/solutions/earth.svg";
import climateChangePng from "../src/images/solutions/climate-change.png";
import plantPng from "../src/images/solutions/plant.png";
import renewableResourceBg from "../src/images/solutions/renewableResourceBg.png";
import image1RenewableResourcesPng from "../src/images/solutions/image1RenewableResources.png";
import image2RenewableResourcesPng from "../src/images/solutions/image2RenewableResources.png";
import image3RenewableResourcesPng from "../src/images/solutions/image3RenewableResources.png";
import wasteMgmtBg from "../src/images/solutions/wasteMgmtBg.png";
import image1wasteMgmtPng from "../src/images/solutions/image1wasteMgmt.png";
import image2wasteMgmtPng from "../src/images/solutions/image2wasteMgmt.png";
import image3wasteMgmtPng from "../src/images/solutions/image3wasteMgmt.png";

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
    title: "koundi_forest_conservation_project",
    categories: [ProjectCategory.UNDER_DEVELOPMENT, ProjectCategory.FORESTRY],
    goal: "koundi_forest_conservation_project_goal",
    description: [
      "koundi_forest_conservation_project_description_p1",
      "koundi_forest_conservation_project_description_p2",
      "koundi_forest_conservation_project_description_p3",
      "koundi_forest_conservation_project_description_p4",
    ],
    impact: {
      environmental: {
        name: "environmental_impact_name",
        description: "koundi_forest_project_environmental_impact_description",
        imageUrl: "",
      },
      localCommunities: {
        name: "local_communities_impact_name",
        description: {
          main: "koundi_forest_project_local_communities_impact_description",
        },
        imageUrl: "",
      },
      project: {
        name: "project_impact_name",
        description: {
          paragraph1: "koundi_forest_project_impact_description_p1",
          paragraph2: "koundi_forest_project_impact_description_p2",
          listDescription:
            "koundi_forest_project_impact_description_list_description",
          listItems: [
            "koundi_forest_project_impact_description_list_item1",
            "koundi_forest_project_impact_description_list_item2",
            "koundi_forest_project_impact_description_list_item3",
          ],
        },
        imageUrl: "",
      },
    },
    timeLine: {
      title: "project_timeline",
      description: "koundi_forest_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectKoundi,
    heroImageAlt: "forest_in_koundi",
    heroImageClass: "carbonsate-cameroon-img",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/koundi-conversation-project",
    alias: "koundi-conversation-project",
    sdgsInfo: {
      description: "sdgs_info_description",
      sdgs: [
        {
          number: "1",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "8",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "13",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "15",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "17",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
      ],
    },
    location: "koundi_conservation_project_location",
    //geolocation: "4°43'59.9"N 13°36'00.0"E"
  },
  {
    title: "kpawara_community_forest_restoration_project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    goal: "kpawara_community_forest_restoration_project_goal",
    description: [
      "kpawara_community_forest_restoration_project_description_p1",
      "kpawara_community_forest_restoration_project_description_p2",
      "kpawara_community_forest_restoration_project_description_p3",
    ],
    impact: {
      environmental: {
        name: "environmental_impact_name",
        description:
          "kpawara_community_forest_restoration_project_environmental_impact_description",
        imageUrl: "",
      },
      localCommunities: {
        name: "local_communities_impact_name",
        description: {
          paragraph1:
            "kpawara_community_forest_restoration_project_local_communities_impact_description_p1",
          paragraph2:
            "kpawara_community_forest_restoration_project_local_communities_impact_description_p2",
        },
        imageUrl: "",
      },
      project: {
        name: "project_impact_name",
        description: {
          paragraph1:
            "kpawara_community_forest_restoration_project_impact_description_p1",
          paragraph2:
            "kpawara_community_forest_restoration_project_impact_description_p2",
        },
        imageUrl: "",
      },
      economicTransformation: {
        name: "economic_transformation_name",
        description:
          "kpawara_community_forest_restoration_project_economic_transformation_description",
      },
    },
    timeLine: {
      title: "project_timeline",
      description:
        "kpawara_community_forest_restoration_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectGaroua,
    heroImageAlt: "forest_in_garoua",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/kpawara-community-forest-restoration-project",
    alias: "kpawara-community-forest-restoration-project",
    sdgsInfo: {
      description: "sdgs_info_description",
      sdgs: [
        {
          number: "1",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "2",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "5",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "13",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "15",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "17",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
      ],
    },
    location: "kpawara_community_forest_restoration_project_location",
  },
  {
    title: "mandjou_agroforestry_and_reforestation_project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    goal: "mandjou_agroforestry_and_reforestation_project_goal",
    description: [
      "mandjou_agroforestry_and_reforestation_project_description_p1",
      "mandjou_agroforestry_and_reforestation_project_description_p2",
    ],
    impact: {
      environmental: {
        name: "environmental_impact_name",
        description:
          "mandjou_agroforestry_and_reforestation_project_environmental_impact_description",
        imageUrl: "",
      },
      localCommunities: {
        name: "local_communities_impact_name",
        description: {
          main: "mandjou_agroforestry_and_reforestation_project_local_communities_impact_description",
        },
        imageUrl: "",
      },
      project: {
        name: "project_impact_name",
        description: {
          paragraph1:
            "mandjou_agroforestry_and_reforestation_project_impact_description_p1",
          paragraph2:
            "mandjou_agroforestry_and_reforestation_project_impact_description_p2",
        },
        imageUrl: "",
      },
      economicTransformation: {
        name: "economic_transformation_name",
        description:
          "mandjou_agroforestry_and_reforestation_project_economic_transformation_description",
      },
    },
    timeLine: {
      title: "project_timeline",
      description:
        "mandjou_agroforestry_and_reforestation_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectNgaoundal,
    heroImageAlt: "forest_in_ngaoundal",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/mandjou-agroforestry-and-reforestation-project",
    alias: "mandjou-agroforestry-and-reforestation-project",
    sdgsInfo: {
      description: "sdgs_info_description",
      sdgs: [
        {
          number: "1",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "2",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "5",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "13",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "15",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "17",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
      ],
    },
    location: "mandjou_agroforestry_and_reforestation_project_location",
  },
  {
    title: "banefou_landfill_gas_capture_and_energy_utilization_project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.WASTE_MANAGEMENT],
    goal: "banefou_landfill_gas_capture_and_energy_utilization_project_goal",
    description: [
      "banefou_landfill_gas_capture_and_energy_utilization_project_description_p1",
      "banefou_landfill_gas_capture_and_energy_utilization_project_description_p2",
      "banefou_landfill_gas_capture_and_energy_utilization_project_description_p3",
    ],
    impact: {
      environmental: {
        name: "environmental_impact_name",
        description:
          "banefou_landfill_gas_capture_and_energy_utilization_project_environmental_impact_description",
        imageUrl: "",
      },
      project: {
        name: "project_impact_name",
        description: {
          main: "banefou_landfill_gas_capture_and_energy_utilization_project_impact_main_description",
        },
        imageUrl: "",
      },
      socioEconomic: {
        name: "socio_economic_impact_name",
        description:
          "banefou_landfill_gas_capture_and_energy_utilization_project_socio_economic_impact_description",
        imageUrl: "",
      },
      technology: {
        name: "technology_impact_name",
        description:
          "banefou_landfill_gas_capture_and_energy_utilization_project_technology_impact_description",
        imageUrl: "",
      },
    },
    timeLine: {
      title: "project_timeline",
      description:
        "banefou_landfill_gas_capture_and_energy_utilization_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectNgaoundal,
    heroImageAlt: "",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/banefou-landfill-gas-capture-and-energy-utilization-project",
    alias: "banefou-landfill-gas-capture-and-energy-utilization-project",
    sdgsInfo: {
      description: "sdgs_info_description",
      sdgs: [
        {
          number: "7",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "8",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "9",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "13",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
        {
          number: "17",
          title: "",
          description: "",
          moreInfoUrl: "",
          iconSrc: "",
          class: "",
        },
      ],
    },
    location:
      "banefou_landfill_gas_capture_and_energy_utilization_project_location",
    //geolocation: "5°28'59.4"N 10°29'48.0"E"
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
        altText: "Renewable_Resources",
      },
      {
        title: "Waste_Management",
        imgSrc: wasteMgmt,
        description: "Recycling_plastic_minimizes",
        linkText: "Learn_More",
        altText: "Waste_Management",
      },
    ],
    initiatives: [
      {
        img: earthSvg,
        title: "Forest_Conservation_Initiatives",
        text: "forest_con_text",
      },
      {
        img: climateChangePng,
        title: "Improved_Forest_Management",
        text: "improved_fores_mgmt_text",
      },
      {
        img: plantPng,
        title: "Paulownia_Tomentosa_Tree",
        text: "tree_planting_init_text",
      },
    ],
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
        altText: "Renewable_Resources",
      },
      {
        title: "Waste_Management",
        imgSrc: wasteMgmt,
        description: "Recycling_plastic_minimizes",
        linkText: "Learn_More",
        altText: "Waste_Management",
      },
    ],
    initiatives: [
      {
        img: image1RenewableResourcesPng,
        title: "heading_sustainable_agriculture",
        text: "description_sustainable_agriculture",
      },
      {
        img: image2RenewableResourcesPng,
        title: "heading_regenerative_agroforestry",
        text: "description_regenerative_agroforestry",
      },
      {
        img: image3RenewableResourcesPng,
        title: "heading_waste_to_resource_agriculture",
        text: "description_waste_to_resource_agriculture",
      },
    ],
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
        altText: "Renewable_Resources",
      },
      {
        title: "Waste_Management",
        imgSrc: wasteMgmt,
        description: "Recycling_plastic_minimizes",
        linkText: "Learn_More",
        altText: "Waste_Management",
      },
    ],
    initiatives: [
      {
        img: image1wasteMgmtPng,
        title: "heading_waste_collection",
        text: "description_waste_collection",
      },
      {
        img: image2wasteMgmtPng,
        title: "heading_circular_economy",
        text: "description_circular_economy",
      },
      {
        img: image3wasteMgmtPng,
        title: "heading_community_engagement",
        text: "description_community_engagement",
      },
    ],
  },
};

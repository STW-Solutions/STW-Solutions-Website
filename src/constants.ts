import reason1 from "../src/images/reason1.png";
import reason2 from "../src/images/reason2.png";
import reason3 from "../src/images/reason3.png";
import cleanhub from "../src/images/CleanHub.png";
import enef from "../src/images/ENEFCam.png";
import carbonsate from "../src/images/Carbonsate.png";
import minepded from "../src/images/MINEPDED.png";
import ministryForestry from "../src/images/MinistryForestry.png";
import volkswagen from "../src/images/Volkswagen.webp";
import { Project, ProjectCategory, SDG, Solutions } from "./models";
import wasteManagementLimbe from "../src/images/carbonsate-cameroon.avif";
import forestryProjectKoundi from "../src/images/STW-Solution-Forest-Projects-Koundi.jpg";
import forestryProjectNgaoundal from "../src/images/STW-Solution-Forest-Projects-Ngaoundal.jpg";
import forestryProjectGaroua from "../src/images/STW-Solution-Forest-Projects-Garoua.jpg";
import sdg1 from "../src/images/sdgs/1.png";
import sdg2 from "../src/images/sdgs/2.png";
import sdg3 from "../src/images/sdgs/3.png";
import sdg4 from "../src/images/sdgs/4.png";
import sdg5 from "../src/images/sdgs/5.png";
import sdg6 from "../src/images/sdgs/6.png";
import sdg7 from "../src/images/sdgs/7.png";
import sdg8 from "../src/images/sdgs/8.png";
import sdg9 from "../src/images/sdgs/9.png";
import sdg10 from "../src/images/sdgs/10.png";
import sdg11 from "../src/images/sdgs/11.png";
import sdg12 from "../src/images/sdgs/12.png";
import sdg13 from "../src/images/sdgs/13.png";
import sdg14 from "../src/images/sdgs/14.png";
import sdg15 from "../src/images/sdgs/15.png";
import sdg16 from "../src/images/sdgs/16.png";
import sdg17 from "../src/images/sdgs/17.png";
import forestrySolutionsImg1 from "../src/images/solutions/forestry_solutions_1.webp";
import forestrySolutionsImg2 from "../src/images/solutions/forestry_solutions_2.jpg";
import forestrySolutionsImg3 from "../src/images/solutions/forestry_solutions_3.jpg";
import renewableEnergySolutionsImg1 from "../src/images/solutions/renewable_energy_solutions_1.jpg";
import renewableEnergySolutionsImg2 from "../src/images/solutions/renewable_energy_solutions_2.jpg";
import renewableEnergySolutionsImg3 from "../src/images/solutions/renewable_energy_solutions_3.jpeg";
import wasteManagementSolutionsImg1 from "../src/images/solutions/waste_management_solutions_1.avif";
import wasteManagementSolutionsImg2 from "../src/images/solutions/waste_management_solutions_2.webp";
import wasteManagementSolutionsImg3 from "../src/images/solutions/waste_management_solutions_3.jpg";

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
    impact: [
      {
        name: "environmental_impact_name",
        description: {
          main: "koundi_forest_project_environmental_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "local_communities_impact_name",
        description: {
          main: "koundi_forest_project_local_communities_impact_description",
        },
        imageUrl: "",
      },
      {
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
    ],
    timeLine: {
      title: "timeline",
      description: "koundi_forest_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectKoundi,
    heroImageAlt: "forest_in_koundi",
    heroImageClass: "carbonsate-cameroon-img",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/koundi-forest-conservation-project",
    alias: "koundi-forest-conservation-project",
    sdgsInfo: {
      description: "koundi_conservation_project_sdgs_info_description",
      sdgs: ["1", "8", "13", "15", "17"],
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
    impact: [
      {
        name: "environmental_impact_name",
        description: {
          main: "kpawara_community_forest_restoration_project_environmental_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "local_communities_impact_name",
        description: {
          paragraph1:
            "kpawara_community_forest_restoration_project_local_communities_impact_description_p1",
          paragraph2:
            "kpawara_community_forest_restoration_project_local_communities_impact_description_p2",
        },
        imageUrl: "",
      },
      {
        name: "project_impact_name",
        description: {
          paragraph1:
            "kpawara_community_forest_restoration_project_impact_description_p1",
          paragraph2:
            "kpawara_community_forest_restoration_project_impact_description_p2",
        },
        imageUrl: "",
      },
      {
        name: "economic_transformation_name",
        description: {
          main: "kpawara_community_forest_restoration_project_economic_transformation_description",
        },
      },
    ],
    timeLine: {
      title: "timeline",
      description:
        "kpawara_community_forest_restoration_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectGaroua,
    heroImageAlt: "",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/kpawara-community-forest-restoration-project",
    alias: "kpawara-community-forest-restoration-project",
    sdgsInfo: {
      description: "kpawara_community_forest_restoration_project_sdgs_info_description",
      sdgs: ["1", "2", "5", "13", "15", "17"],
    },
    location:
      "kpawara_community_forest_restoration_project_location",
  },
  {
    title: "mandjou_agroforestry_and_reforestation_project",
    categories: [ProjectCategory.COMING_SOON, ProjectCategory.FORESTRY],
    goal: "mandjou_agroforestry_and_reforestation_project_goal",
    description: [
      "mandjou_agroforestry_and_reforestation_project_description_p1",
      "mandjou_agroforestry_and_reforestation_project_description_p2",
    ],
    impact: [
      {
        name: "environmental_impact_name",
        description: {
          main: "mandjou_agroforestry_and_reforestation_project_environmental_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "local_communities_impact_name",
        description: {
          main: "mandjou_agroforestry_and_reforestation_project_local_communities_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "project_impact_name",
        description: {
          paragraph1:
            "mandjou_agroforestry_and_reforestation_project_impact_description_p1",
          paragraph2:
            "mandjou_agroforestry_and_reforestation_project_impact_description_p2",
        },
        imageUrl: "",
      },
      {
        name: "economic_transformation_name",
        description: {
          main: "mandjou_agroforestry_and_reforestation_project_economic_transformation_description",
        },
      },
    ],
    timeLine: {
      title: "timeline",
      description:
        "mandjou_agroforestry_and_reforestation_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: forestryProjectNgaoundal,
    heroImageAlt: "",
    backgroundColor: "#FFFFFF",
    moreInfo: "/project-details/mandjou-agroforestry-and-reforestation-project",
    alias: "mandjou-agroforestry-and-reforestation-project",
    sdgsInfo: {
      description:
        "mandjou_agroforestry_and_reforestation_project_sdgs_info_description",
      sdgs: ["1", "2", "5", "13", "15", "17"],
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
    impact: [
      {
        name: "environmental_impact_name",
        description: {
          main: "banefou_landfill_gas_capture_and_energy_utilization_project_environmental_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "project_impact_name",
        description: {
          main: "banefou_landfill_gas_capture_and_energy_utilization_project_impact_main_description",
        },
        imageUrl: "",
      },
      {
        name: "socio_economic_impact_name",
        description: {
          main: "banefou_landfill_gas_capture_and_energy_utilization_project_socio_economic_impact_description",
        },
        imageUrl: "",
      },
      {
        name: "technology_impact_name",
        description: {
          main: "banefou_landfill_gas_capture_and_energy_utilization_project_technology_impact_description",
        },
        imageUrl: "",
      },
    ],
    timeLine: {
      title: "timeline",
      description:
        "banefou_landfill_gas_capture_and_energy_utilization_project_timeline_description",
      startDate: "",
      endDate: "",
    },
    heroImageSrc: wasteManagementLimbe,
    heroImageAlt: "",
    backgroundColor: "#FFFFFF",
    moreInfo:
      "/project-details/banefou-landfill-gas-capture-and-energy-utilization-project",
    alias: "banefou-landfill-gas-capture-and-energy-utilization-project",
    sdgsInfo: {
      description:
        "banefou_landfill_gas_capture_and_energy_utilization_project_sdgs_info_description",
      sdgs: ["7", "8", "9", "13", "17"],
    },
    location:
      "banefou_landfill_gas_capture_and_energy_utilization_project_location",
    //geolocation: "5°28'59.4"N 10°29'48.0"E"
  },
];

export const solutions: Solutions[] = [
  {
    heroImages: [
      {
        image: {
          src: forestrySolutionsImg3,
          alt: ''
        }
      },
      {
        image: {
          src: forestrySolutionsImg2,
          alt: ''
        }
      },
      {
        image: {
          src: forestrySolutionsImg1,
          alt: ''
        }
      }
    ],
    alias: 'forestry',
    title: 'forestry_solutions',
    titleDescription: 'forestry_solutions_title_description',
    statistics: {
      description: "forestry_solutions_stats_description",
      items: [
        {
          name: "forest_to_be_preserved",
          count: 1600,
          unit: "Ha"
        },
        {
          name: "trees_to_be_planted",
          count: 1.5,
          unit: "million"
        },
        {
          name: "forest_land_to_be_restored",
          count: 1500,
          unit: "Ha"
        }
      ]
    }
  },
  {
    heroImages: [
      {
        image: {
          src: renewableEnergySolutionsImg1,
          alt: ''
        }
      },
      {
        image: {
          src: renewableEnergySolutionsImg2,
          alt: ''
        }
      },
      {
        image: {
          src: renewableEnergySolutionsImg3,
          alt: ''
        }
      }
    ],
    alias: 'renewable-energy',
    title: 'renewable_energy_solutions',
    titleDescription: 'renewable_energy_solutions_title_description',
    statistics: {
      description: "renewable_energy_solutions_stats_description",
      items: [
        {
          name: "of_co2_to_be_captured",
          count: 7.9,
          unit: "mio tons"
        }
      ]
    }
  },
  {
    heroImages: [
      {
        image: {
          src: wasteManagementSolutionsImg1,
          alt: ''
        }
      },
      {
        image: {
          src: wasteManagementSolutionsImg2,
          alt: ''
        }
      },
      {
        image: {
          src: wasteManagementSolutionsImg3,
          alt: ''
        }
      }
    ],
    alias: 'waste-management',
    title: 'waste_management_solutions',
    titleDescription: 'waste_management_solutions_title_description',
    statistics: {
      description: "waste_management_solutions_stats_description",
      items: [
        {
          name: "plastic_waste_collection_and_recycling_hubs",
          count: 3,
          unit: ""
        }
      ]
    }
  }
]

export const unSDGs: SDG[] = [
  {
    id: "1",
    title: "no_poverty",
    iconSrc: sdg1,
    moreInfoUrl: "https://sdgs.un.org/goals/goal1",
    class: "sdg1-btn"
  },
  {
    id: "2",
    title: "zero_hunger",
    iconSrc: sdg2,
    moreInfoUrl: "https://sdgs.un.org/goals/goal2",
    class: "sdg2-btn"
  },
  {
    id: "3",
    title: "good_health_and_wellbeing",
    iconSrc: sdg3,
    moreInfoUrl: "https://sdgs.un.org/goals/goal3",
    class: "sdg3-btn"
  },
  {
    id: "4",
    title: "quality_education",
    iconSrc: sdg4,
    moreInfoUrl: "https://sdgs.un.org/goals/goal4",
    class: "sdg4-btn"
  },
  {
    id: "5",
    title: "gender_equality",
    iconSrc: sdg5,
    moreInfoUrl: "https://sdgs.un.org/goals/goal5",
    class: "sdg5-btn"
  },
  {
    id: "6",
    title: "clean_water_and_sanitation",
    iconSrc: sdg6,
    moreInfoUrl: "https://sdgs.un.org/goals/goal6",
    class: "sdg6-btn"
  },
  {
    id: "7",
    title: "affordable_and_clean_energy",
    iconSrc: sdg7,
    moreInfoUrl: "https://sdgs.un.org/goals/goal7",
    class: "sdg7-btn"
  },
  {
    id: "8",
    title: "decent_work_and_economic_growth",
    iconSrc: sdg8,
    moreInfoUrl: "https://sdgs.un.org/goals/goal8",
    class: "sdg8-btn"
  },
  {
    id: "9",
    title: "industry_innovation_and_infrastructure",
    iconSrc: sdg9,
    moreInfoUrl: "https://sdgs.un.org/goals/goal9",
    class: "sdg9-btn"
  },
  {
    id: "10",
    title: "reduced_inequalities",
    iconSrc: sdg10,
    moreInfoUrl: "https://sdgs.un.org/goals/goal10",
    class: "sdg10-btn"
  },
  {
    id: "11",
    title: "sustainable_cities_and_communities",
    iconSrc: sdg11,
    moreInfoUrl: "https://sdgs.un.org/goals/goal11",
    class: "sdg11-btn"
  },
  {
    id: "12",
    title: "responsible_consumption_and_production",
    iconSrc: sdg12,
    moreInfoUrl: "https://sdgs.un.org/goals/goal12",
    class: "sdg12-btn"
  },
  {
    id: "13",
    title: "climate_action",
    iconSrc: sdg13,
    moreInfoUrl: "https://sdgs.un.org/goals/goal13",
    class: "sdg13-btn"
  },
  {
    id: "14",
    title: "life_below_water",
    iconSrc: sdg14,
    moreInfoUrl: "https://sdgs.un.org/goals/goal14",
    class: "sdg14-btn"
  },
  {
    id: "15",
    title: "life_on_land",
    iconSrc: sdg15,
    moreInfoUrl: "https://sdgs.un.org/goals/goal15",
    class: "sdg15-btn"
  },
  {
    id: "16",
    title: "peace_justice_and_strong_institutions",
    iconSrc: sdg16,
    moreInfoUrl: "https://sdgs.un.org/goals/goal16",
    class: "sdg16-btn"
  },
  {
    id: "17",
    title: "partnerships_for_the_goals",
    iconSrc: sdg17,
    moreInfoUrl: "https://sdgs.un.org/goals/goal17",
    class: "sdg17-btn"
  },
];

import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to Ayla's gallery.",
    metadata: {
      title: "Home",
      description: "Ayla Tsutsumi's image gallery.",
    },
  },
  gallery: {
    title: "Gallery",
    description: "Ayla's Image Gallery.",
    metadata: {
      title: "Gallery",
      description: "Ayla's Image Gallery created by Kikuo Tsutsumi",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
  },
};

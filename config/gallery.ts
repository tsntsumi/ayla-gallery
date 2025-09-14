import { Icons } from "@/components/common/icons";

export interface imageInterface {
  name: string;
  prompt: string;
  negativeprompt: string;
  image: any;
}

export const unsortedGallery: imageInterface[] = [
];

export const gallery = unsortedGallery
  ?.slice()
  ?.sort((a, b) => b.name - a.name) || [];

export const featuredGallery = gallery?.slice(0, 6) || [];

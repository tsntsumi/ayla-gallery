import { Icons } from "@/components/common/icons";

export interface galleryInterface {
  name: string;
  prompt: string;
  negativePrompt: string;
  seed: number;
  image: any;
}

export const unsortedGallery: galleryInterface[] = [
];

export const gallery = unsortedGallery
  ?.slice()
  ?.sort((a, b) => b.name.localeCompare(a.name)) || [];

export const featuredGallery = gallery?.slice(0, 6) || [];

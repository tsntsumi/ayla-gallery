import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://x.com/stairwayheaven",
  },
  {
    name: "Note",
    username: "stairwayheaven",
    icon: Icons.book,
    link: "https://note.com/stairwayheaven",
  },
  {
    name: "Gmail",
    username: "ayla@stairwayheaven.com",
    icon: Icons.gmail,
    link: "mailto:ayla@stairwayheaven.com",
  },
];

import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GalleryCard from "@/components/gallery/gallery-card";
import { pagesConfig } from "@/config/pages";
import { gallery } from "@/config/gallery";

export const metadata: Metadata = {
  title: pagesConfig.gallery.metadata.title,
  description: pagesConfig.gallery.metadata.description,
};

export default function GalleryPage() {
  return (
    <PageContainer
      title={pagesConfig.gallery.title}
      description={pagesConfig.gallery.description}
    >
      {/*<GalleryCard gallery={gallery} />*/}
    </PageContainer>
  );
}

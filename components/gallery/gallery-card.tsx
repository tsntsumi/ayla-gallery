import Rating from "@/components/gallery/rating";
import type { galleryInterface } from "@/config/gallery";

interface GalleryCardProps {
  gallery: galleryInterface[];
}

export default function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {gallery.map((img, id) => (
        <div
          key={id}
        className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
        <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
          <img.image size={50} />
          <div className="space-y-2">
            <h3 className="font-bold">{img.name}</h3>
            <p className="text-xs text-muted-foreground font-mono">
              Seed: {img.seed}
            </p>
            <p className="text-sm text-muted-foreground">
              {img.prompt}
            </p>
            <p className="text-sm text-muted-foreground">
              {img.negativePrompt}
            </p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

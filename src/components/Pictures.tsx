import { cn } from "@/lib/utils";

export default function Pictures() {
  return (
    <section className="grid grid-cols-2 grid-rows-1 lg:grid-cols-4">
      <picture
        className={cn(
          "aspect-square w-full bg-[url('/images/mobile/image-gallery-milkbottles.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "lg:h-[600px] lg:bg-[url('/images/desktop/image-gallery-milkbottles.jpg')]"
        )}
      ></picture>
      <picture
        className={cn(
          "aspect-square w-full bg-[url('/images/mobile/image-gallery-orange.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "lg:h-[600px] lg:bg-[url('/images/desktop/image-gallery-orange.jpg')]"
        )}
      ></picture>
      <picture
        className={cn(
          "aspect-square w-full bg-[url('/images/mobile/image-gallery-cone.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "lg:h-[600px] lg:bg-[url('/images/desktop/image-gallery-cone.jpg')]"
        )}
      ></picture>
      <picture
        className={cn(
          "aspect-square w-full bg-[url('/images/mobile/image-gallery-sugar-cubes.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "lg:h-[600px] lg:bg-[url('/images/desktop/image-gallery-sugar-cubes.jpg')]"
        )}
      ></picture>
    </section>
  );
}

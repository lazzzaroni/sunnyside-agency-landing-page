import Link from "next/link";

import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section className="grid h-auto grid-cols-1 bg-primary-soft-red/5 md:grid-cols-2">
      <div
        className={cn(
          "order-1 aspect-square w-full bg-[url('/images/mobile/image-transform.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "md:order-2 md:bg-[url('/images/desktop/image-transform.jpg')]"
        )}
      ></div>
      <div
        className={cn(
          "order-2 my-16 flex flex-col items-center justify-center px-6 text-center",
          "md:order-1 md:my-auto md:w-full md:items-start md:pl-[23%] md:pr-[15%] md:text-start"
        )}
      >
        <h1
          className={cn(
            "font-serif text-3xl font-extrabold leading-10",
            "md:w-[min(100%,330px)] md:text-[40px]"
          )}
        >
          Transform your brand
        </h1>
        <p
          className={cn(
            "w-[min(100%,500px)] pb-8 pt-6 text-lg leading-relaxed text-neutral-dark-grayish-blue"
          )}
        >
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link
          className={cn(
            "relative inline-block font-serif font-bold before:absolute before:-left-1 before:bottom-0 before:block before:h-2 before:w-[124px] before:rounded-full before:bg-primary-yellow/30 before:hover:bg-primary-yellow/60"
          )}
          href="#"
        >
          <span className="relative inline-block">LEARN MORE</span>
        </Link>
      </div>
      <div
        className={cn(
          "order-3 aspect-square w-full bg-[url('/images/mobile/image-stand-out.jpg')] bg-cover bg-center bg-no-repeat text-center",
          "md:bg-[url('/images/desktop/image-stand-out.jpg')]"
        )}
      ></div>
      <div
        className={cn(
          "order-4 my-16 flex flex-col items-center justify-center px-6 text-center",
          "md:my-auto md:w-full md:items-start md:pl-[23%] md:pr-[15%] md:text-start"
        )}
      >
        <h1
          className={cn(
            "w-[min(80%,330px)] font-serif text-3xl font-extrabold leading-10",
            "md:w-[min(100%,440px)] md:text-[40px]"
          )}
        >
          Stand out to the right audience
        </h1>
        <p
          className={cn(
            "w-[min(100%,500px)] pb-8 pt-6 text-lg leading-relaxed text-neutral-dark-grayish-blue"
          )}
        >
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
        <Link
          className={cn(
            "relative inline-block font-serif font-bold before:absolute before:-left-1 before:bottom-0 before:block before:h-2 before:w-[124px] before:rounded-full before:bg-primary-soft-red/30 before:hover:bg-primary-soft-red/60"
          )}
          href="#"
        >
          <span className="relative inline-block">LEARN MORE</span>
        </Link>
      </div>
      <div
        className={cn(
          "order-5 flex h-[600px] w-full flex-col items-center justify-center bg-[url('/images/mobile/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat text-center text-primary-dark-desaturated-cyan",
          "md:aspect-square md:bg-[url('/images/desktop/image-graphic-design.jpg')] lg:h-auto"
        )}
      >
        <h1 className={cn("mt-auto font-serif text-2xl font-black")}>
          Graphic Design
        </h1>
        <p
          className={cn(
            "w-[min(100%,350px)] py-8 leading-relaxed",
            "md:w-[min(100%,340px)] md:pb-14"
          )}
        >
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients&apos; attention.
        </p>
      </div>
      <div
        className={cn(
          "order-6 flex h-[600px] w-full flex-col items-center justify-center bg-[url('/images/mobile/image-photography.jpg')] bg-cover bg-center bg-no-repeat text-center text-primary-dark-blue",
          "md:aspect-square md:bg-[url('/images/desktop/image-photography.jpg')] lg:h-auto"
        )}
      >
        <h1 className={cn("mt-auto font-serif text-2xl font-black")}>
          Photography
        </h1>
        <p
          className={cn(
            "w-[min(100%,360px)] py-8 leading-relaxed",
            "md:w-[min(100%,340px)] md:pb-14"
          )}
        >
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
}

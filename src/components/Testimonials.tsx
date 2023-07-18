import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section
      className={cn(
        "bg-primary-soft-red/5 px-7 py-2 text-center text-neutral-very-dark-grayish-blue",
        "md:pb-40 md:pt-28"
      )}
    >
      <h1
        className={cn(
          "pt-14 font-serif font-extrabold uppercase tracking-[0.25em] text-neutral-grayish-blue",
          "md:text-xl"
        )}
      >
        Client testimonials
      </h1>
      <div className="flex flex-col items-center justify-center md:mx-auto md:gap-4 lg:w-4/5 lg:flex-row">
        <article
          className={cn(
            "flex flex-col items-center justify-center gap-[30px] pt-16 last:pb-20",
            "md:last:pb-0"
          )}
        >
          <Image
            src="/images/image-emily.jpg"
            width={72}
            height={72}
            alt="Image"
            className="rounded-full"
          />
          <blockquote
            className={cn(
              "w-[min(100%,480px)] p-0 text-lg leading-8",
              "md:pb-10 md:pt-7 lg:w-[min(100%,340px)]"
            )}
          >
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </blockquote>
          <div>
            <h4
              className={cn(
                "pb-1 font-serif text-lg font-extrabold text-neutral-very-dark-desaturated-blue"
              )}
            >
              Emily R.
            </h4>
            <small className={cn("text-sm text-neutral-grayish-blue")}>
              Marketing Director
            </small>
          </div>
        </article>
        <article
          className={cn(
            "flex flex-col items-center justify-center gap-[30px] pt-16 last:pb-20",
            "md:last:pb-0"
          )}
        >
          <Image
            src="/images/image-thomas.jpg"
            width={72}
            height={72}
            alt="Image"
            className="rounded-full"
          />
          <blockquote
            className={cn(
              "w-[min(100%,480px)] p-0 text-lg leading-8",
              "md:pb-10 md:pt-7 lg:w-[min(100%,340px)]"
            )}
          >
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </blockquote>
          <div>
            <h4
              className={cn(
                "pb-1 font-serif text-lg font-extrabold text-neutral-very-dark-desaturated-blue"
              )}
            >
              Thomas S.
            </h4>
            <small className={cn("text-sm text-neutral-grayish-blue")}>
              Chief Operating Officer
            </small>
          </div>
        </article>
        <article
          className={cn(
            "flex flex-col items-center justify-center gap-[30px] pt-16 last:pb-20",
            "md:last:pb-0"
          )}
        >
          <Image
            src="/images/image-jennie.jpg"
            width={72}
            height={72}
            alt="Image"
            className="rounded-full"
          />
          <blockquote
            className={cn(
              "w-[min(100%,480px)] p-0 text-lg leading-8",
              "md:pb-10 md:pt-7 lg:w-[min(100%,340px)]"
            )}
          >
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </blockquote>
          <div>
            <h4
              className={cn(
                "pb-1 font-serif text-lg font-extrabold text-neutral-very-dark-desaturated-blue"
              )}
            >
              Jennie F.
            </h4>
            <small className={cn("text-sm text-neutral-grayish-blue")}>
              Business Owner
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}

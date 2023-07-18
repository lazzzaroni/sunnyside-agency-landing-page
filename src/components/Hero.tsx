import Link from "next/link";

import { cn } from "@/lib/utils";

import { ArrowDown, Logo, Menu } from "./Icons";

export default function Hero() {
  return (
    <section
      className={cn(
        "h-[538px] w-auto bg-[url('/images/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat p-6 text-neutral-white",
        "md:h-[800px] md:bg-[url('/images/desktop/image-header.jpg')] md:p-10"
      )}
    >
      <nav className={cn("flex py-2", "md:py-1.5")}>
        <span className={cn("mr-auto h-auto w-[124px]", "md:w-[170px]")}>
          <Logo />
        </span>
        <button className="flex items-center justify-center md:hidden">
          <Menu />
        </button>
        <ul
          className={cn(
            "hidden",
            "items-center justify-center md:flex md:gap-11 md:pr-2"
          )}
        >
          <li className="text-lg">About</li>
          <li className="text-lg">Services</li>
          <li className="text-lg">Projects</li>
          <li className="text-base">
            <Link
              href="#contact"
              className="rounded-full bg-white px-7 py-[18px] font-serif font-bold uppercase text-neutral-very-dark-desaturated-blue"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className={cn("flex flex-col py-20 text-center", "md:py-28")}>
        <h1
          className={cn(
            "mx-auto w-[min(100%,375px)] font-serif text-[38px] font-extrabold uppercase leading-snug tracking-[0.2em]",
            "md:w-full md:text-[54px]"
          )}
        >
          We are creatives
        </h1>
        <span className={cn("mx-auto p-12", "md:p-20")}>
          <ArrowDown />
        </span>
      </section>
    </section>
  );
}

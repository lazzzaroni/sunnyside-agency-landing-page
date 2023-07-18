import Link from "next/link";

import { cn } from "@/lib/utils";

import { Facebook, Instagram, Logo, Pinterest, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-primary-dark-moderate-cyan/40 py-16 text-center text-primary-dark-desaturated-cyan/75 md:py-14">
      <span className={cn("h-full w-[170px] pb-10", "md:pt-2.5")}>
        <Logo />
      </span>
      <ul className="flex w-[300px] items-center justify-between text-lg text-primary-dark-desaturated-cyan/60">
        <li>
          <Link href="#" className="transition-colors hover:text-neutral-white">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="transition-colors hover:text-neutral-white">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="transition-colors hover:text-neutral-white">
            Projects
          </Link>
        </li>
      </ul>
      <ul className="flex items-start justify-center gap-6 pb-4 pt-[90px]">
        <li>
          <Link
            href="#"
            className="h-5 w-5 transition-colors hover:text-neutral-white"
          >
            <Facebook />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="h-5 w-5 transition-all hover:text-neutral-white"
          >
            <Instagram />
          </Link>
        </li>
        <li className="mt-0.5">
          <Link
            href="#"
            className="h-5 w-5 transition-all hover:text-neutral-white"
          >
            <Twitter />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="h-5 w-5 transition-all hover:text-neutral-white"
          >
            <Pinterest />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

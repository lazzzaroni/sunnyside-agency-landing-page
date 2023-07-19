import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Menu } from "./Icons";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 translate-y-[20%] bg-neutral-white",
          { "invisible hidden": !isOpen }
        )}
      >
        <span className="absolute -top-[23px] right-0 h-0 w-0 border-b-[24px] border-l-[24px] border-r-0 border-t-0 border-solid border-transparent border-b-neutral-white border-r-neutral-white"></span>
        <ul
          className={cn(
            "mb-16 mt-12 flex flex-col items-center justify-center gap-6"
          )}
        >
          <li className="text-lg">
            <Link
              href="#"
              className="text-primary-dark-moderate-cyan hover:text-primary-dark-blue"
            >
              About
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="#"
              className="text-primary-dark-moderate-cyan hover:text-primary-dark-blue"
            >
              Services
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="#"
              className="text-primary-dark-moderate-cyan hover:text-primary-dark-blue"
            >
              Projects
            </Link>
          </li>
          <li className="pt-4 text-base">
            <Link
              href="#"
              className="rounded-full bg-primary-yellow px-7 py-[18px] font-serif font-bold uppercase text-neutral-very-dark-desaturated-blue hover:bg-primary-yellow/80"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

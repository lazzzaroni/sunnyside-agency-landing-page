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
      {isOpen ? (
        <div className={cn("")}>
          <ul
            className={cn(
              "flex flex-col items-center justify-center md:gap-11 md:pr-2"
            )}
          >
            <li className="text-lg">
              <Link href="#" className="hover:text-primary-dark-blue">
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="hover:text-primary-dark-blue">
                Services
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="hover:text-primary-dark-blue">
                Projects
              </Link>
            </li>
            <li className="text-base">
              <Link
                href="#"
                className="rounded-full bg-white px-7 py-[18px] font-serif font-bold uppercase text-neutral-very-dark-desaturated-blue hover:bg-neutral-white/25 hover:text-neutral-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

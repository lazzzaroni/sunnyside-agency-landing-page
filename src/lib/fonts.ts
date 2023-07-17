import { Barlow as FontSans } from "next/font/google";
import { Fraunces as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

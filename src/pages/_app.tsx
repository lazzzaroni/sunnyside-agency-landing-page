import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={cn(
        "text-neutral-off-black mx-auto flex min-h-screen flex-col bg-neutral-white font-sans antialiased",
        fontSans.className,
        fontSerif.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;

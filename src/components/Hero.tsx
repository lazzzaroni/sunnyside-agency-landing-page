import { ArrowDown } from "./Icons";

export default function Hero() {
  return (
    <section className="h-[800px] w-full bg-[url('/images/desktop/image-header.jpg')] bg-cover bg-center bg-no-repeat">
      <nav className="flex border border-red-500">
        <span className="mr-auto">sunnyside</span>
        <ul className="flex">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className="flex flex-col border border-violet-500 text-center">
        <h1>We are creatives</h1>
        <span className="mx-auto">
          <ArrowDown />
        </span>
      </section>
    </section>
  );
}

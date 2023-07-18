import Hero from "./Hero";
import Pictures from "./Pictures";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Container() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Pictures />
      <footer className="text-center">
        <span>sunnyside</span>
        <ul className="flex items-center justify-center gap-2">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <ul className="flex items-start justify-center gap-2">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
        </ul>
      </footer>
    </>
  );
}

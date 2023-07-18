import Image from "next/image";

import Hero from "./Hero";
import Services from "./Services";

export default function Container() {
  return (
    <>
      <Hero />
      <Services />
      <section className="border border-blue-500 text-center">
        <h1>Client testimonials</h1>
        <ul className="flex flex-col items-center justify-center md:flex-row">
          <li>
            <article>
              <Image
                src="/images/image-emily.jpg"
                width={32}
                height={32}
                alt="Image"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, molestias!
              </p>
              <p>name</p>
              <p>profession</p>
            </article>
          </li>
          <li>
            <article>
              <Image
                src="/images/image-thomas.jpg"
                width={32}
                height={32}
                alt="Image"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, molestias!
              </p>
              <p>name</p>
              <p>profession</p>
            </article>
          </li>
          <li>
            <article>
              <Image
                src="/images/image-jennie.jpg"
                width={32}
                height={32}
                alt="Image"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, molestias!
              </p>
              <p>name</p>
              <p>profession</p>
            </article>
          </li>
        </ul>
      </section>
      <section className="grid grid-cols-2 grid-rows-1 border border-cyan-500 md:grid-cols-4">
        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
      </section>
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

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Typewriter() {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = ["Areeb!", "MERN Stack Developer", "NextJs Developer"];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    phrases.forEach((phrase) => {
      tl.call(() => {
        // clear old text
        textRef.current.innerHTML = "";

        // create spans for new phrase
        const letters = phrase.split("");
        letters.forEach((letter) => {
          const span = document.createElement("span");
          span.textContent = letter;
          span.style.opacity = 0;
          textRef.current.appendChild(span);
        });

        // animate typing
        gsap.to(textRef.current.children, {
          opacity: 1,
          duration: 0.05,
          stagger: 0.1,
          ease: "none",
        });
      });

      // pause after typing
      tl.to({}, { duration: 3.5 });

      // animate deleting
      tl.call(() => {
        const spans = Array.from(textRef.current.children).reverse();
        gsap.to(spans, {
          opacity: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: "none",
        });
      });

      // small gap before next phrase
      tl.to({}, { duration: 0.5 });
    });
  }, []);

  return (
    <div className="mt-10">
      <h1 className="md:text-6xl text-2xl  font-semibold md:my-4 md:underline md:underline-offset-8 decoration-1">
        I Am <span ref={textRef}></span>
      </h1>
      <p className="text-sm md:mb-4 text-gray-800 dark:text-gray-300 md:text-xl md:w-2/3 my-2">
        Passionate about building innovative web applications using modern
        technologies. Currently working with Next.js and the MERN stack while
        continuously expanding my development skills.
      </p>
    </div>
  );
}

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import PriceCard from "@/components/PriceCard";

interface PersonalDetails {
  name: string;
  tagline: string;
  img: string;
}

function Home() {
  const { name, tagline, img } = personalDetails as PersonalDetails;
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const myimageRef = useRef<HTMLImageElement>(null);
  const priceCardRef = useRef<HTMLImageElement>(null);
  const [hideAnimatedElements, setHideAnimatedElements] = useState(true);

  const slideUpAnimation = (element: HTMLElement | null, delay?: number) => {
    if (!element) return;

    const tl = gsap.timeline();
    tl.set(element, { xPercent: 100, autoAlpha: 0 }).to(element, {
      xPercent: 0,
      autoAlpha: 1,
      duration: 2,
      ease: "Power3.easeOut",
      delay,
    });
  };

  // Use this new helper method inside useEffect
  useEffect(() => {
    slideUpAnimation(h11.current!, 0.8);
    slideUpAnimation(h12.current!, 0.5);
    slideUpAnimation(h13.current!, 0.1);
    slideUpAnimation(myimageRef.current!, 1.2);
  }, []);

  const slideDownAnimation = (element: HTMLElement | null, delay?: number) => {
    if (!element) return;

    const tl = gsap.timeline();
    tl.set(element, { xPercent: -50, autoAlpha: 0 }).to(element, {
      xPercent: -8,
      autoAlpha: 1,
      duration: 2,
      ease: "Power3.easeOut",
      delay,
    });
  };

  // Inside the Home component definition, just before the return statement
  useEffect(() => {
    slideDownAnimation(priceCardRef.current!, 2);
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     onComplete: () => setHideAnimatedElements(false),
  //   });

  //   tl.set([h11.current, h12.current, h13.current, myimageRef.current], {
  //     autoAlpha: 0,
  //   });
  //   tl.to([h11.current, h12.current, h13.current, myimageRef.current], {
  //     xPercent: -10,
  //     autoAlpha: 1,
  //     duration: 4,
  //     ease: "Power3.easeOut",
  //   });
  // }, []);

  return (
    <>
      <main className="container mx-auto max-width section md:flex justify-between items-center overflow-hidden relative z-10">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋
            <br />
            Transform Your Online Presence
            <br />
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            with Custom-Built Websites
          </h1>
          <h2
            ref={h13}
            className="text-sm text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold mt-3"
          >
            Professional, Affordable, and Tailored to Your Needs
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img
            ref={myimageRef}
            className="w-full md:ml-auto rounded-full"
            src={img}
            alt="Deepesh Genani"
          />
        </div>
      </main>
      <div
        className="flex h-[900px] w-[1800px] flex-col items-center rounded-xl p-4"
        ref={priceCardRef}
      >
        <PriceCard />
      </div>
    </>
  );
}

export default Home;

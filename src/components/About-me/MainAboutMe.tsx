import { CardImage } from "../reusable/Card-Image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useRef } from "react";
import { Translation } from "react-i18next";
import { TextContainer } from "./text-container";
import { CarouselImages } from "./carousel-images";

gsap.registerPlugin(ScrollTrigger, useGSAP, Draggable, InertiaPlugin);

export const MainAboutMe = () => {
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const scrollWrapper = scrollWrapperRef.current;
    if (!scrollWrapper) return;

    const children = Array.from(scrollWrapper.children);
    const totalWidth = children.reduce((acc, child) => {
      return acc + child.getBoundingClientRect().width + 24; // 24px por el gap (gap-6)
    }, 0);

    scrollWrapper.style.width = `${totalWidth}px`;
  }, []);

  useGSAP(() => {
    const refCard = document.querySelector("#card-image-2");
    const container = document.querySelector(".container-images");

    if (!refCard || !container) return;

    const cardRect = refCard.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    // 2) calcular la distancia desde el borde izquierdo del contenedor
    const finalX = cardRect.left - containerRect.left;
    console.log({ finalX });
    ScrollTrigger.create({
      trigger: ".first-part-about-me",
      start: "top 48px",
      end: "bottom 48px",
      scrub: true,
      pin: ".first-section-about-me",
      // markers: true,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-part-about-me",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    tl.addLabel("images-appear", "text-appear+=3.9");

    ScrollTrigger.create({
      trigger: ".text-container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
    });

    tl.from(
      "#firt-card-about-me",
      {
        y: -100,
        x: -600,
        opacity: 0,
        rotate: 720,
        duration: 1,
        ease: "back",
      },
      0
    );
    tl.to(
      ".container-title",
      {
        scale: 0.5,
        xPercent: -30,
        yPercent: -40,
        duration: .5,
        ease: "power1",
      },
      1.3
    );
    tl.addLabel("text-appear");
    tl.to(
      ".text-about-me",
      {
        y: -1550,
        duration: 3,
        stagger: 0.9,
        ease: "power1",
      },
      "text-appear+=0.1"
    );

    tl.to(
      ".text-about-me",
      {
        opacity: 1,
        duration: 1.5,
        stagger: 0.9,
        ease: "power1",
      },
      "text-appear+=0.1"
    );

    tl.to(
      ".text-about-me",
      {
        opacity: 0,
        duration: 1.5,
        stagger: 0.9,
        ease: "power1",
      },
      "text-appear+=1.3"
    );

    tl.to(
      "#firt-card-about-me",
      {
        rotate: 5,
        rotateZ: 15,
        x: 100,
        skewX: 10,
        duration: 0.8,
        ease: "back",
      },
      "text-appear+=.5"
    );
    tl.to(
      "#firt-card-about-me",
      {
        rotate: -5,
        rotateZ: -15,
        skewX: -10,
        skewY: -5,
        duration: 0.8,
        ease: "back",
      },
      "text-appear+=1.8"
    );
    tl.to(
      "#firt-card-about-me",
      {
        rotate: -5,
        rotateZ: -15,
        skewX: -10,
        skewY: 10,
        duration: 0.8,
        ease: "back",
      },
      "text-appear+=2.6"
    );
    tl.addLabel("cards-swap");
    tl.to(
      "#firt-card-about-me",
      {
        left: 0,
        x: `${finalX * 1.23}px`,
        yPercent: -45,
        width: "304px",
        rotate: 3,
        rotateZ: -15,
        skewX: 0,
        skewY: 0,
        duration: 0.5,
        ease: "back",
      },
      "text-appear+=3.4"
    );
    tl.to(
      ".images-container",
      {
        yPercent: -72,
        duration: 0.3,
        ease: "power4.out",
      },
      "text-appear+=3.5"
    );
    tl.to(
      ".text-container",
      {
        yPercent: -200,
        duration: 0.2,
        ease: "power4.out",
      },
      "text-appear+=3.5"
    );

    tl.from(
      ".images-scroll",
      {
        y: 1000,
        duration: 0.3,
        stagger: 0.15,
        ease: "power4.out",
      },
      "text-appear+=3.5"
    );

    tl.to(
      "#firt-card-about-me",
      {
        opacity: 0,
        zIndex: -10,
        duration: 0.2,
        ease: "power4.out",
      },
      "text-appear+=4"
    );
    tl.to(
      ".image-main-scroll",
      {
        opacity: 1,
        zIndex: 10,
        duration: 0.2,
        ease: "power4.out",
      },
      "text-appear+=4"
    );
  }, []);

  return (
    <main className="first-part-about-me w-full h-[1700vh] flex flex-col items-center justify-start -mt-24">
      <section className="first-section-about-me relative h-screen w-full overflow-hidden ">
        <Translation ns={["aboutMe"]}>
          {(t) => (
            <>
              <div className="container-title absolute top-10 left-10 md:left-1/4 md:-translate-x-1/2 ">
                <h1 className="text-8xl font-bold text-left text-primary-blue  font-space-grotesk">
                  {t("title")}
                </h1>
                <h2 className="text-8xl font-bold text-left text-primary-blue font-space-grotesk">
                  {t("title2")}
                </h2>
              </div>

              <CardImage
                id="firt-card-about-me"
                classNameImg="object-cover "
                className="absolute top-1/2 w-[250px] h-[340px] md:h-auto md:w-[304px] -translate-y-1/2 z-50 left-[90%] md:left-[80%] -translate-x-1/2 "
                imageSrc={"/images/about-me/mini-enzo.webp"}
                alt={t("aboutMe:images.miniMe")}
                titleCard={t("aboutMe:images.miniMe")}
              />
            </>
          )}
        </Translation>
        <TextContainer />
        <CarouselImages />
      </section>
    </main>
  );
};

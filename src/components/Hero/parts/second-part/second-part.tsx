  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/all";
  import { AtractionEffect } from "../../../reusable/atraction-effect";
  import { SecondCard } from "./second-card";

  export const SecondPart = () => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useGSAP(() => {
      let hasExited = false;
      const timeEnd = 0.8;
      const timeStart = 0.2;

      ScrollTrigger.create({
      trigger: ".second-section",
      start: "top 5%",
      end: "bottom center",
      scrub: true,
      pin: ".second-pinned-containerr",
      pinSpacing: true,

      onUpdate: (self) => {
        const p = self.progress;
        
        // 1) Animación de salida al subir y pasar 80%
        if (p >= timeEnd && !hasExited) {
          hasExited = true;
          let timelineEnd = gsap.timeline();

          timelineEnd.to(".fake-container", {
            backgroundColor : "white",
            duration: 0.5,
            ease: "power1.out",

          }, 0)
          timelineEnd.to(".sp-text", {
            x: -400,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          }, 0.5);
          timelineEnd.to(".circle-about-me", {
            x: 400,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          }, 0.5);
        }
        
        // 2) Animación de onEnterBack
        if (timeStart < p && p < timeEnd && hasExited) {
          hasExited = false;
          gsap.to(".sp-text", {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(".circle-about-me", {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(".fake-container", {
            backgroundColor : "#3AB7D0",
            duration: 0.5,
            ease: "power1.out",
          });
        }
        // 3) Animación de salida al bajar y pasar 30%
        if (p <= timeStart && !hasExited) {
          hasExited = true;
        }
      },
    });

      gsap.set(".fake-container", {
        xPercent: -50,
        yPercent: 0,
        transformOrigin: "center center",
      });
      gsap.set(".second-pinned-containerr", {
        transformOrigin: "center center",
      });

      const timelineSecondPart = gsap.timeline({
        scrollTrigger: {
          trigger: ".second-section",
          start: "-20% top",
          end: "bottom center",
          scrub: true,
        },
      });

      timelineSecondPart.to(
        ".fake-container",
        {
          duration: 10,
          width: "200%",
          height: "400%",
          y: "-30%",
          transformOrigin: "center center",
          ease: "power3.out",
        },
        "first"
      );

      timelineSecondPart.to(
        ".second-pinned-containerr",
        {
          duration: 2,
          width: "130%",
          height: "100%",
          transformOrigin: "center center",
          ease: "power3.out",
        },
        "first"
      );

      timelineSecondPart.to(
        ".sp-text",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "first+=2"
      );
      timelineSecondPart.to(
        ".circle-about-me",{
          opacity: 1,
          duration: 1,
          zIndex: 30,
          ease: "power1.out",
        },
         "first+=2"
      );

      timelineSecondPart.to(
        ".circle-scale",
        {
          duration: 4,
          scale: 500,
          ease: "bounce.in",
        },
        "first+=4.5"
      );
    }, []);

    return (
      <section className="second-section mt-20 relative main-card-container h-[300vh] overflow-hidden flex items-start justify-center">
        <SecondCard/>
      </section>
    );
  };

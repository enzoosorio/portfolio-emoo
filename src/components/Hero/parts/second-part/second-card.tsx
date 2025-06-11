import { AtractionEffect } from "../../../reusable/atraction-effect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { Translation } from "react-i18next";

gsap.registerPlugin(SplitText, useGSAP);

export const SecondCard = () => {

  // useGSAP(() => { 
  //   SplitText.create(".sp-text", {
  //           type: "words",
  //           wordsClass: "words++",
  //           autoSplit: true,
  //           ignore : "div",
  //           aria: "auto",
  //           onSplit: (self) => {
  //             gsap.from(self.words, {
  //           y: 100,
  //           opacity: 0,
  //           stagger: {
  //             amount: 0.5,
  //             grid : "auto",
  //             axis: "y",
  //             from: "random",
  //             ease: "power1.out",
  //           },
  //           duration: .8,
  //           ease: "power1.out",
  //           scrollTrigger: {
  //           trigger: ".second-section",
  //           start: "top top",
  //           end: "bottom bottom",
  //           toggleActions: "play none none reverse",
  //           }
  //         })
  //           }      
  //         })
      
          
      
  // }, [])

  return (
    <div className="relative second-pinned-containerr flex flex-col items-center lg:items-start justify-center lg:justify-center gap-6 xl:gap-12 p-6  w-[90%] mx-auto z-40 lg:h-[860px] rounded-lg">
     <Translation ns={["heroSecondPart"]}>
      {(t) => (
        <>
         <div className="fake-container origin-center absolute top-0 left-1/2 h-full w-[80%] -z-10 bg-primary-blue  rounded-lg" />
      <p 
      aria-label="¡Hola! Actualmente estoy enfocado en el desarrollo web. Me apasiona
        crear experiencias digitales dinámicas que no solo destaquen
        visualmente, sino que también impulsen ideas con propósito. Mi meta es
        ayudar a emprendedores y negocios en crecimiento a transformar sus ideas
        en experiencias digitales claras, atractivas y funcionales."
      className="sp-text sp-text1 text-base md:text-lg lg:text-2xl 2xl:text-3xl leading-10 xl:leading-14 font-space-grotesk opacity-0 text-pretty pt-20 md:pt-0  lg:w-8/12 pl-2 text-white">
        {t("firstParagraph")}
      </p>
      <p className="sp-text text-base lg:text-2xl leading-10 text-white text-pretty opacity-0 font-space-grotesk pl-2  md:w-96">
        &#40;
        <span>{t("secondParagraph")}</span>
        &#41;
      </p>
      <div className="circle-about-me opacity-0 -z-40 relative lg:absolute lg:right-8 md:top-[50%] lg:top-1/2 lg:-translate-y-1/2">
        <AtractionEffect labelLanguage={t("aboutMe")} />
      </div>
        </>
      )}
     </Translation>
    </div>
  );
};

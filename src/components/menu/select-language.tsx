import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OverlayForLanguage } from "./Overlay-for-language";

export interface Option {
  name: string;
  value: string;
  icon?: React.ReactNode;
}

interface SelectLanguageProps {
  options: Option[];
  isLanguageOpen: boolean;
  setIsLanguageOpen: (isLanguageOpen: boolean) => void;
}

export const SelectLanguage = ({
  options,
  isLanguageOpen,
  setIsLanguageOpen

}: SelectLanguageProps) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  // const handleSearchParams = (lang: string) => {
  //   setSearchParams({ lan: lang });
  // };

  
  useGSAP(
    (context) => {
      if (!containerRef.current) return;

      // Obtenemos un selector de GSAP ligado al contenedor:
      const q = gsap.utils.selector(containerRef);

      // Seleccionamos todos los <li> con la clase .option-item:
      const optionItems = q(".option-item"); // esto es un arreglo de nodos

      // Estado inicial de cada <li>:
      context.add(() => {
        gsap.set(optionItems, {
          y: -20,
          opacity: 0,
        });
        gsap.set(containerRef.current, {
          height: 0,
          opacity: 0,
        });
      });

      if (isLanguageOpen) {
        const tlOpen = gsap.timeline();
        tlOpen.to(containerRef.current, {
          duration: 0.6,
          // Suponiendo 48px de alto por item + 32px de padding, ajústalo a tu diseño:
          height: `${options.length * 88 + 32}px`,
          opacity: 1,
          ease: "back.out(1.2)",
        });
        tlOpen.to(
          optionItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.2)",
            stagger: 0.1,
          },
          "-=0.3"
        );
      } else {
        const tlClose = gsap.timeline();
        tlClose.to(optionItems, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.05,
        });
        tlClose.to(
          containerRef.current,
          {
            duration: 0.5,
            height: 0,
            opacity: 0,
            ease: "power2.in",
          },
          "-=0.2"
        );
      }
    },
    {
      dependencies: [isLanguageOpen, options.length],
    }
  );

  return (
    <OverlayForLanguage>
      <div
      ref={containerRef}
      className="
      relative
        w-[250px] overflow-hidden 
        rounded-lg bg-primary-blue
      "
      /* Nota: height y opacity los maneja GSAP, no los forcemos aquí */
    >
      <button
      onClick={() => setIsLanguageOpen(false)}
      className="absolute top-4 right-4 p-2
      hover:bg-primary-purple
      hover:text-white
      text-primary-blue rounded-md font-sigmar cursor-pointer bg-white
      transition-colors"
      >
        X
      </button>
      <ul className="flex flex-col items-end h-full justify-end gap-2 py-4 px-2">
        {options.map((option, idx) => (
          <li
            key={idx}
            // onClick={() => handleSearchParams(option.value)}
            className="
              option-item 
              w-full bg-white rounded-lg 
              px-4 py-2 flex items-center gap-2 
              font-sigmar text-lg 2xl:text-2xl 
              text-primary-purple cursor-pointer
              hover:bg-primary-purple/90
              hover:text-white
              transition-colors
            "
          >
            {option.icon && <div>{option.icon}</div>}
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
    </OverlayForLanguage>
  );
};

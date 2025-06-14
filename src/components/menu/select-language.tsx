import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OverlayForLanguage } from "./Overlay-for-language";
import i18next from "i18next";
import { useLocation, useNavigate, useParams } from "react-router";
import { Translation } from "react-i18next";

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
  setIsLanguageOpen,
}: SelectLanguageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams(); // ← detectar idioma actual

  useGSAP(
    (context) => {
      if (!containerRef.current) return;

      const q = gsap.utils.selector(containerRef);

      const optionItems = q(".option-item");

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


  const handleChangeLanguage = (newLang: string) => {
    if (newLang === lang) return;

    const currentPath = location.pathname;
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);

    i18next.changeLanguage(newLang);
    navigate(newPath);
    setIsLanguageOpen(false);
  };

  return (
    <OverlayForLanguage>
      <div
        ref={containerRef}
        className="
      relative
        w-[250px] overflow-hidden 
        rounded-lg bg-primary-blue
      "
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
       <Translation ns={["language"]}>
         {(t) => (
           <ul className="flex flex-col items-end h-full justify-end gap-2 py-4 px-2">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="
              option-item 
              w-full bg-amber-200
              rounded-lg
            "
            >
              <button
                className="w-full h-full bg-white font-sigmar text-lg 2xl:text-2xl 
              text-primary-purple cursor-pointer
              hover:bg-primary-purple/90
              disabled:hover:bg-gray-300
              disabled:hover:text-primary-purple
              disabled:bg-gray-300
              hover:text-white
              transition-colors px-4 py-2 flex items-center gap-2 rounded-lg
              disabled:cursor-not-allowed
              "
                onClick={() => handleChangeLanguage(option.value)}
                disabled={i18next.resolvedLanguage === option.value}
              >
                {option.icon && <div>{option.icon}</div>}
                <span>
                  {t(`${option.value}` as any)}
                </span>
              </button>
            </li>
          ))}
        </ul>
         )}
       </Translation>
      </div>
    </OverlayForLanguage>
  );
};

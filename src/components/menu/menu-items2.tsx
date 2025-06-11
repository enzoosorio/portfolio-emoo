import { Link, useLocation } from "react-router";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Translation } from "react-i18next";

export interface MenuItem {
  i18nKey: string;
  cName: string;
  url: string;
  variableHeight?: number;
  scrollType: "Pages" | "Same Page";
}

interface MenuItemsProps {
  items: MenuItem[];
  isMenuOpen: boolean;
}
gsap.registerPlugin(useGSAP);

export const MenuItems2 = ({ isMenuOpen, items }: MenuItemsProps) => {
  const letterItemsRef = useRef<HTMLLIElement[]>([]);
  const location = useLocation();
  const addToLetterItemsRef = (el: HTMLLIElement| null) => {
    if (el && !letterItemsRef.current.includes(el)) {
      letterItemsRef.current.push(el);
    }
  };

useGSAP((context) => {
  if (letterItemsRef.current.length !== items.length) return;

  // 1. Al iniciar (y cada vez que items cambia), dejamos los <li> “ocultos” arriba:
  context.add(() => {
    gsap.set(letterItemsRef.current, {
      y: -50,
      opacity: 0,
    });
  });

  if (isMenuOpen) {
    const tlOpen = gsap.timeline();
    tlOpen.to(".nav-links", {
      duration: 0.8,
      height: "434px",
      opacity: 1,
      ease: "back.out(1.2)",
    });
    tlOpen.to(
      letterItemsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
      },
      "-=0.4"
    );
  } else {
    const tlClose = gsap.timeline();
    tlClose.to(letterItemsRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.1,
    });
    tlClose.to(
      ".nav-links",
      {
        duration: 0.6,
        height: "0px",
        opacity: 0,
        ease: "power2.in",
      },
      "-=0.3"
    );
  }
}, {
  dependencies: [isMenuOpen, items.length],
  revertOnUpdate: true,
});

const handleSamePageScroll = (id: string, variableHeight: number) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - variableHeight; // Ajusta según tu diseño
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  return (
    <Translation ns={["menu-items"]}>
      {(t) => (
        <ul
      className={`
    fixed inset-0  
    md:absolute nav-links
    bg-primary-blue rounded-sm p-4 pl-10 pb-10 md:top-0 md:bottom-auto md:left-auto md:right-[5%]
    w-full h-full
    md:w-72
    lg:h-0
    opacity-0
    -z-10
    flex flex-col items-start justify-end gap-6`}
    >
      {items.map((item, index) => {
        return (
          <div 
          key={index}
          className="relative w-full h-max overflow-hidden">
            <li
            ref={addToLetterItemsRef}
            className={`font-sigmar text-2xl hover:text-white transition-colors cursor-pointer ${location.pathname === item.url ? "text-white" : "text-primary-purple"}`}
          >
            {item.scrollType === "Pages" ? <Link to={item.url}>
              {t(`${item.i18nKey}` as any)}
            </Link> :
              item.variableHeight && item.scrollType === "Same Page" ? (
              <button
                onClick={() => handleSamePageScroll(item.url, item.variableHeight ?? 0)}
                className="text-left cursor-pointer"
              >
                {t(`${item.i18nKey}` as any)}
              </button>
              ) : (
                <Link to={item.url}>{t(`${item.i18nKey}` as any)}</Link>
              )
            }
          </li>
          </div>
        );
      })}
    </ul>
      )}
    </Translation>
  );
};

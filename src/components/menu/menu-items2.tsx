import { useLocation, useNavigate } from "react-router";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
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

export const MenuItems2 = ({ isMenuOpen, items }: MenuItemsProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("home");
  const letterItemsRef = useRef<HTMLLIElement[]>([]);
  const timeline = useRef<gsap.core.Timeline>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Reiniciar refs si cambian los items
  useEffect(() => {
    letterItemsRef.current = [];
  }, [items]);

  useEffect(() => {
      const loc = location.pathname.replace("/", "").split("/")[1];
      if(loc){
        setSelectedItem(loc)
      }
    
  }, [location])

  const addToLetterItemsRef = (el: HTMLLIElement | null) => {
    if (el && !letterItemsRef.current.includes(el)) {
      letterItemsRef.current.push(el);
    }
  };

  // Inicializar timeline solo una vez
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      
      
      .to(".nav-links", {
        y: 0,
        duration: 0.5,
        height: "434px",
        opacity: 1,
        ease: "sine",
      })
      // Aparición de los items
      .to(
        ".button-item",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
          stagger: 0.1,
        },
        "-=0.1"
      )
      
  }, []);

  // Controlar play / reverse según isMenuOpen
  useEffect(() => {
    if (!timeline.current) return;
    if (isMenuOpen) {
      timeline.current.play(0);
    } else {
      timeline.current.reverse();
    }
  }, [isMenuOpen]);

  // Detectar ruta actual
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = items.find((it) => it.url === currentPath);
    if (currentItem) setSelectedItem(currentItem.i18nKey);
  }, [items]);

  const handleSamePageScroll = (id: string, offset: number) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setSelectedItem("home");
  };

  const handleRedirect = (url: string, key: string) => {
    setSelectedItem(key);
    navigate(url);
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  return (
    <Translation ns={["menu-items"]}>
      {(t) => (
        <ul
          className="
            fixed inset-0 md:absolute nav-links
            bg-primary-blue rounded-sm p-4 pl-10 pb-10
            md:top-0 md:bottom-auto md:left-auto md:right-[5%]
            w-full h-0 md:w-72
            translate-y-[-200px]
            flex flex-col items-start justify-start pt-34 gap-6
            overflow-hidden
          "
        >
          {items.map((item, i) => (
            <li
              key={i}
              ref={addToLetterItemsRef}
              className={`font-sigmar text-2xl overflow-hidden hover:text-white transition-colors cursor-pointer ${
                selectedItem === item.i18nKey
                  ? "text-white"
                  : "text-white md:text-primary-purple"
              }`}
            >
              {item.scrollType === "Pages" ? (
                <button
                  onClick={() => handleRedirect(item.url, item.i18nKey)}
                  className="button-item w-full text-left translate-y-[-35px] cursor-pointer"
                >
                  {t(item.i18nKey as any)}
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleSamePageScroll(item.url, item.variableHeight ?? 0)
                  }
                  className="button-item w-full text-left translate-y-[-35px] cursor-pointer"
                >
                  {t(item.i18nKey as any)}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </Translation>
  );
};

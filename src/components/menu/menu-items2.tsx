import { Link, useLocation } from "react-router";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

interface MenuItem {
  title: string;
  cName: string;
  url: string;
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
      height: "354px",
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


  return (
    <ul
      className={`
    absolute nav-links
    bg-primary-blue rounded-sm p-4 pl-10 pb-10 top-0 right-[5%]
    md:w-72
    opacity-1
    z-0
    flex flex-col items-start justify-end gap-6 `}
    >
      {items.map((item, index) => {
        return (
          <div 
          key={index}
          className="relative w-full h-max overflow-hidden">
            <li
            ref={addToLetterItemsRef}
            className={`font-sigmar text-2xl ${location.pathname === item.url ? "text-white" : "text-primary-purple"}`}
          >
            <Link to={item.url}>{item.title}</Link>
          </li>
          </div>
        );
      })}
    </ul>
  );
};

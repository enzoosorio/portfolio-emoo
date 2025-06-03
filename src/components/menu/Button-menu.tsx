import { useEffect, useRef } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

interface ButtonMenuProps {
  isMenuOpen: boolean;
  handleClick: () => void;
}

export const ButtonMenu = ({ isMenuOpen, handleClick }: ButtonMenuProps) => {
  const startPath = useRef<SVGPathElement | null>(null);
  const endPath = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!startPath.current || !endPath.current) return;

    gsap.to(startPath.current, {
      duration: 0.5,
      morphSVG: isMenuOpen ? endPath.current : startPath.current,
      stroke: "#3AB7D0",
    });
  }, [isMenuOpen]);

  return (
    <button
      className={`relative z-20 flex items-center justify-center cursor-pointer rounded-2xl transition-all transform ${
        isMenuOpen ? "rotate-90" : "rotate-0"
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-12 h-12 cursor-pointer md:w-12 md:h-12 2xl:w-16 2xl:h-16 rounded-lg 2xl:rounded-2xl flex items-center justify-center stroke-primary-blue border-2 2xl:border-[3px] bg-white border-primary-blue`}
      >
        {/* base hamburger shape (will morph) */}
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            ref={startPath}
            d="M23.8625 30H56.1375 M23.8625 50.0596H56.1375"
            strokeWidth="4"
          />
        </svg>

        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        >
          <path
            ref={endPath}
            d="M28.5891 51.8559L51.4109 29.034 M28.8892 28.8892L51.7111 51.7111"
            strokeWidth="4"
          />
        </svg>
      </div>
    </button>
  );
};

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

interface ButtonMenuProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  isButtonBlue?: boolean;
  setIsButtonBlue?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonMenu = ({
  setIsMenuOpen,
  isMenuOpen,
  isButtonBlue,
  setIsButtonBlue,
}: ButtonMenuProps) => {
  // refs to the two path shapes
  const startPath = useRef<SVGPathElement | null>(null);
  const endPath = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!startPath.current || !endPath.current) return;

    // animate between shapes
    gsap.to(startPath.current, {
      duration: 0.5,
      morphSVG: isMenuOpen ? endPath.current : startPath.current,
      stroke: "#3AB7D0",
    });
  }, [isMenuOpen]);

  return (
    <button
      className={` flex items-center justify-center cursor-pointer rounded-2xl transition-all transform ${
        isMenuOpen ? "rotate-90 z-10" : "rotate-0 z-0"
      }`}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        setIsButtonBlue?.(!isButtonBlue);
      }}
    >
      <div className={`w-16 h-16 rounded-2xl bg-amber-800 flex items-center justify- stroke-primary-blue border-[3px] ${isMenuOpen ? "bg-white" : "bg-transparent"} border-primary-blue`}>
        {/* base hamburger shape (will morph) */}
        <svg
          width="80"
          height="80"
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

        {/* hidden "X" shape for the morph target */}
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

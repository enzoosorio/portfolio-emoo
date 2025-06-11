import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { Link } from "react-router";

interface AtractionEffectProps{
  labelLanguage : string
}

export const AtractionEffect= ({ labelLanguage } : AtractionEffectProps) => {
  gsap.registerPlugin(MorphSVGPlugin);

  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const child = childRef.current;
    if (!container || !child) return;
  const arrow = child.querySelector<SVGSVGElement>('.arrow');

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      // Calculate relative coordinates from center
      let x = offsetX - rect.width / 2;
      let y = offsetY - rect.height / 2;

      // Clamp movement so child does not overflow
      const childRect = child.getBoundingClientRect();
      const childWidth = childRect.width;
      const childHeight = childRect.height;

      const limitX = (rect.width - childWidth) / 2;
      const limitY = (rect.height - childHeight) / 2;

      x = Math.max(-limitX, Math.min(x, limitX));
      y = Math.max(-limitY, Math.min(y, limitY));

      let timelineMouseMove = gsap.timeline();

      timelineMouseMove.to(child, {
        x,
        y,
        duration: 0.5,
        ease: "sine",
      });
      timelineMouseMove.to(
        ".double-circle",
        {
          width: childWidth,
          height: childHeight,
          backgroundColor: "white",
          duration: 0.5,
          ease: "sine",
        },
        0
      );
      if (arrow) {
        timelineMouseMove.to(arrow, { opacity: 1, duration: 0.3, ease: 'sine.out' }, 0);
      }
    };

    const handleMouseLeave = () => {
      let timelineMouseLeave = gsap.timeline();

      timelineMouseLeave.to(child, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "bounce.out",
      });
      timelineMouseLeave.to(
        ".double-circle",
        {
          width: 1,
          height: 1,
          backgroundColor: "transparent",
          duration: 1,
          ease: "bounce.out",
        },
        0
      );
      if (arrow) {
        timelineMouseLeave.to(arrow, { opacity: 0, duration: 0.5, ease: 'bounce.out' }, 0);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    // container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      // container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 border border-white/25 rounded-2xl p-4 overflow-hidden"
    >
      <Link
        to={"/about"}
        ref={childRef}
        className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] text-base md:text-2xl text-white font-ibm-plex-mono rounded-full bg-white/25 flex items-center justify-center"
      >
        {labelLanguage}
        <div className="double-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-1 h-1 cursor-pointer rounded-full" />
        {/* arrow end */}
        <svg
          width="83"
          height="84"
          viewBox="0 0 83 84"
          className="arrow absolute inset-0 m-auto opacity-0 pointer-events-none"
        >
          <path
            id="arrow-next-end"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.3674 40.5L38.7661 3.06297L40.8828 0.937012L82.126 42L40.8828 83.063L38.7661 80.937L76.3674 43.5H0V40.5H76.3674Z"
          />
        </svg>
      </Link>
    </div>
  );
};

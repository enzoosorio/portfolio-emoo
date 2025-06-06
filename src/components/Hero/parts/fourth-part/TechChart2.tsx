import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import  { useEffect, useRef, useState } from "react";
import type { Skill } from "./fourth-part";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TechChartProps {
  technologies: Record<string, Skill[]>;
  activeButton: number;
}
export const TechChart2 = ({technologies, activeButton }: TechChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const barsContainerRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  const categoryKeys = Object.keys(technologies);
  if(categoryKeys.length === 0) return null;
  const selectedCategory = categoryKeys[activeButton] ?? categoryKeys[0]
  if(!selectedCategory) return null;
  const currentSkills = technologies[selectedCategory];

  barsRef.current = [];

  useGSAP(
  () => {
    if (!chartRef.current) return;

    ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === chartRef.current) {
      trigger.kill();
    }
  });

    const categoryKeys = Object.keys(technologies);
    if (categoryKeys.length === 0) {
      return null;
    }
    const selectedCategory : string =
      categoryKeys[activeButton] || categoryKeys[0] || "";

    const currentSkills = technologies[selectedCategory];

    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: chartRef.current,      // usar la ref en lugar de la clase
      start: "top top",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
      markers: true,
      invalidateOnRefresh: true,
    }
  });

    tl.to(".vertical-bar", {
      height: () => chartRef.current!.clientHeight * 0.9,
      ease: "power1.out",
      stagger: 0.3,
    });
    tl.to(".horizontal-bar", {
      width: () => chartRef.current!.clientWidth * 0.9,
      ease: "power1.out",
      stagger: 0.3,
    });

    currentSkills?.forEach((technology: Skill, index: number) => {
      const bar = barsRef.current[index];
      if (technology.value <= 1 || !bar) return;

      tl.to(
        bar,
        {
          height: technology.value * 40,
          ease: "back",
          duration: 0.5,
          stagger: 0.2,
        },
        "-=0.25"
      );
    });
  },
  { dependencies: [activeButton, technologies] }
);

  useEffect(() => {
    const container = barsContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      e.stopPropagation();
      setIsDragging(true);
      barsContainerRef.current?.classList.add("cursor-grabbing");
      setStartX(e.pageX - container.offsetLeft);
      setInitialScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.stopPropagation();
      barsContainerRef.current?.classList.add("cursor-grabbing");
      e.preventDefault(); // evita selección de texto al arrastrar

      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1; // factor de velocidad: 1 = scroll 1px por 1px de desplazamiento
      container.scrollLeft = initialScrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      // e.stopPropagation();
      barsContainerRef.current?.classList.add("cursor-grab");
    };

    const handleResize = () => {
      const container = barsContainerRef?.current;
      if (!container) return;
      const scrollWidth = container?.scrollWidth;
      const visibleWidth = container?.clientWidth;
      if (visibleWidth >= scrollWidth) {
        container.classList.remove("cursor-grabbing");
        container.classList.add("cursor-default");
      }
    };

    // Registrar eventos nativos en el contenedor
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseUp);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseUp);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, initialScrollLeft]);

  return (
    // container de la grafica
    <>
      <div
        ref={chartRef}
        className="chart-container mt-4 relative w-full bg-gray-100  h-[480px] overflow-hidden  rounded-lg px-12"
      >
        <div
          ref={barsContainerRef}
          className="ml-16  cursor-grab w-full flex items-center justify-start overflow-x-auto gap-6 h-full"
        >
          {currentSkills?.map((technology: Skill, index: number) => 
          {
          return(
            <>
              <div
                className="flex flex-col items-center justify-end h-full gap-4 pb-2 min-w-28 "
                key={technology.label}
              >
                <div
                  ref={(el) => {
                    barsRef.current[index] = el;
                  }}
                  className="bar w-24 h-16"
                  style={{
                    backgroundColor:
                      technology.skillType === "Frontend"
                        ? "#FF6384"
                        : technology.skillType === "Backend"
                        ? "#36A2EB"
                        : "#4BC0C0",
                  }}
                />
                <p className="selector label-bar text-center font-space-grotesk text-xl">
                  {technology.label}
                </p>
              </div>
              {index === currentSkills.length - 1 && (
                <div className="gap-4 pb-2 min-w-2"></div>
              )}
            </>
          )
          }
          )}
        </div>
        <div className="vertical-bar absolute top-0 left-24 w-[3px] h-0 bg-black rounded-2xl" />
        <div className="horizontal-bar absolute bottom-12 left-24 right-0 w-0 h-1 bg-black rounded-2xl" />
        <div className="absolute left-2 top-2  gap-36  font-space-grotesk text-xl z-50 flex flex-col items-start justify-center h-max w-max ">
          <p className="text-left text-sm">Avanzado</p>
          <p className="text-left text-sm">Intermedio</p>
          <p className="text-left text-sm">Principiante</p>
        </div>
      </div>
      {/* <div className='vertical-bar absolute top-[54%] -translate-y-1/2 left-24 w-[3px] h-0 bg-black rounded-2xl'/> */}
      {/* <div className='horizontal-bar absolute top-[calc(55%+200px)] -translate-y-1/2 left-24 right-0 w-0 h-1 bg-black rounded-2xl'/> */}
    </>
  );
};

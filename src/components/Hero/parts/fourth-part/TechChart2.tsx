import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import  { useEffect, useRef, useState } from "react";
import { Translation } from "react-i18next";
import type { ChartInterface, Skill } from "../../../../lib/technologies";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TechChartProps {
  technologies: ChartInterface;
  activeButton: string;
}
export const TechChart2 = ({technologies, activeButton }: TechChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const barsContainerRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger>(null);
  const tlRef = useRef<gsap.core.Timeline>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0); 


  const currentSkills: Skill[] =
  activeButton === "tecnologias"
    ? Object.values(technologies.tecnologias).flat()
    : activeButton === "habilidades"
    ? Object.values(technologies.habilidades).flat()
    : technologies["Habilidades blandas"];


   useGSAP(() => {
    if (!chartRef.current) return;

    // inicializo ScrollTrigger
    triggerRef.current = ScrollTrigger.create({
      trigger: chartRef.current,
      start: "top bottom",
      end: "bottom+=200 top",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    });

    tlRef.current = gsap.timeline({ scrollTrigger: triggerRef.current })
      .to(".vertical-bar", { height: 0 })
      .to(".horizontal-bar", { width: 0 });

    return () => {
      triggerRef.current?.kill();
      tlRef.current?.kill();
    };
  }, []);

  useGSAP(
  () => {

    const tl = tlRef.current;
    const trig = triggerRef.current;
    if (!tl || !trig) return;

    const progreso = trig.progress;
    tl.clear();
    
    tl.to(".horizontal-bar", {
      width: () => chartRef.current!.clientWidth * 0.93,
      ease: "power1.out",
    });

    currentSkills?.forEach((technology: Skill, index: number) => {
      const bar = barsRef.current[index];
      if (technology.value <= 1 || !bar) return;

      tl.to(
        bar,
        {
          height: technology.value * 40,
          ease: "back",
          duration: 0.35,
        },
        "-=0.05"
      );
    });

     tl.progress(progreso);
     trig.refresh();
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
    <>
      {/* <div 
      className="absolute bottom-[23.5%] z-20 left-1/2 -translate-x-1/2 w-11/12 h-[10px] bg-gray-100 opacity-0 rounded-br-lg rounded-bl-lg"/> */}
      <div
        ref={chartRef}
        className="relative chart-container mt-4 w-full bg-gray-100 min-h-[500px] overflow-hidden  rounded-lg px-12"
      >
        <div
          ref={barsContainerRef}
          className="ml-16 cursor-grab w-full flex items-center justify-start overflow-x-auto gap-14 h-full"
        >
          <Translation ns={["chart"]}>
            {(t) => (
             <>
              {currentSkills?.map((technology: Skill, index: number) => (
            <React.Fragment key={technology.i18nRef}>
              <div
                className="relative pb-[72px] lg:pb-14 flex flex-col items-center justify-end h-full gap-4 min-w-[100px] lg:min-w-36 w-max "
                key={technology.i18nRef}
              >
                <div
                  ref={(el) => {
                    barsRef.current[index] = el;
                  }}
                  className="bar w-16 lg:w-24 h-16"
                  style={{
                    backgroundColor:
                      technology.skillType === "Frontend"
                        ? "#F40F3F"
                        : technology.skillType === "Backend"
                        ? "#36A2EB"
                        : technology.skillType === "Fullstack" 
                        ? "#4BC0C0" :
                        // technology.skillType === "Design Tool"
                        // ? "#FFE640" :
                        technology.skillType === "Experiencia"
                        ? "#FF40EC" :
                        technology.skillType === "Soft Skills"
                        ? "#F7611C" :
                        "#4BC0C0",
                  }}
                />
                <p className="selector absolute left-1/2  min-h-20 lg:min-h-[60px] -translate-x-1/2 bottom-0 label-bar w-full text-center font-space-grotesk text-base flex items-center justify-center">
                  {t(`${technology.i18nRef}` as any)}
                </p>
              </div>
              {index === currentSkills.length - 1 && (
                <div className="gap-4 pb-2 min-w-2"></div>
              )}
            </React.Fragment>
          )
          
          )}
             </>
            )}
          </Translation>
        </div>
        <Translation ns={["heroFourthPart"]}>
          {(t) => (
            <>
              <div className="vertical-bar absolute top-0 left-24 w-[3px] h-[85.5%] bg-black rounded-2xl" />
              <div className="horizontal-bar absolute bottom-[72px]  left-24 right-0 w-0 h-1 bg-black rounded-2xl" />
              <div className="absolute left-2 top-2  gap-36  font-space-grotesk text-xl z-50 flex flex-col items-start justify-center h-max w-max ">
                <p className="text-left text-sm">{t("avanzado")}</p>
                <p className="text-left text-sm">{t("intermedio")}</p>
                <p className="text-left text-sm">{t("principiante")}</p>
              </div>
            </>
          )}
          </Translation>
      </div>
    </>
  );
};

import { projects_realized } from "../../../../lib/projects-realized";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { DescripcionPart } from "./descripcion-part";
import { ImagesPart } from "./images-part";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ThirdPart = () => {
  const [projectIsFixed, setProjectIsFixed] = useState<number>(-1);
  const divImagesParents = useRef<(HTMLDivElement | null)[]>([]);
  const divImagesInner = useRef<(HTMLDivElement | null)[]>([]);
  const divImagesChildren = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    if (projectIsFixed === index) {
      setProjectIsFixed(-1);
      return;
    }
    setProjectIsFixed(index);
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".third-section",
      pin: ".third-pinned-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-section",
        start: "top top",
        end: "center 30%",
        scrub: 1,
      },
    });

    tl.from(".title-third-part", {
      x: 200,
      opacity: 0,
      ease: "power1.out",
    });

    tl.to(
      ".text-project",
      {
        translateX: 0,
        opacity: 1,
        stagger: 0.3,
      },
      0.3
    );
    tl.to(
      ".description-part",
      {
        translateX: 0,
        opacity: 1,
        stagger: 0.1,
      },
      0.5
    );
    tl.to(
      ".images-part",
      {
        translateX: 0,
        opacity: 1,
        stagger: 0.1,
      },
      1
    );

    divImagesParents.current.forEach((parentEl, index) => {
      const innerEl = divImagesInner.current[index];
      const childEl = divImagesChildren.current[index];
      if (!parentEl || !innerEl || !childEl) return;

      const totalContentW = childEl.scrollWidth;
      const viewportW = innerEl.offsetWidth;
      const scrollLength = totalContentW - viewportW;

      gsap.to(childEl, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          scroller: parentEl,
          trigger: innerEl,
          start: "top top",
          end: () => "+=" + scrollLength,
          scrub: true,
          pin: innerEl,

          invalidateOnRefresh: true,
        },
      });
    });
  }, []);

  return (
    <section className="custom-cursor third-section mt-10 relative  main-card-container h-[300vh] overflow-hidden flex items-start justify-center">
      <div className="relative third-pinned-container h-screen w-full px-8 py-8 flex flex-col lg:flex-row-reverse items-center justify-end gap-4 2xl:gap-8">
        <div className="relative w-full lg:w-[700px] 2xl:w-[940px] h-auto py-2 lg:py-0 lg:h-full mt-12 px-4  flex flex-col items-start justify-center gap-4 2xl:gap-8">
          <p className="title-third-part text-xs sm:text-base lg:text-lg 2xl:text-2xl font-ibm-plex-mono ">
            He realizado los siguientes proyectos:
          </p>
          <ul className="w-full grid grid-cols-3 lg:flex gap-2  lg:flex-nowrap lg:flex-col items-start justify-start shadow-xl p-3">
            {projects_realized.map((project) => (
              <li
                key={project.project_id}
                className="text-project opacity-0 my-2 translate-x-[1000px]"
              >
                <h3
                  onClick={() => handleClick(project.project_id)}
                  className={`text-base lg:text-2xl text-stagger font-space-grotesk uppercase text-primary-blue hover:text-primary-purple ${
                    projectIsFixed === project.project_id
                      ? "text-purple-500 font-bold"
                      : "text-primary-blue"
                  } transition-all duration-300 `}
                >
                  {project.project_name}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="block md:hidden text-primary-purple font-space-grotesk">
          Scroll vertical
        </p> */}
        <div className="flex flex-col items-center w-full xl:w-[80%] h-full xl:h-[90%] justify-center gap-6">
          <ImagesPart
            divImagesChildren={divImagesChildren}
            divImagesInner={divImagesInner}
            divImagesParents={divImagesParents}
            projectIsFixed={projectIsFixed}
            projects_realized={projects_realized}
          />
          <DescripcionPart
            projectIsFixed={projectIsFixed}
            projects_realized={projects_realized}
          />
        </div>
      </div>
    </section>
  );
};

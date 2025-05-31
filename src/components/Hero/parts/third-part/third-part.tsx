import { projects_realized } from "../../../../lib/projects-realized";
import { CardThirdPart } from "../../../reusable/Card-third-part";
import gsap from "gsap";
import { ScrollTrigger, } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP)


export const ThirdPart = () => {

  const [isHovered, setIsHovered] = useState(-1);

  const handleMouseEnter = (index : number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  }

  useGSAP(() => { 
    ScrollTrigger.create({
      trigger : ".third-section",
      pin: ".third-pinned-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: true, 
    })

    let tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".third-section",
          start: "top top",
          end: "center 30%",
          scrub: 1,
          markers: true,
        },
      }
    )

    tl.from(".title-third-part", {
      x: 200,
      opacity: 0,
      ease: "power1.out",
    })

    tl.to(".text-project" , {
      translateX: 0,
      opacity: 1,
      stagger : 0.3
    },0.7)


  }, [])


  return (
    <section className="custom-cursor third-section mt-10 relative  main-card-container h-[300vh] overflow-y-hidden flex items-start justify-center">
        <div className="relative third-pinned-container h-screen w-full   px-4 py-8 flex flex-col items-end justify-center gap-8">
        <div className="relative w-[940px] mt-20 px-4 py-8 flex flex-col items-start justify-center gap-8">
        <p className="title-third-part text-4xl font-ibm-plex-mono ">He realizado los siguientes proyectos:</p>
        <ul className="w-full flex flex-col items-start justify-start">
          {projects_realized.map((project, index) => (
            <li key={index} className="text-project opacity-0 my-4 translate-x-[1000px]">
              <h3 
              onMouseEnter={ () => handleMouseEnter(index) }
              onMouseLeave={handleMouseLeave}
              className={`text-5xl text-stagger font-space-grotesk uppercase text-primary-blue transition-all duration-300 ${isHovered === index ? "text-primary-purple" : "text-gray-800"}`}>
              {project.project_name}
              </h3>
            </li>
          ))}
          
        </ul>
        </div>
          {projects_realized.map((project, index) => (
            <CardThirdPart
              index={index}
              isHovered={isHovered}
              key={index}
              project_description={project.project_description}
              project_image={project.project_image}
              project_link={project.project_link}
              project_github={project.project_github}
            />
          ))} 
     
          </div>
    </section>
  )
}
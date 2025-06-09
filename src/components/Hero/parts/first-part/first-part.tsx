import { GatoYin } from '../../../svg/GatoYin'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MorphSVGPlugin, CustomEase } from 'gsap/all'
import { MainCard } from './main-card'
import { useState } from 'react';
export const FirstPart = () => {

  const [progressScroll, setProgressScroll] = useState<number>(0);
    
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MorphSVGPlugin);

 useGSAP(() => {

    // Pinnea el contenedor durante 75vh de scroll (25% de 300vh)
    ScrollTrigger.create({
      trigger: ".main-card-container",
      start: "top top",
      end: "+75%",
      scrub: true,
      pin: ".pinned-container",
      pinSpacing: true,
      onUpdate : (self) => {
        const progress = self.progress;
        setProgressScroll(progress);
      }
    });

    const handballTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom 500px",
      scrub: true,
     
    }
  });

  // Movimiento 1: abajo a la izquierda (0% a 50%)
  handballTl.to(".handball", {
    x: -100,
    y: 100,
    rotate: 180,
    ease: "none", // importante para scrub suave
  });

  // Movimiento 2: hacia la derecha (50% a 100%)
  handballTl.to(".handball", {
    x: 400,
    y: 100,  // mantenemos el eje Y
    rotate: 360,
    ease: "none"
  });

  gsap.fromTo(".shadow-card", {
    boxShadow: "1px -1px 26px 6px rgba(58, 183, 208, 0.65)",
  }, 
     {
    scale: 1.5,
    ease: "power3.out",
    boxShadow: "1px -1px 26px 6px rgba(58, 183, 208, 0)",
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom 100px",
      scrub: true,
      
    }
  })

  gsap.to(".avioncito", {
    rotate: 20,
    y: -300,
    x: 300,
    ease: "back.in",
    duration : 1,
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  })

  gsap.to(".portfolio-letters-container", {
      y: 350,
      ease: "back.in",
      zIndex: -10,
      duration : 1,
      scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
    })

  gsap.to(".cat", {
    y: -20,
    x: -10,
    ease: "power2",
    duration : 1,
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,

    }
  })

  gsap.to(".cardd", {
    backgroundColor: "transparent",
    // opacity: 0,
    ease: CustomEase.create("custom", "M0,0 C0,0 0.154,-0.002 0.199,0.011 0.238,0.024 0.352,-0.003 0.389,0.014 0.425,0.032 0.487,0.02 0.55,0.02 0.591,0.02 0.698,-0.005 0.728,0.023 0.76,0.055 0.844,0.019 0.872,0.056 0.899,0.093 0.928,0.138 0.952,0.179 0.977,0.225 0.965,0.679 0.982,0.752 1,0.808 1,1 1,1 "),
    duration : 1,
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      

    }
  })

  gsap.to(".laptop", {
    scale: 0.8,
    // opacity: 0,
    x: 400,
    ease: "power4.out",
    duration : 1,
    scrollTrigger: {
      trigger: ".main-card-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      

    }
  })

  gsap.to("#efecto-spotify-start", {
    scale: 0.8,
    // opacity: 0,
   
    ease: "",
    duration : 1,
    repeat: -1,
    yoyo: true,
    morphSVG: "#efecto-spotify-end",
  
  })

  gsap.to(".spotify-circle", {
    rotate: 15,
    // ease: "power4.in",
    duration : 1,
    repeat: -1,
    yoyo: true,
  })
 

  }, []);

  return (
    <section className='main-card-container h-[300vh] '>
     <div className=" pinned-container h-[730px] relative  lg:h-[90vh]  w-full">
      <MainCard progressScroll={progressScroll}/>
        <img
          src="/images/Avioncito-papel-removebg-preview-1.png"
          alt="Avioncito"
          className="avioncito w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 absolute top-28 lg:top-1/12 -left-6 lg:left-12 -z-10"
        />
        <GatoYin 
        className="cat absolute hidden md:block top-32 right-10 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 -z-20" />
        <img
          src="/images/laptop-sticker.png"
          alt="mi-laptop"
          className="laptop hidden w-32 h-32 md:w-40 md:h-40 absolute top-32 right-0 lg:right-10 xl:right-20 -z-10"
        />
        <img
          src="/images/Handball.png"
          alt="handball"
          className="handball w-52 h-52 md:w-64 md:h-64 absolute bottom-6 md:bottom-6 lg:-bottom-6 -right-6 lg:right-4 -z-10"
        />
        
      </div>
      </section>
  )
}

import React, { useState } from 'react'
import type { Option } from '../../menu/select-language'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP)
const abilities : Option[] = [
        {
            name : "Desarrollador",
            value : "developer",
            // icon : <i className="fa-solid fa-code"></i>
        },
        {
            name : "Diseñador",
            value : "designer",
            // icon : <i className="fa-solid fa-palette"></i>
        },
        {
            name : "Compañero de equipo",
            value : "team",
            // icon : <i className="fa-solid fa-users"></i>
        }
    ]

export const FourthPart = () => {

    const [valueAbility, setValueAbility] = useState<string>("Desarrollador");

    useGSAP(() => { 
    ScrollTrigger.create({
      trigger : ".fourth-section",
      pin: ".fourth-pinned-container",
      start: "top 5%",
      end: "bottom bottom",
      scrub: 1,
    //   markers: true, 
    })

    let tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 20%",
          end: "center 30%",
          scrub: 1,
          markers: true,
        },
      }
    )

    tl.from(".header-fourth-part", {
      x: 200,
      opacity: 0,
      ease: "power1.out",
      stagger : 0.3
    })


  }, [])


    const handleLiClick = (valueAbility : string) => {
        setValueAbility(valueAbility);
    }

  return (
    <section className="custom-cursor fourth-section mt-10 relative main-card-container h-[300vh] overflow-y-hidden flex items-start justify-center">
        <div className="relative fourth-pinned-container h-screen w-[90%] px-4 py-8 flex flex-col items-end justify-center gap-4 2xl:gap-8">
           <h3 className='text-2xl 2xl:text-3xl w-full text-center font-space-grotesk font-semibold text-primary-purple header-fourth-part'>Mis habilidades</h3>
           <div className='w-max h-max p-1 bg-amber-800  rounded-lg flex items-center justify-center header-fourth-part'>
            <button className='px-4 py-2 rounded-md bg-primary-blue text-white font-bold text-lg 2xl:text-2xl'>
            {valueAbility}
            </button> 
           <ul className='
           absolute top-full right-0
           w-max p-4 rounded-lg bg-primary-blue flex flex-col items-center justify-center gap-4'>
           {abilities.map((ability, idx) => (
                <li 
                onClick={() => handleLiClick(ability.value)}
                className='w-full font-space-grotesk text-lg 2xl:text-2xl text-primary-purple cursor-pointer'
                key={idx}>
                    {ability.name}
                </li>
            ))}
           </ul>
           </div>
           <div className='w-full h-[500px] bg-amber-400 rounded-lg flex items-center justify-center'>

           </div>
        </div>
    </section>
  )
}

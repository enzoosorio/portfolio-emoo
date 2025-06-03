
import { AtractionEffect } from '../../../reusable/atraction-effect'

export const SecondCard = () => {
  return (
     <div className="relative second-pinned-containerr flex flex-col items-center lg:items-start justify-center lg:justify-center gap-12 p-6  w-[90%] mx-auto z-40 lg:h-[860px] rounded-lg">
             <div className="fake-container absolute top-0 left-1/2 h-full w-[80%] -z-10 bg-primary-blue  rounded-lg" />
             <p className="sp-text text-base md:text-lg lg:text-2xl 2xl:text-3xl leading-14 font-space-grotesk opacity-0 text-pretty  lg:w-8/12 pl-2 text-white">
               ¡Hola! Actualmente estoy enfocado en el desarrollo web. Me apasiona
               crear experiencias digitales dinámicas que no solo destaquen
               visualmente, sino que también impulsen ideas con propósito. Mi meta es
               ayudar a emprendedores y negocios en crecimiento a transformar sus
               ideas en experiencias digitales claras, atractivas y funcionale
               <p className="inline-block relative">
                 s.
                 <div className="circle-scale lg:w-1 lg:h-1 bg-white absolute right-[1px] bottom-[19px] z-10 rounded-full"/>
                 </p>
             
             </p>
             <p className="sp-text text-base lg:text-2xl leading-10 text-white text-pretty opacity-0 font-space-grotesk pl-2  md:w-96">
               &#40;Soluciones digitales con un toque de innovación y arte.&#41;
             </p>
             <div className="circle-about-me opacity-0 -z-40 relative lg:absolute lg:right-8 md:top-[50%] lg:top-1/2 lg:-translate-y-1/2">
               <AtractionEffect />
             </div>
           </div>
  )
}

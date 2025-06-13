import React, { useCallback, useMemo, useRef, useState } from 'react'
import { CardImage } from '../reusable/Card-Image';
import { photos } from '../../lib/photos';
import { Translation } from 'react-i18next';

export const CarouselImages = () => {

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Función para manejar el inicio del arrastre
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollWrapperRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollWrapperRef.current.offsetLeft);
    setScrollLeft(scrollWrapperRef.current.scrollLeft);
    setVelocity(0);
    setLastX(e.pageX);
    setLastTime(performance.now());
    
    // Cancelar cualquier animación en curso
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  // Función para manejar el arrastre
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollWrapperRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador para mayor sensibilidad
    scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
    
    // Calcular velocidad para el efecto de inercia
    const now = performance.now();
    const timeDelta = now - lastTime;
    if (timeDelta > 0) {
      const currentVelocity = (e.pageX - lastX) / timeDelta;
      setVelocity(currentVelocity);
      setLastX(e.pageX);
      setLastTime(now);
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  // Función para finalizar el arrastre
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    applyInertia();
  }, [velocity]);

  // Función para cuando el mouse sale del elemento
  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Efecto de inercia después de soltar
  const applyInertia = useCallback(() => {
    if (!scrollWrapperRef.current || Math.abs(velocity) < 0.001) return;
    
    const friction = 0.95; // Factor de fricción (ajustable)
    const newVelocity = velocity * friction;
    setVelocity(newVelocity);
    
    scrollWrapperRef.current.scrollLeft -= newVelocity * 8;
    
    if (Math.abs(newVelocity) > 0.001) {
      animationRef.current = requestAnimationFrame(applyInertia);
    }
  }, [velocity]);

  const randomTransforms = useMemo<
    { translateY: number; rotate: number }[]
  >(() => {
    return photos.map(() => {
      const rnd = Math.random() * 2 - 1;
      return {
        translateY: rnd * 50,
        rotate: rnd * 2,
      };
    });
  }, []);

  return (
   <Translation ns={["aboutMe"]}>
    {(t) => (
        <div 
        ref={scrollContainerRef}
        className="images-container absolute 
        top-[55%]  translate-y-[100px] 
         flex justify-start 
        left-[2%] pr-10 w-full h-[600px]  overflow-x-auto overflow-y-hidden ">
          <div 
          ref={scrollWrapperRef}
          className={`container-images  drag-container 
          flex items-center md:overflow-x-hidden overflow-y-hidden px-4 py-4 gap-1 
          justify-start h-full w-full`}
           onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          >
            {photos.map((photo, index) => {
              const { translateY, rotate } = randomTransforms[index] ?? { translateY: 0, rotate: 0 };
              const translateX = index * 120;
              return (
                <>
                  {index === 2 ? (
                    <CardImage
                      key={index}
                      id={`card-image-${index}`}
                      classNameImg="h-1/2 object-cover"
                      className="selector image-main-scroll w-[304px] flex-shrink-0 opacity-0 "
                      imageSrc={photo.src}
                      alt={t(`aboutMe:images.${photo.i18nkey}` as any)}
                      titleCard={t(`aboutMe:images.${photo.i18nkey}` as any)}
                      style={{
                        transform: `
                          translateX(${translateX}px)
                          translateY(10px)
                          rotate(3deg)
                        `,
                      }}
                    />
                  ) : (
                    <CardImage
                      key={index}
                      id={`card-image-${index}`}
                      classNameImg="h-1/2 object-cover"
                      className="selector images-scroll w-[304px] flex-shrink-0"
                      imageSrc={photo.src}
                      alt={t(`aboutMe:images.${photo.i18nkey}` as any)}
                      titleCard={t(`aboutMe:images.${photo.i18nkey}` as any)}
                      
                      style={{
                        transform: `
                        translateX(${translateX}px)
                        translateY(${translateY}px)
                        rotate(${rotate}deg)
                      `,
                      }}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
          
        
    )}
   </Translation>
  )
}

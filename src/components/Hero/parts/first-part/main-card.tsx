import React from 'react'
import { FacebookSvg } from '../../../svg/FacebookSvg'
import { GithubSvg } from '../../../svg/GithubSvg'
import { LinkedinSvg } from '../../../svg/LinkedinSvg'
import { letterAnimations } from '../../../../lib/letterAnimations'

export const MainCard = () => {

  const baseWord = 'portfolio';

  return (
   <>
    <div className="shadow-card absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-lg p-4 px-12 xl:w-[1120px] xl:h-[500px] mx-auto shadow-custom-primary"/>
    <div
              className="cardd absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 px-12 xl:w-[1120px] xl:h-[500px] mx-auto flex flex-col items-start justify-center gap-6 "
            >
              <div className="flex flex-col items-start justify-center gap-2">
                <span className="text-gray-900 font-space-grotesk">
                  Hi, my name is Enzo, and I am a
                </span>
                <h1 className="text-5xl leading-14 font-ibm-plex-mono">
                  FRONTEND DEVELOPER PASSIONATE, TRYING TO SOLVE DAILY PROBLEMS. :&#41;
                </h1>
              </div>
              <div className="flex items-center justify-between w-full px-2">
                <div className="relative w-max h-max ">
                  <img src="/images/enzo-2.jpeg" alt="me" className="absolute top-0 left-0 w-20 h-20 -z-10 rounded-full object-cover blur-xs" />
                  <img src="/images/enzo-2.jpeg" alt="me" className="w-20 h-20 rounded-full object-contain" />
                </div>
                <div className="flex items-center justify-center gap-4 p-2 px-2">
                  <FacebookSvg />
                  <GithubSvg />
                  <LinkedinSvg />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-4 pb-6">
                <p className="text-gray-900 font-space-grotesk texttt">This is my</p>
                 {/* svg portfolio words effect */}
                 <div className='flex items-center justify-center gap-1 '>
                    {
                      baseWord.split('').map((letter, _) => {
                        const svgLetterFrame = letterAnimations.find(part => part.letter === letter)?.frames[0];
                        return (
                            <div key={letter} className='flex items-center justify-center gap-1'>
                              {svgLetterFrame}
                            </div>
                        )
                      })
                    }
                
              </div>
              </div>
            </div>
   </>
  )
}

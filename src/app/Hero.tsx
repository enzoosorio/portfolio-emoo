import { FirstPart } from "../components/Hero/parts/first-part/first-part"
import { SecondPart } from "../components/Hero/parts/second-part/second-part"
import { ThirdPart } from "../components/Hero/parts/third-part/third-part"

function Hero() {



  return ( 
    <main className='h-auto relative w-full -mt-28 '>
     <FirstPart/>
     <div className="h-24 w-full bg-transparent"/>
     <SecondPart/>
     <ThirdPart/>
    </main>
  )
}

export default Hero

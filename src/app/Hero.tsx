import { FourthPart } from "../components/Hero/parts/fourth-part/fourth-part"
import { FirstPart } from "../components/Hero/parts/first-part/first-part"
import { SecondPart } from "../components/Hero/parts/second-part/second-part"
import { ThirdPart } from "../components/Hero/parts/third-part/third-part-prueba"
import { FifthPart } from "../components/Hero/parts/fifth-part/fifth-part"
import { Footer } from "../components/Footer/footer"

function Hero() {



  return ( 
    <main className='h-auto relative w-full -mt-28 overflow-hidden '>
     <FirstPart/>
     <div className="h-2 lg:h-40 w-full bg-transparent"/>
     <SecondPart/>
     {/* <ThirdPart/> */}
     <ThirdPart/>
     <FourthPart/>
     <FifthPart/>
     {/* <Footer/> */}
    </main>
  )
}

export default Hero

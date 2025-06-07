import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import { Footer } from "../../../Footer/footer";

export const FifthPart = () => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".fifth-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: ".fifth-pinned-container",
      // markers: true,
    });

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });

    timeline.from(
      ".contacto-cartel",
      {
        x: 1200,
        rotation: 270,
        duration: 4,
      },
      0
    );
    timeline.to(
      ".header-contacto",
      {
        opacity: 1,
        duration: 2,
      },
      0.5
    );
    timeline.to(
      ".fake-bg",
      {
        scaleX: 15,
        scaleY: 25,
        duration: 3.5,
      },
      "+=1"
    );
    timeline.from(
      ".form-contacto",
      {
        x: -1000,
        opacity: 0,
        duration: 3,
      },
      "+=1"
    );
    timeline.from(
      ".footer",
      {
        y: 1000,
        opacity: 1,
        duration: 5,
        // delay: 1.5,
      },
      "+=1"
    );
    timeline.to(
      ".header-contacto",
      {
        y: -40,
      },
      "+=2"
    );
    timeline.to(
      ".form-contacto",
      {
        y: -40,
      },
      "+=0.1"
    );
    
  }, []);

  return (
    <section className="custom-cursor fifth-section mt-10 relative main-card-container h-[400vh] overflow-y-hidden flex items-start justify-center">
      <div className="relative fifth-pinned-container h-screen w-full px-4 py-8 flex flex-col items-center justify-center gap-4 2xl:gap-8">
        <div className="contacto-cartel relative flex flex-col items-center justify-center p-4 rounded-lg bg-amber-800 shadow-lg">
          <div className="fake-bg absolute top-0 left-0 w-full h-full bg-primary-purple rounded-lg -z-10" />
          <h3 className="header-contacto text-2xl 2xl:text-3xl font-space-grotesk font-semibold uppercase text-white opacity-0">
            Contacto
          </h3>
        </div>
        <form className="form-contacto flex flex-col items-center justify-center w-full gap-12 p-2 rounded-sm ">
          <div className="flex items-center justify-center gap-4 rounded-lg">
            <label
              className="text-2xl min-w-28 text-white font-space-grotesk"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className=" w-full text-black font-space-grotesk text-lg 2xl:text-xl font-semibold bg-white text-left rounded-lg p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-4 rounded-lg">
            <label
              className="text-2xl min-w-28 text-white font-space-grotesk"
              htmlFor="subject"
            >
              Motivo:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className=" w-full text-black font-space-grotesk text-lg 2xl:text-xl font-semibold bg-white text-left rounded-lg p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-4 rounded-lg">
            <label
              className="text-2xl min-w-28 text-white font-space-grotesk"
              htmlFor="message"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className=" resize-none w-full text-black font-space-grotesk text-lg 2xl:text-xl font-semibold bg-white text-left rounded-lg p-2"
            />
          </div>
          <div className="relative w-max h-max ">
            <div className="absolute inset-0 w-full h-full top-1 left-1 bg-black rounded-lg -z-10" />
            <button
              type="button"
              onClick={() => setButtonPressed(!buttonPressed)}
              className={` cursor-pointer flex items-center justify-center gap-2 text-xl font-space-grotesk text-blakc bg-white rounded-lg px-4 py-2 ${
                buttonPressed ? "translate-1" : " "
              } `}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M29.9 12.9037L0.128906 0.0463867L6.21376 14.6569C6.55771 15.5018 6.55771 16.4477 6.21376 17.2925L0.128906 31.8802L29.9229 19.275C30.5397 19.0092 31.065 18.5685 31.4342 18.0075C31.8033 17.4464 32 16.7896 32 16.118C32 15.4464 31.8033 14.7895 31.4342 14.2285C31.065 13.6674 30.5397 13.2268 29.9229 12.961L29.9 12.9037ZM28.9833 17.1207L4.41466 27.5715L8.32226 18.1749C8.46724 17.8362 8.57483 17.4827 8.64312 17.1207H20.6066V14.8288H8.64312C8.57483 14.4668 8.46724 14.1133 8.32226 13.7746L4.41466 4.4009L28.9947 15.0007C29.1997 15.0902 29.374 15.2376 29.4962 15.425C29.6184 15.6123 29.6831 15.8313 29.6823 16.0549C29.6844 16.2818 29.619 16.5042 29.4946 16.6939C29.3702 16.8837 29.1922 17.0322 28.9833 17.1207Z"
                  fill="black"
                  className=""
                />
              </svg>
              Enviar
            </button>
          </div>
        </form>
        <Footer/>
      </div>
    </section>
  );
};

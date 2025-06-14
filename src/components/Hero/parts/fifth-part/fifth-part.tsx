import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { Footer } from "../../../Footer/footer";
import emailjs from '@emailjs/browser';
import { Translation } from "react-i18next";

type FormStates = "default" | "sending" | "success" | "error";

export const FifthPart = () => {
  const [formState, setFormState] = useState<FormStates>("default");
  const form = useRef<HTMLFormElement>(null);
  const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAIL_PUBLIC_KEY;


  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    if(form.current){
      emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          setFormState("success");
        },
        () => {
          setFormState("error");
        },
      )
      
    }
    
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".fifth-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: ".fifth-pinned-container",
    });

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
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
      "#footer-contacto",
      {
        y: 1000,
        opacity: 1,
        duration: 2,
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
      <Translation ns={["heroFifthPart"]}>
        {
          (t) => (
            <div className="relative fifth-pinned-container h-screen w-full px-4 py-8 flex flex-col items-center justify-center gap-4 2xl:gap-8">
        <div className="contacto-cartel relative flex flex-col items-center justify-center p-4 rounded-lg bg-amber-800 shadow-lg">
          <div className="fake-bg absolute top-0 left-0 w-full h-full bg-primary-purple rounded-lg -z-10" />
          <h3 className="header-contacto text-2xl 2xl:text-3xl font-space-grotesk font-semibold uppercase text-white opacity-0">
            {t("contact")}
          </h3>
        </div>
        <form 
        id="contact"
        ref={form} onSubmit={sendEmail}
        className="form-contacto flex flex-col items-center justify-center w-full gap-12 p-2 rounded-sm ">
          <div className="flex items-center justify-center gap-4 rounded-lg">
            <label
              className="text-2xl min-w-28 text-white font-space-grotesk"
              htmlFor="username"
            >
              {t("name")}:
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className=" w-full text-black font-space-grotesk text-lg 2xl:text-xl font-semibold bg-white text-left rounded-lg p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-4 rounded-lg">
            <label
              className="text-2xl min-w-28 text-white font-space-grotesk"
              htmlFor="email"
            >
              {t("correo")}:
            </label>
            <input
              type="email"
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
              {t("motivo")}:
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
              {t("mensaje")}:
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
              disabled={formState === "sending" || formState === "success" || formState === "error"}
              type={formState === "sending" || formState === "success" || formState === "error" ? "button" : "submit"}
              className={` 
                 flex items-center justify-center gap-2 text-xl font-space-grotesk text-blakc  rounded-lg px-4 py-2 ${
                formState === "sending" ? "translate-1 bg-white/80" : 
                formState === "success" ? "translate-1 bg-white" : 
                formState === "error" ? "translate-1 bg-white" : "translate-0 bg-white cursor-pointer"
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
              {formState === "sending" && <span className="text-sm font-space-grotesk font-bold text-black">{t("enviar_loading")}</span>}
              {formState === "success" && <span className="text-sm font-space-grotesk font-bold text-black">{t("enviado")}</span>}
              {formState === "error" && <span className="text-sm font-space-grotesk font-bold text-black">{t("enviado_error")}</span>}
              {formState === "default" && <span className="text-sm font-space-grotesk text-black">{t("enviar")}</span>}
            </button>
          </div>
        </form>
        <Footer id="footer-contacto"/>
      </div>
          )
        }
      </Translation>
    </section>
  );
};

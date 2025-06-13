import { Translation } from 'react-i18next'

export const TextContainer = () => {
  return (
    <div className="text-container z-40 absolute top-0 overflow-hidden left-5 md:left-[10%]  h-full -mt-12 w-[90%] md:w-[850px]  ">
          <Translation ns={["aboutMe"]}>
            {(t) => (
              <div className="text-wrapper translate-y-[1200px] flex flex-col items-center justify-center gap-16 px-40 py-4">
            <p className="text-about-me absolute opacity-0  top-0 left-0 font-space-grotesk text-2xl md:text-3xl w-full text-left text-pretty font-semibold">
              {t("p1")}
            </p>
            <p className="text-about-me absolute opacity-0  top-0 left-0 font-space-grotesk text-2xl md:text-3xl w-full text-left text-pretty font-semibold">
              {t("p2")}
            </p>
            <p className="text-about-me absolute  opacity-0 top-0 left-0 font-space-grotesk text-2xl md:text-3xl w-full text-left text-pretty font-semibold">
              {t("p3")}
            </p>
          </div>
            )}
          </Translation>
        </div>
  )
}

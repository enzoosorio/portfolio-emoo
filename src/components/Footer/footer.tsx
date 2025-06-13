import { Translation } from "react-i18next";

interface FooterProps {
  id: string;
}
export const Footer = ({ id }: FooterProps) => {
  return (
    <Translation ns={["footer"]}>
      {(t) => (
        <div
          id={id}
          className={`clippy-footer fixed bottom-0 left-0 right-0 w-full flex items-center px-6 lg:px-0 bg-white z-20 justify-center gap-1 lg:gap-40 2xl:gap-[500px] py-16 `}
        >
          <div className="flex flex-col items-start justify-center gap-4 w-[400px] mt-10 ">
            <p className="font-sigmar text-xl lg:text-4xl">EMOO</p>
            <p className="font-space-grotesk text-base lg:text-lg w-[20ch]">
              {t("paragraph")}
            </p>
            <p className="font-space-grotesk text-base xl:text-lg">2025.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 w-max  lg:pr-40 ">
            <div className="relative flex items-center justify-center gap-8">
              <div className="absolute -top-16  -left-10 lg:left-20 flex flex-row-reverse lg:flex-row items-center justify-center gap-0 lg:gap-4 font-space-grotesk text-lg w-[100px] lg:w-[220px]">
                <img
                  src="/images/arrow-footer.png"
                  alt="arrow"
                  className="w-8 h-8 lg:w-16 lg:h-16  rotate-y-180 lg:rotate-10 lg:rotate-y-0"
                />
                <p className="w-max text-sm lg:text-base font-semibold ">
                  {t("lado_personal")}
                </p>
              </div>
              {/* facebook */}
              <a
                href="https://www.facebook.com/enzo.osorioortiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  className="w-8 h-8 lg:w-12 lg:h-12"
                >
                  <path
                    d="M48 24C48 10.7453 37.2547 0 24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24H48Z"
                    fill="#0866FF"
                  />
                  <path
                    d="M33.1475 31.4496L34.4944 24.1152H26.655V21.5213C26.655 17.6458 28.1757 16.1549 32.1107 16.1549C33.3328 16.1549 34.3168 16.1846 34.8832 16.2442V9.59616C33.8099 9.2976 31.1862 9 29.6656 9C21.6458 9 17.9488 12.7862 17.9488 20.9549V24.1152H13V31.4496H17.9488V47.4086C19.8054 47.8694 21.7475 48.1152 23.7462 48.1152C24.7302 48.1152 25.7008 48.0547 26.6541 47.9395V31.4496H33.1466H33.1475Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* figma */}

              <a
                href="https://www.figma.com/@enzo50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <g clip-path="url(#clip0_17_203)">
                    <path
                      d="M16.0001 48C20.4162 48 24.0002 44.4159 24.0002 39.9999V31.9999H16.0001C11.5841 31.9999 8 35.5839 8 39.9999C8 44.4159 11.5841 48 16.0001 48Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M8 24C8 19.584 11.5841 15.9999 16.0001 15.9999H24.0002V31.9998H16.0001C11.5841 32 8 28.416 8 24Z"
                      fill="#A259FF"
                    />
                    <path
                      d="M8 8.00006C8 3.58406 11.5841 0 16.0001 0H24.0002V15.9999H16.0001C11.5841 15.9999 8 12.4161 8 8.00006Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M23.9998 0H31.9999C36.4159 0 40 3.58406 40 8.00006C40 12.4161 36.4159 15.9999 31.9999 15.9999H23.9998V0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M40 24C40 28.416 36.4159 32 31.9999 32C27.5838 32 23.9998 28.416 23.9998 24C23.9998 19.584 27.5838 15.9999 31.9999 15.9999C36.4159 15.9999 40 19.584 40 24Z"
                      fill="#1ABCFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_203">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="relative flex items-center justify-center gap-8">
              <div className="absolute top-28 lg:top-4 -left-12 lg:-left-52 flex items-center justify-center gap-4 font-space-grotesk text-lg w-[120px] lg:w-[220px] ">
                <p className="lg:w-full text-sm lg:text-base font-semibold text-left w-[8ch] ">
                  {t("lado_profesional")}
                  <span className="lg:hidden"> {t("y_musica")}</span>
                </p>
                <img
                  src="/images/arrow-3.png"
                  alt="arrow"
                  className="w-8 lg:w-24  lg:translate-y-6 lg:-translate-x-4 rotate-[-45deg]  lg:rotate-10 lg:rotate-y-0"
                />
              </div>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/enzo-osorio-ortiz-9b12782a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 lg:w-12 lg:h-12"
                >
                  <path
                    d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                    fill="#0A66C2"
                  />
                </svg>
              </a>
              {/* github */}
              <a
                href="https://github.com/enzoosorio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 lg:w-12 lg:h-12"
                >
                  <g clipPath="url(#clip0_165_3311)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                      fill="#24292F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_165_3311">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="relative flex items-center justify-center gap-8">
              <div className="hidden lg:flex absolute top-10 left-0 items-center justify-center gap-4 font-space-grotesk text-lg w-[320px]">
                <img
                  src="/images/arrow-4.png"
                  alt="arrow"
                  className="w-[50%]  -rotate-12"
                />
                <p className="w-full font-semibold text-left">
                  {t("lado_musica")}
                </p>
              </div>
              {/* spotify */}
              <a
                href="https://open.spotify.com/playlist/1E6rqkCDapBrw1UrJ62uQ9?si=3122c3a225074180"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 lg:w-12 lg:h-12"
                >
                  <path
                    d="M23.9266 0C10.7126 0 0 10.7123 0 23.9263C0 37.1409 10.7126 47.8523 23.9266 47.8523C37.142 47.8523 47.8534 37.1409 47.8534 23.9263C47.8534 10.7131 37.142 0.00114285 23.9263 0.00114285L23.9266 0ZM34.8991 34.5086C34.4706 35.2114 33.5506 35.4343 32.8477 35.0029C27.23 31.5714 20.158 30.7943 11.8294 32.6971C11.0269 32.88 10.2269 32.3771 10.044 31.5743C9.86029 30.7714 10.3611 29.9714 11.1657 29.7886C20.28 27.7054 28.098 28.6029 34.4049 32.4571C35.1077 32.8886 35.3306 33.8057 34.8991 34.5086ZM37.8277 27.9929C37.2877 28.8714 36.1391 29.1486 35.262 28.6086C28.8306 24.6546 19.0269 23.5097 11.4197 25.8189C10.4331 26.1169 9.39114 25.5609 9.09171 24.576C8.79457 23.5894 9.35086 22.5494 10.3357 22.2494C19.0251 19.6129 29.8277 20.89 37.2134 25.4286C38.0906 25.9686 38.3677 27.1169 37.8277 27.9929ZM38.0791 21.2089C30.3677 16.6286 17.6449 16.2074 10.2823 18.442C9.1 18.8006 7.84971 18.1331 7.49143 16.9509C7.13314 15.768 7.8 14.5186 8.98314 14.1591C17.4349 11.5934 31.4849 12.0891 40.3631 17.3597C41.4289 17.9909 41.7774 19.3643 41.146 20.4263C40.5174 21.4897 39.1403 21.8403 38.0803 21.2089H38.0791Z"
                    fill="#1ED760"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </Translation>
  );
};

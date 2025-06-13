

interface CardImageProps{
    imageSrc : string;
    alt : string;
    titleCard : string;
    className? : string;
    classNameImg? : string;
    id?: string;
    style? : React.CSSProperties;
}
export const CardImage = ({ imageSrc, alt, titleCard, className, id, classNameImg, style } : CardImageProps) => {
  return (
    <figure 
    id={id}
    style={style}
    className={`flex  flex-col items-center justify-center gap-4
      linear-gradient
    rounded-sm pt-4 px-6 pb-6 shadow-[5px 7px 4px #888888]  shadow-[-6px_6px_7px_1px_rgba(0,_0,_0,_0.25)] ${className}`}>
      {/* <div className="relative w-[90%] h-[50%]"> */}
      {/* </div> */}
        <img src={imageSrc} alt={alt} className={` h-[300px] ${classNameImg}`} />
        <p className='text-center text-lg text-orange-500 font-semibold'>{titleCard}</p>
    </figure>
  )
}

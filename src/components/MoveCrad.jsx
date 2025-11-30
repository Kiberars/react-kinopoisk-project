import { FavoriteButton } from "./FavoriteButton";

export function MoveCard({titleMove, descriptionMove,imageMove, ratingMove, urlMove}){
    return <div className="relative w-[300px] rounded-2xl overflow-hidden
        bg-neutral-800 shadow-lg hover:scale-105 transition-transform
        will-change-transform duration-300">
            <div className="absolute top-0 left-0 w-full
            bg-gradient-to-t from-black/00 to-black/100 p-2 text-sm
            text-white font-semibold ">{titleMove}</div>    
            <div className="absolute right-0 p-2  text-sm
            text-white font-semibold text-right"> Рейтинг: {ratingMove}</div>
            <div className="absolute top-8 right-2 z-10"> 
                <FavoriteButton/>
            </div>
           
            <a href={urlMove} target="_blank">
            <img src={imageMove} alt={titleMove} className="w-[300px]  h-[400px] object-cover"/>
            </a>
            <div className="h-[120px] p-2 text-white text-justify">{descriptionMove}</div>
            
        </div>
   
}
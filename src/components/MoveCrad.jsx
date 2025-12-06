import { FavoriteButton } from "./FavoriteButton";

export function MoveCard({...movies}){
    
    const titleMove = movies.title;
    const descriptionMove = movies.description;
    const imageMove = movies.img;
    const ratingMove = movies.rating;
    const urlMove = movies.url;

    return <div className="relative w-[300px] rounded-2xl overflow-hidden
        bg-neutral-400 dark:bg-neutral-800 shadow-lg hover:scale-105 transition-transform
        will-change-transform duration-300">
            <div className="absolute top-0 left-0 w-full
            bg-gradient-to-t from-neutral-400/00 to-white/100 
            dark:bg-gradient-to-t dark:from-black/00 dark:to-black/100 
            p-2 text-sm text-black dark:text-white font-semibold ">{titleMove}</div>    
            <div className="absolute right-0 p-2  text-sm
            text-black dark:text-white font-semibold text-right"> Рейтинг: {ratingMove}</div>
            <div className="absolute top-8 right-2 z-10"> 
                <FavoriteButton/>
            </div>
           
            <a href={urlMove} target="_blank">
            <img src={imageMove} alt={titleMove} className="w-[300px]  h-[400px] object-cover"/>
            </a>
            <div className="h-[120px] p-2 text-black dark:text-white text-justify">{descriptionMove}</div>
        </div>
   
}
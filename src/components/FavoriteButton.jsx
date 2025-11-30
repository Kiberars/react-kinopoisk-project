import { useState } from "react"

export function FavoriteButton(){
    const [isFavorit, setIsFavorit] = useState(false)

    return <div onClick={()=>setIsFavorit(!isFavorit)} className="cursor-pointer w-[30px]">
        <img src={isFavorit ? "/MoveImage/FavoriteOn.png":"/MoveImage/FavoriteFalse.png"}/>
    </div>
}
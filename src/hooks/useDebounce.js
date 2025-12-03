import { useEffect, useState } from "react";

export function useDebounce(value, deley = 300){
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=> {
            setDebouncedValue(value)
        },deley)

        return () =>{
            clearTimeout(handler)
        }
    },[value,deley])
    return debouncedValue
}
import { useState } from "react";


export const useCounter = () =>{
    const [contador,setContador]=useState<number>(0);

    const SetContador =( numero:number)=>{
        setContador(contador + numero);
    }
    
    return {
        contador,
        SetContador
    }
}
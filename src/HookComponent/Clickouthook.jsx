import React, { useEffect } from 'react'

const Clickouthook = (ref,callback) => {
 useEffect(()=>{
     function handleClickout(e){
    if(ref.current&& !ref.current.contains(e.target)){
       callback()
    }
 }
 document.addEventListener("click",handleClickout)
 document.addEventListener("touchstart", handleClickout);
 return ()=>{
    document.removeEventListener("click",handleClickout)
    document.removeEventListener("touchstart", handleClickout);
 }
 },[ref,callback])
}

export default Clickouthook

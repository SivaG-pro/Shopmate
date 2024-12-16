import { useEffect, useState } from "react"


export  function useFetch(url) {
    const [data,setdata]=useState(null);
    useEffect(() => 
        async() =>{
            const response= await fetch(url);
            const data =await response.json();
            setdata(data);
})

  return {data};
}

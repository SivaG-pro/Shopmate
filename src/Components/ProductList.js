import { useState ,useEffect, useCallback} from "react"
import { useFetch } from "../hooks/useFetch";

export  function ProductList() {
    //const [product,setproduct]=useState([])
    const [url,seturl]=useState("http://localhost:8000/products")
    const {data:product}=useFetch(url);
    console.log(product);
    // const filter=useCallback(async() =>{
    //     const response =await fetch(url);
    //     const data= await response.json();
    //     //setproduct(data);

    // },[url]);
    // useEffect(() =>{(filter())} ,[filter]);
    

  return (
    <div>
        <button onClick={() => (seturl("http://localhost:8000/products"))}>All</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() =>(seturl("http://localhost:8000/products?availability=true"))}>Available</button>
        <br />
        <br />
       {product && product.map((product) => (
        <>
        
        <div className="box">
            
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p><span className={`clear ${product.availability ? "instock":"unavailable"}`}>{product.availability ? "instock":"unavailable"}</span></p>
            </div>
            <br />
            </>
        ))
    }
    </div>
  )
}

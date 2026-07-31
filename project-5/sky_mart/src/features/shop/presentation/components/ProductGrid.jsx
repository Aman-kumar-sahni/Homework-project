import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios"
import { nanoid } from "nanoid";
import { axiosInstance } from "../../application/productApi";
import { AuthContext } from "../../../../app/providers/AppProviders";

const ProductGrid = () => {
const[loading,setLoading]=useState(true)
const {products,setProducts,setAllProducts}=useContext(AuthContext)
const getProducts=async ()=>{
  
  try {
 const res =  await axiosInstance.get("/products?limit=60")
  const updateProducts= res.data.products.map((elem)=>({
    ...elem,id:nanoid(),
    productid:elem.id,
            reviewCount: Math.floor(Math.random() * 900) + 100,
  })
)
  setProducts(updateProducts)
  setAllProducts(updateProducts)
  setLoading(false)

}catch(error){
  console.log(error.message)
}}
useEffect(()=>{
  getProducts()
},[])
if(loading)return <div className=" text-amber-50 h-full w-full rounded">Loading..</div>


  return (
    <section className="mt-10">
      
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-5
        "
      >
    
{products.map((elem)=>{
 return  <ProductCard key={elem.id} products={elem}/>
  
})}
      </div>
    </section>
  );
};

export default ProductGrid;
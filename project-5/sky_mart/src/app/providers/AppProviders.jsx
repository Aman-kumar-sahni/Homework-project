import { createContext, useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import{axiosInstance}from "../../features/shop/application/productApi"
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [registered, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || []
  );
    const [featured, setFeatured] = useState("Featured");


  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState("All Categories");

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

const[loading,setLoading]=useState(true)

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

}catch(error){
  console.log(error.message)
}finally{
  setLoading(false)
}

}
useEffect(()=>{
  getProducts()
},[])

  return (
    <AuthContext.Provider
      value={{
        registered,
        setRegisterUser,
        products,
        setProducts,
        allProducts,
        setAllProducts,
        category,
        setCategory,
        cartItems,
        setCartItems,
        featured,setFeatured,
        getProducts,loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
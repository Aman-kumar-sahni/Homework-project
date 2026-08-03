import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../app/providers/AppProviders";

    export const cartContext = createContext();

export const CartProvider = ({ children }) => {

  const { cartItems, setCartItems } = useContext(AuthContext);
  
//addproducts
  function addCartItem(products) {
    const item = [
      ...cartItems,
      {
        ...products,
        quantity: 1,
      },
    ];

    setCartItems(item);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(item)
    );

    toast.success("Item added in Cart");
  }

  //deleteCartItems
  function deleteCartItem(item) {
 const filterItem=   cartItems.filter((val)=>val.id!==item.id)
 setCartItems(filterItem)
 localStorage.setItem("cartItems",JSON.stringify(filterItem))
    toast.warn("item removed")
  }
  

 function increaseItem(products) {
  const updatedItems = cartItems.map((val) => {
    if (val.productid === products.productid) {
      return {
        ...val,
        quantity: val.quantity + 1,
      };
    }

    return val;
  });

  setCartItems(updatedItems);

  localStorage.setItem(
    "cartItems",
    JSON.stringify(updatedItems)
  );
}

function increaseQuantity(item){
   const updateQuantity= cartItems.map((val)=>{
    if(  val.productid===item.productid ) {return {...val,quantity:val.quantity+1}}
    return val
    })
    
    setCartItems(updateQuantity)
    localStorage.setItem("cartItems",JSON.stringify(updateQuantity))
}



function decreaseQuantity(item){
const updateQuantity= cartItems.map((val)=>{
if (val.productid===item.productid){return {...val,quantity:val.quantity-1}}
return val
})
setCartItems(updateQuantity)
localStorage.setItem("cartItems",JSON.stringify(updateQuantity))
}



 const totalPrice = cartItems.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

const totalQuantity= cartItems.reduce((acc,item)=>{
  return acc+item.quantity
},0)
  

  return (
    <cartContext.Provider
      value={{
        addCartItem,
        deleteCartItem,
        increaseItem,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalQuantity,cartItems,setCartItems

      }}
    >
      {children}

    </cartContext.Provider>
  )}
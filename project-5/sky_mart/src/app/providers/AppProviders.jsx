import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [registered, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || []
  );

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState("All Categories");

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
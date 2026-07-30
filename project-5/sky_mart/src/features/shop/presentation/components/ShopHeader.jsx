import { useContext } from "react";
import { AuthContext } from "../../../../app/providers/AppProviders";

const ShopHeader = () => {
  const {products,category,Category}=useContext(AuthContext)
  
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        All Products
      </h1>

        <div className="mb-5 px-1 text-sm">
        <span className="text-zinc-400">
          {products.length} products found
        </span>
{category !== "" &&
 category !== "All Categories" &&
 <span className="font-semibold text-[#EaFF00]">{` in ${category}`}</span>} 

        <span className="font-semibold text-[#EAFF00]">
          
        </span>
      </div>

    </div>
  );
};

export default ShopHeader;
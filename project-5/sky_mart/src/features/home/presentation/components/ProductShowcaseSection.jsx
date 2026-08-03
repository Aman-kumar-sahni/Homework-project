import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../../app/providers/AppProviders";
import { useNavigate } from "react-router";
import { cartContext } from "../../../cart/application/cartProvider";


import { toast } from "react-toastify";
function ProductList({ title, icon, products,setfeature }) {
  const {setCartItems,cartItems}=useContext(cartContext)


     const navigate = useNavigate()

  return (
    <div className="rounded-[28px] bg-[#f4f4ed] p-5 sm:p-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <h2 className="flex items-center gap-2 text-[15px] font-medium text-[#4c4c58] sm:text-base">
          <span>{icon}</span>
          {title}
        </h2>

        <button onClick={()=>{
          setfeature()
navigate('/shop')
        }}
          type="button"
          className="text-[10px] font-medium text-[#a7c000] transition cursor-pointer hover:opacity-70 sm:text-xs"
        >
          See all →
        </button>
      </div>


      {/* Product Rows */}
      <div className="mt-4 space-y-3">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex
              h-[53px]
              items-center
              justify-between
              rounded-xl
              border
              border-black/[0.08]
              px-3
              transition
              hover:bg-black/[0.025]
              sm:h-[58px]
              sm:px-4
            "
          >

            {/* Image + Price */}
            <div className="flex items-center gap-4">

              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-sm bg-black/5 sm:h-8 sm:w-8">
                <img
                  src={product.thumbnail}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="text-xs font-medium text-[#a7c000] sm:text-sm">
               ${product.price}
              </span>

            </div>


            {/* Cart Button */}
            <button
            onClick={() => {
  const existingItem = cartItems.find(
    (item) => item.productid === product.productid
  );

  let updatedCart;

  if (existingItem) {
    updatedCart = cartItems.map((item) =>
      item.productid === product.productid
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  setCartItems(updatedCart);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));

  toast.success(
    existingItem
      ? "Quantity updated"
      : "Item added to the Cart"
  );
}}
              type="button"
              aria-label="Add to cart"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-md
                text-[#a7c000]
                transition
                hover:bg-[#a7c000]/10
              "
            >
              <ShoppingBag
                size={13}
                strokeWidth={1.8}
              />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}


function ProductShowcaseSection() {
  const {allProducts,setFeatured}=useContext(AuthContext)
  const topRated = [...allProducts].sort((a,b)=>b.rating-a.rating).slice(0,5)
  const newArrivals = [...allProducts]
  .sort((a, b) => a.productid - b.productid)
  .slice(0, 5);
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      <ProductList
        title="Top Rated"
        icon="⭐"
        products={topRated}
        setfeature={()=>setFeatured("High Rated")}
      
      />

      <ProductList
        title="New Arrivals"
        icon="⚡"
        products={newArrivals}

        setfeature={()=>setFeatured("Featured")}
      />

    </section>
  );
}

export default ProductShowcaseSection;
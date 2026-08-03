import { ShoppingCart, Check } from "lucide-react";
import { useContext } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { AuthContext } from "../../../../../app/providers/AppProviders";
import { cartContext } from "../../../../cart/application/cartProvider";

const RelatedProduct = ({id}) => {
  


  const {products,loading,cartItems}=useContext(AuthContext)
const {increaseQuantity,addCartItem}=useContext(cartContext)

  
const itemMilGaya = products.find((val)=>val.productid===Number(id))
if (loading) {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>
  );
}

if (!itemMilGaya) {
  return (
    <div className="flex h-screen items-center justify-center text-red-500">
      Product Not Found
    </div>
  );
}0
const category= itemMilGaya.category
const filteredCategory = products.filter((val)=>val.category===category &&val.productid!== Number(id))

  return (
    <section className="mt-16">

      {/* Heading */}

      <h2 className="mb-8 text-3xl font-bold text-white">
        Related Products
      </h2>

      {/* Grid */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">

        {filteredCategory.map((product) => {
          
          const fullStars = Math.floor(product.rating);
          const hasHalf = product.rating % 1 >= 0.5;
          const empty = 5 - fullStars - (hasHalf ? 1 : 0);
 const isInCart=cartItems.some((val)=>val.productid===product.productid)

          return (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[22px] border border-zinc-700 bg-[#161616] transition-all duration-300 hover:border-[#EAFF00]"
            >

              {/* Image */}

              <div className="relative p-3">

                <span className="absolute left-5 top-5 rounded-full bg-zinc-700 px-3 py-1 text-[10px] font-medium text-white">
                  {product.category}
                </span>

                <div className="overflow-hidden rounded-2xl bg-[#FFF8EC]">

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>

              </div>

              {/* Content */}

              <div className="px-4 pb-4">

                <p className="mb-2 text-[11px] text-zinc-500">
                  {product.category}
                </p>

                <h3 className="min-h-[54px] text-[18px] font-semibold leading-6 text-white">
                  {product.title}
                </h3>

                {/* Rating */}

                <div className="mt-3 flex items-center gap-1">

                  {[...Array(fullStars)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[12px] text-[#EAFF00]"
                    />
                  ))}

                  {hasHalf && (
                    <FaStarHalfAlt className="text-[12px] text-[#EAFF00]" />
                  )}

                  {[...Array(empty)].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className="text-[12px] text-zinc-600"
                    />
                  ))}

                  <span className="ml-1 text-xs text-zinc-500">
                    ({product.reviewCount})
                  </span>

                </div>

                {/* Divider */}

                <div className="my-4 h-px bg-zinc-700" />

                {/* Bottom */}

                <div className="flex items-center justify-between">

                  <h2 className="text-[18px] font-bold text-[#EAFF00]">
                    ${product.price}
                  </h2>

                

                        {isInCart ? (

            <button
        onClick={() => {
      increaseQuantity(product)
  
}}
              type="button"
              className="
                flex h-10
                items-center justify-center
                gap-1.5
                rounded-full
                border border-emerald-500/20
                bg-emerald-500/10
                px-4
                text-sm font-medium
                text-emerald-400
                whitespace-nowrap
                transition-all
                hover:bg-emerald-500/15
                cursor-pointer
              "
            >
              <Check size={15} />
              Added
            </button>

          ) : (

            <button
              type="button"
            onClick={() => {
              
addCartItem(product)
}}
                
              className="
                flex h-10
                items-center gap-2
                rounded-full
                bg-[#EAFF00]
                px-4
                text-sm font-semibold
                text-black
                transition
                hover:bg-[#d7eb00]
                cursor-pointer
              "
            >
              <ShoppingCart size={15} />
              Add
            </button>

          )}

        </div>
                  

                

              </div>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProduct;
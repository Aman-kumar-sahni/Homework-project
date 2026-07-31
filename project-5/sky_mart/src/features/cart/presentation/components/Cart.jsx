import { ShoppingBag, X, Package, ArrowRight } from "lucide-react";
import CartCard from "./CartCard";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../../app/providers/AppProviders";

const Cart = ({setIsCartOpen}) => {
  const navigate =   useNavigate()
  
  const {cartItems,setCartItems}=useContext(AuthContext)
  const isEmpty = cartItems.length === 0;


  return (
    <aside
      className="
        fixed right-0 top-0 z-50
        flex h-dvh
        w-full
        flex-col
        border-l border-lime-300/40
        bg-[#121212]
        text-white
        shadow-2xl
        sm:w-[430px]
        lg:w-[440px]
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          flex shrink-0
          items-center justify-between
          border-b border-lime-300/40
          px-5 py-5
          sm:px-6
        "
      >
        <div className="flex items-center gap-3">
          <ShoppingBag
            size={21}
            className="text-[#EAFF00]"
          />

          <h2 className="text-lg font-bold sm:text-xl">
            Cart
          </h2>

          {!isEmpty && (
            <span
              className="
                rounded-full
                bg-lime-300/15
                px-2.5 py-1
                text-xs font-semibold
                text-[#EAFF00]
              "
            >
              {cartItems.length} items
            </span>
          )}
        </div>

        <button
          type="button"
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-full
            text-zinc-400
            transition
            hover:bg-white/5
            hover:text-white
          "
          onClick={()=>{
setIsCartOpen(false)
          }}
        >
          <X  size={18} />
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      {isEmpty ? (
        /* ================= EMPTY CART ================= */
        <div
          className="
            flex min-h-0
            flex-1
            flex-col
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <div
            className="
              mb-6
              flex h-20 w-20
              items-center justify-center
              rounded-2xl
              border border-zinc-600
              bg-white/5
            "
          >
            <Package
              size={42}
              strokeWidth={1.5}
              className="text-zinc-300"
            />
          </div>

          <h3 className="text-xl font-bold sm:text-2xl">
            Cart is empty
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Go shop something cool!
          </p>

          <button onClick={()=>{
              setIsCartOpen(false);

            navigate("/shop")
          }}
            type="button"
            className="
            cursor-pointer
              mt-7
              flex items-center justify-center
              gap-2
              rounded-xl
              bg-[#EAFF00]
              px-6 py-3
              text-sm font-semibold
              text-black
              transition
              hover:brightness-95
              active:scale-[0.98]
            "
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          {/* ================= CART ITEMS ================= */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              px-4 py-4
              sm:px-5
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-zinc-700
            "
          >
            <div className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* ================= FOOTER ================= */}
          <div
            className="
              shrink-0
              border-t border-lime-300/40
              bg-[#121212]
              px-5
              pb-5 pt-5
              sm:px-6
              sm:pb-6
            "
          >
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-300">
                Total
              </span>

              <span className="text-xl font-bold text-white sm:text-2xl">
                $384.92
              </span>
            </div>

            {/* Checkout */}
            <button
              type="button"
              className="
                mt-4
                flex h-12 w-full
                items-center justify-center
                gap-2
                rounded-xl
                bg-[#EAFF00]
                text-sm font-semibold
                text-black
                transition
                hover:brightness-95
                active:scale-[0.99]
                sm:h-13
              "
            >
              Checkout
              <ArrowRight size={18} />
            </button>

            {/* Clear cart */}
            <button
              type="button"
              className="
                mx-auto mt-3
                block
                text-xs
                text-zinc-500
                transition
                hover:text-zinc-300
              "
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
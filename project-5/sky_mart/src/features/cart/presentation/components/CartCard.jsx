import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { cartContext } from "../../application/cartProvider";

const CartCard = ({ item }) => {
const {deleteCartItem,increaseQuantity,decreaseQuantity}=  useContext(cartContext)

  return (
    <div
      className="
        rounded-2xl
        border border-zinc-500/80
        bg-[#181818]
        p-3
        transition
        hover:border-lime-300/60
        sm:p-4
      "
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Product Image */}
        <div
          className="
            h-[58px] w-[58px]
            shrink-0
            overflow-hidden
            rounded-xl
            bg-zinc-100
            sm:h-[64px] sm:w-[64px]
          "
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="
              h-full w-full
              object-cover
            "
          />
        </div>

        {/* Product Details */}
        <div className="min-w-0 flex-1">
          {/* Title */}
          <h3
            className="
              line-clamp-2
              text-sm font-semibold
              leading-5
              text-white
              sm:text-[15px]
            "
          >
            {item.title}
          </h3>

          {/* Price */}
          <p
            className="
              mt-1
              text-sm font-bold
              text-[#EAFF00]
              sm:text-base
            "
          >
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          {/* Each */}
          <p className="mt-0.5 text-[11px] text-zinc-500">
            ${item.price.toFixed(2)} each
          </p>

          {/* Quantity */}
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={()=>{
                if(item.quantity>1){
              decreaseQuantity(item)

                }else{
                  deleteCartItem(item)
                }
            }}
              type="button"
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-lg
                border border-zinc-700
                bg-[#1f1f1f]
                text-zinc-300
                
                hover:border-zinc-500
                hover:text-white
                cursor-pointer
transition-all duration-150 active:scale-90
              "
            >
              <Minus size={13} />
            </button>

            <span
              className="
                min-w-[18px]
                text-center
                text-sm font-medium
                text-white

              "
            >
              {item.quantity}
            </span>

            <button
            onClick={()=>{
              increaseQuantity(item)
            }}
              type="button"
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-lg
                border border-zinc-700
                bg-[#1f1f1f]
                text-zinc-300
                transition
                hover:border-zinc-500
                hover:text-white
                  cursor-pointer
                  transition-all duration-150 active:scale-90

              "
            >
              <Plus size={13} />
            </button>
          </div>
        </div>

        {/* Delete */}
        <div className="flex shrink-0 items-end pb-1">
          <button 
          onClick={()=>{
            deleteCartItem(item)
          }}
            type="button"
            className="
              flex h-7 w-7
              items-center justify-center
              rounded-lg
              text-red-500
              transition
              hover:bg-red-500/10
              hover:text-red-400
            "
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
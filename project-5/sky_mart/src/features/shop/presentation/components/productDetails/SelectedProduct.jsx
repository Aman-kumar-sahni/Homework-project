import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check
} from "lucide-react";
import { useContext, useState } from "react";
import ProductDetails from "./ProductDetails";
import { AuthContext } from "../../../../../app/providers/AppProviders";
import { useEffect } from "react"
import { cartContext } from "../../../../cart/application/cartProvider";
import { useNavigate } from "react-router";
const SelectedProduct = ({id}) => {

    const navigate = useNavigate();

  
  const[liked,setLiked]=useState(false)
  const {increaseQuantity,addCartItem}=useContext(cartContext)
  
    const {products,loading,cartItems}=useContext(AuthContext)
const itemMilGaya =products.find((val)=>val.productid===Number(id))

const cartMaiHai=cartItems.some((val)=>val.productid===Number(id))
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
}
const rating = itemMilGaya.rating;

const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;

const currentIndex = products.findIndex(
  (item) => item.productid === Number(id)
);
const previousProduct =
  currentIndex > 0
    ? products[currentIndex - 1]
    : null;

const nextProduct =
  currentIndex < products.length - 1
    ? products[currentIndex + 1]
    : null;


function handlePrevious() {
  if (previousProduct) {
    navigate(`/shop/${previousProduct.productid}`);
  }
}

function handleNext() {
  if (nextProduct) {
    navigate(`/shop/${nextProduct.productid}`);
  }
}
  return (
    <section className="w-full">

      {/* Breadcrumb */}

<div className="mb-8 flex items-center gap-2 text-sm">

 <div
    onClick={() => navigate("/shop")}
    className="group flex cursor-pointer items-center gap-2"
  >
    <ArrowLeft
      size={16}
      className="text-zinc-500 transition-colors group-hover:text-white"
    />

    <span className="text-zinc-500 transition-colors group-hover:text-white">
      Products
    </span>
  </div>
  <span className="text-zinc-700">/</span>

  <span className="text-zinc-500 ">{itemMilGaya.category}</span>

  <span className="text-zinc-700">/</span>

  <span className="font-medium text-zinc-400 font-bold">
  {itemMilGaya.title}
  </span>

</div>
      {/* Main */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex justify-center">

          <div className="w-full max-w-[620px] rounded-[30px] border border-[#3a3a3a] bg-[#1b1b1b] p-5 shadow-[0_0_45px_rgba(255,255,255,.05)]">

            <div className="overflow-hidden  rounded-3xl bg-[#FFF8EB]">

              <img
                src={itemMilGaya.thumbnail}
                
                alt="product"
                className="h-[320px] w-full object-contain p-8 sm:h-[420px] lg:h-[520px] transition-all hover:scale-105"
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col">

          {/* Category */}

          <span className="mb-5 w-fit rounded-full bg-[#E8FF58]/15 px-4 py-1 text-xs font-semibold text-[#E8FF58]">
            {itemMilGaya.category}
          </span>

          {/* Title */}

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {itemMilGaya.title}
          </h1>

          {/* Rating */}

          <div className="mt-5 flex flex-wrap items-center gap-3">

       <div className="flex items-center gap-1">
  {[...Array(5)].map((_, index) => {
    if (index < fullStars) {
      // Full Star
      return (
        <Star
          key={index}
          size={16}
          className="fill-[#E8FF58] text-[#E8FF58]"
        />
      );
    }

    if (index === fullStars && hasHalfStar) {
      // Half Star
      return (
        <div key={index} className="relative h-4 w-4">
          {/* Gray Star */}
          <Star
            size={16}
            className="absolute text-zinc-600"
          />

          {/* Half Yellow Star */}
          <div className="absolute overflow-hidden w-1/2">
            <Star
              size={16}
              className="fill-[#E8FF58] text-[#E8FF58]"
            />
          </div>
        </div>
      );
    }

    // Empty Star
    return (
      <Star
        key={index}
        size={16}
        className="text-zinc-600"
      />
    );
  })}
</div>

            <span className="font-semibold">
              {itemMilGaya.rating}
            </span>

            <span className="text-gray-400">
              ({itemMilGaya.reviewCount} reviews)
            </span>

          </div>

          {/* Divider */}

          <div className="my-6 h-px bg-[#3a3a3a]" />

          {/* Price */}

          <h2 className="text-4xl font-extrabold text-[#E8FF58]">
           $ {itemMilGaya.price}
          </h2>

          {/* Divider */}

          <div className="my-6 h-px bg-[#3a3a3a]" />

          {/* Description */}

          <p className="max-w-xl leading-8 text-gray-300">
          {itemMilGaya.description}
          </p>
                    {/* Add To Cart */}

          <div className="mt-8 flex items-center gap-4">

           {
  cartMaiHai? (

    <button
    onClick={()=>{
    increaseQuantity(itemMilGaya)
    }}
      className="
        flex h-14 flex-1 items-center justify-center gap-3
        rounded-2xl
        border border-emerald-500/30
        bg-emerald-500/10
        text-emerald-400
        font-semibold
        transition-all duration-300
        hover:bg-emerald-500/15
        hover:border-emerald-400
        cursor-pointer
      "
    >
      <Check
        size={20}
        className="rounded-full bg-emerald-500 p-1 text-black"
      />

      <span>Added to Cart</span>

      
    </button>

  ) : (

    <button onClick={()=>{
      addCartItem(itemMilGaya)
    }}
      className="
        flex h-14 flex-1 items-center justify-center gap-3
        rounded-2xl
        bg-[#E8FF58]
        text-black
        font-semibold
        transition-all duration-300
        cursor-pointer
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(232,255,88,.35)]
      "
    >
      <ShoppingCart size={20} />
      Add To Cart
    </button>

  )
}
            <button
  onClick={() => setLiked(!liked)}
  className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 
    ${
      liked
        ? "border-fuchsia-600 text-fuchsia-600 bg-fuchsia-300"
        : "border-zinc-700 text-white hover:border-fuchsia-600 hover:text-fuchsia-600  "
    }`}
>
 <Heart
  size={20}
  className={`transition-all duration-300 ${
    liked
      ? "fill-fuchsia-600 text-fuchsia-600 scale-110"
      : "text-white"
  }`}
/>
</button>

          </div>

          {/* Feature Cards */}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Delivery */}

            <div className="rounded-2xl border border-[#3a3a3a] bg-[#181818] p-5 text-center">

              <Truck
                size={22}
                className="mx-auto mb-3 text-[#E8FF58]"
              />

              <h3 className="font-semibold text-white">
                Free Delivery
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                On orders above $50
              </p>

            </div>

            {/* Payment */}

            <div className="rounded-2xl border border-[#3a3a3a] bg-[#181818] p-5 text-center">

              <ShieldCheck
                size={22}
                className="mx-auto mb-3 text-[#E8FF58]"
              />

              <h3 className="font-semibold text-white">
                Secure Pay
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                256-bit SSL
              </p>

            </div>

            {/* Return */}

            <div className="rounded-2xl border border-[#3a3a3a] bg-[#181818] p-5 text-center">

              <RotateCcw
                size={22}
                className="mx-auto mb-3 text-[#E8FF58]"
              />

              <h3 className="font-semibold text-white">
                Easy Returns
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                30-day policy
              </p>

            </div>

          </div>

          {/* Navigation */}

          <div className="mt-10 grid grid-cols-2 gap-4">

            <button 
            onClick={handlePrevious}
  disabled={!previousProduct}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl cursor-pointer
              border border-[#3a3a3a] bg-[#222]
              transition-all duration-300 hover:border-white"
            >
              <ArrowLeft size={18} />

              Previous
            </button>

            <button
            onClick={handleNext}
  disabled={!nextProduct}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl cursor-pointer
              bg-[#E8FF58] text-black font-semibold
              transition-all duration-300
              hover:scale-[1.02]"
            >
              Next

              <ArrowRight size={18} />
            </button>

          </div>
                  </div>
      </div>
    </section>
  );
};

export default SelectedProduct;
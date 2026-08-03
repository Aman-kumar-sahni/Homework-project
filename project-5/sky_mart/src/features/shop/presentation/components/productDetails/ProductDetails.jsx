// ProductDetails.jsx

import { useParams } from "react-router";
import RelatedProducts from "./RelatedProducts";
import SelectedProduct from "./SelectedProduct";
import { axiosInstance } from "../../../application/productApi";
import { useEffect } from "react";
const ProductDetails = () => {
  const {id}= useParams()
 
  return (
    <main className="min-h-screen mt-15 bg-[#111111] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SelectedProduct id={id}/>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <RelatedProducts id={id}/>
      </section>
    </main>
  );
};

export default ProductDetails;
// import Footer from "../../components/Footer";
// import ProductGrid from "./components/ProductGrid";
// import ProductToolbar from "./components/ProductToolbar";
// import ShopHeader from "./components/ShopHeader";


// const Shop = () => {
//   const [search, setSearch] = useState("")
//   return (
//     <div className="min-h-screen bg-[#0d0d0d] text-white">

//       <main className="mx-auto w-full max-width:[80rem];  px-4 py-12 sm:px-6 lg:px-8">

//         {/* Page Heading */}
//         <ShopHeader/>
// <ProductToolbar
//    search={search}
//    setSearch={setSearch}
// />       
// <ProductGrid
//    search={search}
// />                

//       </main>

//       {/* Common Footer */}

//     </div>
//   );
// };

// export default Shop; 

// import { Search, ChevronDown } from "lucide-react";

// const ProductToolbar = () => {
//   return (
//     <section className="mb-6 rounded-2xl border border-white/70 p-3">

//       <div className="flex flex-col gap-3 lg:flex-row">

//         {/* Search */}
//         <div className="relative flex-1">

//           <Search
//             size={16}
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
//           />

//           <input
//             type="text"
//             placeholder="Search products..."
//             className="
//               h-11
//               w-full
//               rounded-xl
//               border
//               border-white/10
//               bg-[#222222]
//               pl-11
//               pr-4
//               text-sm
//               text-white
//               outline-none
//               placeholder:text-white/40
//               focus:border-[#eaff00]
//             "
//           />

//         </div>

//         {/* Category Filter */}
//         <div className="relative">

//           <select
//             className="
//               h-11
//               w-full
//               min-w-[180px]
//               appearance-none
//               rounded-xl
//               border
//               border-white/10
//               bg-[#222222]
//               px-4
//               pr-10
//               text-sm
//               text-white
//               outline-none
//               focus:border-[#eaff00]
//             "
//           >
//             <option>All Categories</option>
//             <option>Beauty</option>
//             <option>Fragrances</option>
//             <option>Furniture</option>
//             <option>Groceries</option>
//             <option>Home-decoration</option>
//             <option>Kitchen-accessories</option>
//           </select>

//           <ChevronDown
//             size={16}
//             className="
//               pointer-events-none
//               absolute
//               right-4
//               top-1/2
//               -translate-y-1/2
//               text-white/50
//             "
//           />

//         </div>

//         {/* Sort Filter */}
//         <div className="relative">

//           <select
//             className="
//               h-11
//               w-full
//               min-w-[150px]
//               appearance-none
//               rounded-xl
//               border
//               border-white/10
//               bg-[#222222]
//               px-4
//               pr-10
//               text-sm
//               text-white
//               outline-none
//               focus:border-[#eaff00]
//             "
//           >
//             <option>Featured</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//             <option>Top Rated</option>
//           </select>

//           <ChevronDown
//             size={16}
//             className="
//               pointer-events-none
//               absolute
//               right-4
//               top-1/2
//               -translate-y-1/2
//               text-white/50
//             "
//           />

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductToolbar;   isko v pdho 
// import { useContext, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import axios from "axios";
// import { MyContext } from "../../../context/MyContext";



 

// const ProductGrid = () => {
//  const {product,setProduct} =useContext(MyContext)
//   const getProducts = async () => {
//   try {
//     const res = await axios.get(
//       "https://dummyjson.com/products?limit=60"
//     );

//     const updatedProducts = res.data.products.map((product) => ({
//       ...product,
//       reviewCount: Math.floor(Math.random() * 900) + 100, // 100 - 999
//     }));

//     setProduct(updatedProducts);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// useEffect(()=>{getProducts()},[])


//   return (
//     <section
//       className="
//         grid
//         grid-cols-1
//         gap-4
//         sm:grid-cols-2
//         lg:grid-cols-3
//         xl:grid-cols-5
//       "
//     >
//       {product.map((elem)=>{
//         return <ProductCard product={elem} key={elem.id} />
//       })}
//     </section>
//   );
// };

// export default ProductGrid;  isko v pdho   aur ab wapis 3no file modify kr k do code update do responsive nhi tutna chahiye
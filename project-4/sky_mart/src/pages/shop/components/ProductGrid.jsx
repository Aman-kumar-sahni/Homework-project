import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: "$99.99",
    rating: 4.5,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },

  {
    id: 2,
    title: "Smart Watch Series 5",
    category: "Electronics",
    price: "$299.99",
    rating: 4.5,
    reviews: 85,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },

  {
    id: 3,
    title: "Comfortable Cotton T-Shirt",
    category: "Clothing",
    price: "$24.99",
    rating: 4.5,
    reviews: 200,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },

  {
    id: 4,
    title: "Ergonomic Office Chair",
    category: "Furniture",
    price: "$199.99",
    rating: 5,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600",
  },

  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    category: "Home",
    price: "$34.99",
    rating: 4.5,
    reviews: 150,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
  },

  {
    id: 6,
    title: "Modern Desk Lamp",
    category: "Home",
    price: "$49.99",
    rating: 4,
    reviews: 90,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
  },

  {
    id: 7,
    title: "Running Sports Shoes",
    category: "Sports",
    price: "$79.99",
    rating: 4.5,
    reviews: 110,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },

  {
    id: 8,
    title: "Leather Backpack",
    category: "Accessories",
    price: "$89.99",
    rating: 4,
    reviews: 70,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },

  {
    id: 9,
    title: "Wireless Keyboard",
    category: "Electronics",
    price: "$59.99",
    rating: 4.5,
    reviews: 100,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
  },

  {
    id: 10,
    title: "Minimalist Coffee Table",
    category: "Furniture",
    price: "$149.99",
    rating: 4,
    reviews: 55,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600",
  },
];

const ProductGrid = () => {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
      "
    >
      {products.map((product) => (
        
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
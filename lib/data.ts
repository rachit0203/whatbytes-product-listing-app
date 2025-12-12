export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    image: "/images/shoes.jpg",
    description: "Comfortable running shoes with excellent support and cushioning for long-distance runs.",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 129,
    category: "Electronics",
    image: "/images/headphones.jpg",
    description: "Premium wireless headphones with noise cancellation and superior sound quality.",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Clothing",
    image: "/images/backpack.jpg",
    description: "Durable backpack with multiple compartments, perfect for travel and daily use.",
    rating: 4.3,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    description: "Feature-rich smartwatch with fitness tracking, notifications, and long battery life.",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "/images/sunglasses.jpg",
    description: "Stylish sunglasses with UV protection and polarized lenses for clear vision.",
    rating: 4.4,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "/images/camera.jpg",
    description: "High-resolution digital camera with advanced features for professional photography.",
    rating: 4.8,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "/images/tshirt.jpg",
    description: "Comfortable cotton t-shirt available in multiple colors and sizes.",
    rating: 4.2,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "/images/smartphone.jpg",
    description: "Latest smartphone with powerful processor, excellent camera, and stunning display.",
    rating: 4.9,
  },
];

export const categories = ["All", "Electronics", "Clothing", "Home"];

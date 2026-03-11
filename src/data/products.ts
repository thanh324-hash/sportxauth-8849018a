import shoeBasketball from "@/assets/shoe-basketball.jpg";
import shoeRunning from "@/assets/shoe-running.jpg";
import shoeLifestyle from "@/assets/shoe-lifestyle.jpg";
import shoeFashion from "@/assets/shoe-fashion.jpg";
import shoeBlue from "@/assets/shoe-blue.jpg";
import shoeGreen from "@/assets/shoe-green.jpg";
import shoeOrange from "@/assets/shoe-orange.jpg";
import heroShoe from "@/assets/hero-shoe.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: number[];
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Air Velocity Pro",
    brand: "Nike",
    price: 3290000,
    originalPrice: 3890000,
    images: [shoeRunning, shoeRunning, shoeRunning],
    category: "running",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    rating: 4.8,
    reviews: 234,
    description: "Giày chạy bộ cao cấp với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chạy. Thiết kế thoáng khí, nhẹ nhàng và bền bỉ.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Court Elite X",
    brand: "Nike",
    price: 3890000,
    images: [shoeBasketball, shoeBasketball, shoeBasketball],
    category: "basketball",
    sizes: [40, 41, 42, 43, 44, 45],
    rating: 4.9,
    reviews: 189,
    description: "Giày bóng rổ chuyên nghiệp với độ bám tuyệt vời và hỗ trợ mắt cá chân. Đệm React cho phản hồi năng lượng vượt trội.",
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Urban Shadow",
    brand: "Adidas",
    price: 2790000,
    images: [shoeLifestyle, shoeLifestyle, shoeLifestyle],
    category: "lifestyle",
    sizes: [38, 39, 40, 41, 42, 43],
    rating: 4.7,
    reviews: 312,
    description: "Giày lifestyle phong cách đường phố với thiết kế tối giản, phù hợp mọi trang phục. Đế Boost êm ái cho cả ngày dài.",
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Classic Retro NMD",
    brand: "Adidas",
    price: 3490000,
    originalPrice: 4190000,
    images: [shoeFashion, shoeFashion, shoeFashion],
    category: "fashion",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    rating: 4.6,
    reviews: 156,
    description: "Giày thời trang retro kết hợp phong cách cổ điển và công nghệ hiện đại. Hoàn hảo cho phong cách streetwear.",
    isNew: true,
  },
  {
    id: "5",
    name: "Speed Runner Elite",
    brand: "Puma",
    price: 2490000,
    images: [shoeBlue, shoeBlue, shoeBlue],
    category: "running",
    sizes: [39, 40, 41, 42, 43, 44],
    rating: 4.5,
    reviews: 98,
    description: "Giày chạy bộ nhẹ nhàng với thiết kế khí động học, tối ưu cho tốc độ. Đế ngoài bám đường xuất sắc.",
    isNew: true,
  },
  {
    id: "6",
    name: "Fresh Foam Trail",
    brand: "New Balance",
    price: 2990000,
    images: [shoeGreen, shoeGreen, shoeGreen],
    category: "running",
    sizes: [40, 41, 42, 43, 44],
    rating: 4.7,
    reviews: 145,
    description: "Giày chạy trail với đệm Fresh Foam mềm mại, bảo vệ bàn chân trên mọi địa hình. Thiết kế bền bỉ, chống nước.",
    isBestSeller: true,
  },
  {
    id: "7",
    name: "RS-X Reinvention",
    brand: "Puma",
    price: 2690000,
    originalPrice: 3290000,
    images: [shoeOrange, shoeOrange, shoeOrange],
    category: "lifestyle",
    sizes: [38, 39, 40, 41, 42, 43],
    rating: 4.4,
    reviews: 87,
    description: "Giày lifestyle chunky với phong cách retro-futuristic. Đế dày tạo chiều cao tự nhiên, phối màu bắt mắt.",
  },
  {
    id: "8",
    name: "Blaze Pro Max",
    brand: "Nike",
    price: 4290000,
    images: [heroShoe, heroShoe, heroShoe],
    category: "basketball",
    sizes: [41, 42, 43, 44, 45, 46],
    rating: 4.9,
    reviews: 267,
    description: "Giày bóng rổ đỉnh cao với công nghệ Air Max, đệm Zoom Air kép. Thiết kế cho các vận động viên chuyên nghiệp.",
    isNew: true,
    isBestSeller: true,
  },
];

export const categories = [
  { id: "running", name: "Giày Chạy Bộ", icon: "🏃" },
  { id: "basketball", name: "Giày Bóng Rổ", icon: "🏀" },
  { id: "lifestyle", name: "Giày Lifestyle", icon: "👟" },
  { id: "fashion", name: "Giày Thời Trang", icon: "✨" },
];

export const brands = ["Nike", "Adidas", "Puma", "New Balance", "Converse"];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

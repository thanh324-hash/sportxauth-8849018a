import shoeBasketball from "@/assets/shoe-basketball.jpg";
import shoeRunning from "@/assets/shoe-running.png";
import shoeLifestyle from "@/assets/shoe-lifestyle.jpg";
import shoeFashion from "@/assets/shoe-fashion.jpg";
import shoeBlue from "@/assets/shoe-blue.jpg";
import shoeGreen from "@/assets/shoe-green.jpg";
import shoeOrange from "@/assets/shoe-orange.jpg";
import heroShoe from "@/assets/hero-shoe.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseyRunning from "@/assets/jersey-running.jpg";
import jerseyTraining from "@/assets/jersey-training.jpg";
import fashionHoodie from "@/assets/fashion-hoodie.jpg";
import fashionTshirt from "@/assets/fashion-tshirt.jpg";
import fashionJacket from "@/assets/fashion-jacket.jpg";
import fashionJogger from "@/assets/fashion-jogger.jpg";

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
    price: 189000,
    originalPrice: 229000,
    images: [shoeRunning, shoeRunning, shoeRunning],
    category: "running",
    sizes: [250, 255, 260, 265, 270, 275, 280],
    rating: 4.8,
    reviews: 234,
    description: "최첨단 에어 쿠셔닝 기술이 적용된 프리미엄 러닝화. 모든 러닝 스텝에서 최상의 편안함을 제공합니다. 통기성 뛰어난 경량 설계로 내구성이 우수합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Court Elite X",
    brand: "Nike",
    price: 219000,
    images: [shoeBasketball, shoeBasketball, shoeBasketball],
    category: "basketball",
    sizes: [260, 265, 270, 275, 280, 285],
    rating: 4.9,
    reviews: 189,
    description: "탁월한 그립력과 발목 지지력을 갖춘 프로 농구화. React 쿠셔닝으로 뛰어난 에너지 반환을 제공합니다.",
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Urban Shadow",
    brand: "Adidas",
    price: 159000,
    images: [shoeLifestyle, shoeLifestyle, shoeLifestyle],
    category: "lifestyle",
    sizes: [250, 255, 260, 265, 270, 275],
    rating: 4.7,
    reviews: 312,
    description: "미니멀한 스트릿 스타일의 라이프스타일 신발. 어떤 의상에도 잘 어울립니다. Boost 쿠셔닝으로 하루 종일 편안합니다.",
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Classic Retro NMD",
    brand: "Adidas",
    price: 199000,
    originalPrice: 239000,
    images: [shoeFashion, shoeFashion, shoeFashion],
    category: "fashion",
    sizes: [230, 235, 240, 245, 250, 255, 260],
    rating: 4.6,
    reviews: 156,
    description: "클래식한 레트로 스타일과 현대 기술의 완벽한 조합. 스트리트웨어에 최적화된 패션 신발입니다.",
    isNew: true,
  },
  {
    id: "5",
    name: "Speed Runner Elite",
    brand: "Puma",
    price: 229000,
    images: [shoeBlue, shoeBlue, shoeBlue],
    category: "running",
    sizes: [255, 260, 265, 270, 275, 280],
    rating: 4.5,
    reviews: 98,
    description: "에어로다이나믹 디자인의 경량 러닝화. 속도에 최적화되어 있으며, 뛰어난 아웃솔 그립력을 자랑합니다.",
    isNew: true,
  },
  {
    id: "6",
    name: "Fresh Foam Trail",
    brand: "New Balance",
    price: 169000,
    images: [shoeGreen, shoeGreen, shoeGreen],
    category: "running",
    sizes: [260, 265, 270, 275, 280],
    rating: 4.7,
    reviews: 145,
    description: "부드러운 Fresh Foam 쿠셔닝의 트레일 러닝화. 모든 지형에서 발을 보호하며, 내구성과 방수 기능이 뛰어납니다.",
    isBestSeller: true,
  },
  {
    id: "7",
    name: "RS-X Reinvention",
    brand: "Puma",
    price: 149000,
    originalPrice: 189000,
    images: [shoeOrange, shoeOrange, shoeOrange],
    category: "lifestyle",
    sizes: [250, 255, 260, 265, 270, 275],
    rating: 4.4,
    reviews: 87,
    description: "레트로 퓨처리스틱 스타일의 청키 라이프스타일 신발. 두꺼운 솔로 자연스러운 키 높이를 제공하며, 눈에 띄는 컬러 매칭이 특징입니다.",
  },
  {
    id: "8",
    name: "Blaze Pro Max",
    brand: "Nike",
    price: 249000,
    images: [heroShoe, heroShoe, heroShoe],
    category: "basketball",
    sizes: [265, 270, 275, 280, 285, 290],
    rating: 4.9,
    reviews: 267,
    description: "Air Max 기술과 듀얼 Zoom Air 쿠셔닝이 적용된 최고급 농구화. 프로 선수를 위한 설계입니다.",
    isNew: true,
    isBestSeller: true,
  },
  // 스포츠 유니폼
  {
    id: "9",
    name: "프로 축구 유니폼",
    brand: "Nike",
    price: 129000,
    originalPrice: 159000,
    images: [jerseySoccer, jerseySoccer, jerseySoccer],
    category: "sportswear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.8,
    reviews: 203,
    description: "Dri-FIT 기술이 적용된 프로 축구 유니폼. 땀 흡수와 속건 기능이 뛰어나며, 가볍고 통기성이 좋아 경기 중에도 쾌적합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "10",
    name: "엘리트 농구 저지",
    brand: "Nike",
    price: 109000,
    images: [jerseyBasketball, jerseyBasketball, jerseyBasketball],
    category: "sportswear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.7,
    reviews: 178,
    description: "NBA 스타일 프리미엄 농구 저지. 경량 메쉬 소재로 통기성이 뛰어나고, 움직임에 최적화된 핏을 제공합니다.",
    isBestSeller: true,
  },
  {
    id: "11",
    name: "퍼포먼스 러닝 셔츠",
    brand: "Adidas",
    price: 79000,
    images: [jerseyRunning, jerseyRunning, jerseyRunning],
    category: "sportswear",
    sizes: [95, 100, 105, 110],
    rating: 4.6,
    reviews: 134,
    description: "AEROREADY 기술이 적용된 경량 러닝 셔츠. 습기를 빠르게 배출하여 러닝 시 항상 건조한 상태를 유지합니다.",
    isNew: true,
  },
  {
    id: "12",
    name: "트레이닝 트랙수트 세트",
    brand: "Puma",
    price: 189000,
    originalPrice: 229000,
    images: [jerseyTraining, jerseyTraining, jerseyTraining],
    category: "sportswear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.5,
    reviews: 92,
    description: "프리미엄 트레이닝 트랙수트 세트. 재킷과 팬츠 모두 포함되어 있으며, 스트레치 소재로 운동 시 편안한 움직임을 보장합니다.",
  },
  // 정품 패션 의류
  {
    id: "13",
    name: "thug club x adidas auth",
    brand: "Adidas",
    price: 229000,
    originalPrice: 169000,
    images: [fashionHoodie, fashionHoodie, fashionHoodie],
    category: "fashionwear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.9,
    reviews: 312,
    description: "프리미엄 코튼 블렌드의 오버사이즈 후디. 트렌디한 스트릿 스타일과 편안한 착용감을 동시에 제공합니다. 캥거루 포켓과 조절 가능한 후드 포함.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "14",
    name: "미니멀 로고 티셔츠",
    brand: "Adidas",
    price: 59000,
    images: [fashionTshirt, fashionTshirt, fashionTshirt],
    category: "fashionwear",
    sizes: [95, 100, 105, 110],
    rating: 4.6,
    reviews: 245,
    description: "100% 오가닉 코튼 프리미엄 티셔츠. 미니멀 로고 디자인으로 어떤 코디에도 잘 어울리며, 부드러운 촉감과 내구성이 뛰어납니다.",
    isBestSeller: true,
  },
  {
    id: "15",
    name: "프리미엄 봄버 재킷",
    brand: "Nike",
    price: 259000,
    images: [fashionJacket, fashionJacket, fashionJacket],
    category: "fashionwear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.8,
    reviews: 167,
    description: "고급 나일론 소재의 프리미엄 봄버 재킷. 클래식한 디자인에 현대적인 핏을 더했습니다. 방풍 기능과 가벼운 보온성을 제공합니다.",
    isNew: true,
  },
  {
    id: "16",
    name: "에센셜 조거 팬츠",
    brand: "New Balance",
    price: 99000,
    originalPrice: 129000,
    images: [fashionJogger, fashionJogger, fashionJogger],
    category: "fashionwear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.7,
    reviews: 198,
    description: "소프트 플리스 소재의 에센셜 조거 팬츠. 테이퍼드 핏으로 깔끔한 실루엣을 연출하며, 일상과 운동 모두에 적합합니다.",
  },
];

export const categories = [
  { id: "running", name: "러닝화", icon: "🏃" },
  { id: "basketball", name: "농구화", icon: "🏀" },
  { id: "lifestyle", name: "라이프스타일", icon: "👟" },
  { id: "fashion", name: "패션 신발", icon: "✨" },
  { id: "sportswear", name: "스포츠 유니폼", icon: "⚽" },
  { id: "fashionwear", name: "정품 패션 의류", icon: "👔" },
];

export const brands = ["Nike", "Adidas", "Puma", "New Balance", "Converse"];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(price);
}
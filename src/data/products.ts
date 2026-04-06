import bapeHoodie6 from "@/assets/bape-hoodie-6.jpg";
import mlbSandal2 from "@/assets/mlb-sandal-2.png";
import mlbSandal3 from "@/assets/mlb-sandal-3.png";
import mlbSandal4 from "@/assets/mlb-sandal-4.png";
import mlbSandal5 from "@/assets/mlb-sandal-5.png";
import mlbSandal6 from "@/assets/mlb-sandal-6.png";
import killBill2 from "@/assets/9bea1607-41e0-4f16-a3f0-f4d6fd218ecf.png";
import killBill3 from "@/assets/061c5180-2cc9-4f1f-bca7-e8dfa5896633.png";
import shoeBasketball from "@/assets/shoe-basketball.jpg";
import heroShoe from "@/assets/hero-shoe.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseyRunning from "@/assets/jersey-running.jpg";
import jerseyTraining from "@/assets/jersey-training.jpg";
import fashionHoodie from "@/assets/fashion-hoodie.jpg";
import fashionTshirt from "@/assets/fashion-tshirt.jpg";
import fashionJacket from "@/assets/fashion-jacket.jpg";
import fashionJogger from "@/assets/fashion-jogger.jpg";
import shoeFashion from "@/assets/shoe-fashion.jpg";
import shoeBlue from "@/assets/shoe-blue.jpg";
import shoeGreen from "@/assets/shoe-green.jpg";
import shoeOrange from "@/assets/shoe-orange.jpg";
import shoeLifestyle from "@/assets/shoe-lifestyle.jpg";
import shoeRunning from "@/assets/shoe-nike-zoom.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: (number | string)[];
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

const shoeSizes = [36, 37, 38, 39, 40, 41, 42, 43];

export const products: Product[] = [
  // ===== FASHIONWEAR =====
  {
    id: "1",
    name: "Hoodie BAPE like auth",
    brand: "BAPE",
    price: 189000,
    originalPrice: 229000,
    images: [
      "https://media-photos.depop.com/b1/431169500/3056642981_cb007306620541a0af84a811dc252251/P0.jpg",
      "https://media-photos.depop.com/b1/431169500/3056642984_735bae534a4d4fa1b04c336615a019ed/P0.jpg",
      "https://media-photos.depop.com/b1/431169500/3056642983_3729d8e3b25a4ad1b156062d55f9765a/P0.jpg",
      "https://media-photos.depop.com/b1/431169500/3056642982_b97a0016ecb445849c196b14df30aaa7/P0.jpg",
      "https://media-photos.depop.com/b1/431169500/3056642985_521f88daf67a4e47850300012164c27b/P0.jpg",
      bapeHoodie6
    ],
    category: "fashionwear",
    sizes: ["M", "L", "XL", "2XL"],
    rating: 4.8,
    reviews: 234,
    description: "최첨단 에어 쿠셔닝 기술이 적용된 프리미엄 러닝화. 모든 러닝 스텝에서 최상의 편안함을 제공합니다. 통기성 뛰어난 경량 설계로 내구성이 우수합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "13",
    name: "thug club x adidas auth",
    brand: "Adidas",
    price: 229000,
    originalPrice: 580000,
    images: [fashionHoodie, fashionHoodie, fashionHoodie, fashionHoodie, fashionHoodie, fashionHoodie],
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
    images: [fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt],
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
    images: [fashionJacket, fashionJacket, fashionJacket, fashionJacket, fashionJacket, fashionJacket],
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
    images: [fashionJogger, fashionJogger, fashionJogger, fashionJogger, fashionJogger, fashionJogger],
    category: "fashionwear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.7,
    reviews: 198,
    description: "소프트 플리스 소재의 에센셜 조거 팬츠. 테이퍼드 핏으로 깔끔한 실루엣을 연출하며, 일상과 운동 모두에 적합합니다.",
  },
  {
    id: "21",
    name: "스트릿 오버사이즈 맨투맨",
    brand: "Nike",
    price: 119000,
    images: [fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt, fashionTshirt],
    category: "fashionwear",
    sizes: ["M", "L", "XL", "2XL"],
    rating: 4.5,
    reviews: 156,
    description: "오버사이즈 핏의 스트릿 맨투맨. 두꺼운 코튼 원단으로 제작되어 보온성과 내구성이 뛰어나며, 캐주얼한 데일리 룩에 완벽합니다.",
    isNew: true,
  },
  {
    id: "22",
    name: "카고 와이드 팬츠",
    brand: "Puma",
    price: 139000,
    originalPrice: 179000,
    images: [fashionJogger, fashionJogger, fashionJogger, fashionJogger, fashionJogger, fashionJogger],
    category: "fashionwear",
    sizes: [95, 100, 105, 110],
    rating: 4.6,
    reviews: 89,
    description: "트렌디한 카고 포켓 디자인의 와이드 팬츠. 편안한 착용감과 스타일리시한 실루엣을 동시에 제공합니다.",
  },

  // ===== RUNNING =====
  {
    id: "5",
    name: "Sandal MLB Big Ball Chunky Mas New York Yankees Cream",
    brand: " Sandal MLB",
    price: 229000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/06/Sandal-MLB-Big-Ball-Chunky-Mas-New-York-Yankees-Cream-800x650.jpg",
      mlbSandal2,
      mlbSandal3,
      mlbSandal4,
      mlbSandal5,
      mlbSandal6
    ],
    category: "running",
    sizes: shoeSizes,
    rating: 4.5,
    reviews: 98,
    description: "에어로다이나믹 디자인의 경량 러닝화. 속도에 최적화되어 있으며, 뛰어난 아웃솔 그립력을 자랑합니다.",
    isNew: true,
  },
  {
    id: "6",
    name: "Onitsuka Tiger Mexico 66 Kill Bill ",
    brand: "Onitsuka Tiger",
    price: 180000,
    images: [
      "https://authentic-shoes.com/wp-content/uploads/2024/03/Giay-Onitsuka-Tiger-Mexico-66-Kill-Bill-DL408-0490-1-600x241.png",
      killBill2,
      killBill3,
      "https://authentic-shoes.com/wp-content/uploads/2024/03/Giay-Onitsuka-Tiger-Mexico-66-Kill-Bill-DL408-0490-10-600x565.png",
      "https://authentic-shoes.com/wp-content/uploads/2024/03/Giay-Onitsuka-Tiger-Mexico-66-Kill-Bill-DL408-0490-9-600x565.png",
      "https://authentic-shoes.com/wp-content/uploads/2024/03/Giay-Onitsuka-Tiger-Mexico-66-Kill-Bill-DL408-0490-11-600x514.png"
    ],
    category: "running",
    sizes: shoeSizes,
    rating: 4.7,
    reviews: 145,
    description: "부드러운 Fresh Foam 쿠셔닝의 트레일 러닝화. 모든 지형에서 발을 보호하며, 내구성과 방수 기능이 뛰어납니다.",
    isBestSeller: true,
  },
  {
    id: "23",
    name: "Nike Air Zoom Pegasus 40",
    brand: "Nike",
    price: 199000,
    originalPrice: 249000,
    images: [shoeRunning, shoeRunning, shoeRunning, shoeRunning, shoeRunning, shoeRunning],
    category: "running",
    sizes: shoeSizes,
    rating: 4.8,
    reviews: 276,
    description: "Zoom Air 쿠셔닝이 적용된 최고의 러닝화. 가볍고 반응성이 뛰어나 장거리 러닝에 적합합니다. 통기성 메쉬 어퍼로 쾌적합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "24",
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    price: 239000,
    images: [shoeBlue, shoeBlue, shoeBlue, shoeBlue, shoeBlue, shoeBlue],
    category: "running",
    sizes: shoeSizes,
    rating: 4.7,
    reviews: 198,
    description: "울트라부스트 라이트 쿠셔닝으로 최상의 에너지 반환을 제공하는 프리미엄 러닝화. 가볍고 편안한 착용감이 특징입니다.",
    isBestSeller: true,
  },

  // ===== BASKETBALL =====
  {
    id: "2",
    name: "Court Elite X",
    brand: "Nike",
    price: 219000,
    images: [shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball],
    category: "basketball",
    sizes: shoeSizes,
    rating: 4.9,
    reviews: 189,
    description: "탁월한 그립력과 발목 지지력을 갖춘 프로 농구화. React 쿠셔닝으로 뛰어난 에너지 반환을 제공합니다.",
    isBestSeller: true,
  },
  {
    id: "8",
    name: "Blaze Pro Max",
    brand: "Nike",
    price: 249000,
    images: [heroShoe, heroShoe, heroShoe, heroShoe, heroShoe, heroShoe],
    category: "basketball",
    sizes: shoeSizes,
    rating: 4.9,
    reviews: 267,
    description: "Air Max 기술과 듀얼 Zoom Air 쿠셔닝이 적용된 최고급 농구화. 프로 선수를 위한 설계입니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "25",
    name: "Jordan Retro High OG",
    brand: "Nike",
    price: 279000,
    originalPrice: 329000,
    images: [shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball, shoeBasketball],
    category: "basketball",
    sizes: shoeSizes,
    rating: 4.8,
    reviews: 345,
    description: "클래식한 조던 레트로 하이 OG. 아이코닉한 디자인과 프리미엄 가죽 소재로 코트 안팎에서 스타일리시합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "26",
    name: "Adidas Harden Vol. 8",
    brand: "Adidas",
    price: 209000,
    images: [shoeOrange, shoeOrange, shoeOrange, shoeOrange, shoeOrange, shoeOrange],
    category: "basketball",
    sizes: shoeSizes,
    rating: 4.6,
    reviews: 132,
    description: "하든 시그니처 농구화 8세대. Boost 쿠셔닝과 뛰어난 트랙션으로 빠른 움직임에 최적화되어 있습니다.",
  },

  // ===== LIFESTYLE =====
  {
    id: "3",
    name: "Converse Chuck Taylor All Star Classic CreamWhite",
    brand: "Converse",
    price: 159000,
    images: [
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-2-1024x1024.jpg",
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-7-1024x1024.jpg",
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-6-1024x1024.jpg",
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-8-1024x1024.jpg",
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-5-1024x1024.jpg",
      "https://xamsneaker.com/wp-content/uploads/Giay-Converse-Chuck-Taylor-All-Star-Classic-Cream-Low-White-3-1024x1024.jpg"
    ],
    category: "lifestyle",
    sizes: shoeSizes,
    rating: 4.7,
    reviews: 312,
    description: "미니멀한 스트릿 스타일의 라이프스타일 신발. 어떤 의상에도 잘 어울립니다. Boost 쿠셔닝으로 하루 종일 편안합니다.",
    isBestSeller: true,
  },
  {
    id: "7",
    name: "Converse Chuck Taylor All Star Classic Cream White",
    brand: "Converse",
    price: 169000,
    images: [
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2424.jpg",
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2727-768x587.jpg",
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2626-768x587.jpg",
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2525.jpg",
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2424.jpg",
      "https://xamsneaker.com/wp-content/uploads/chuyengiaysneaker-com-giay-converse-1970s-like-auth-2727-768x587.jpg"
    ],
    category: "lifestyle",
    sizes: shoeSizes,
    rating: 4.4,
    reviews: 87,
    description: "클래식한 디자인의 컨버스 척 테일러 올스타. 어떤 스타일에도 잘 어울리는 크림 화이트 컬러로 데일리 슈즈로 제격입니다.",
  },
  {
    id: "27",
    name: "New Balance 550 White Green",
    brand: "New Balance",
    price: 179000,
    images: [shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle],
    category: "lifestyle",
    sizes: shoeSizes,
    rating: 4.7,
    reviews: 223,
    description: "레트로 바스켓볼 스타일의 뉴밸런스 550. 클린한 화이트 그린 컬러웨이로 어떤 코디에도 쉽게 매치할 수 있습니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "28",
    name: "Puma Suede Classic XXI",
    brand: "Puma",
    price: 139000,
    originalPrice: 169000,
    images: [shoeGreen, shoeGreen, shoeGreen, shoeGreen, shoeGreen, shoeGreen],
    category: "lifestyle",
    sizes: shoeSizes,
    rating: 4.5,
    reviews: 178,
    description: "아이코닉한 퓨마 스웨이드 클래식. 프리미엄 스웨이드 소재와 클래식한 실루엣으로 시대를 초월한 스타일을 제공합니다.",
  },

  // ===== FASHION =====
  {
    id: "4",
    name: "Classic Retro NMD",
    brand: "Adidas",
    price: 199000,
    originalPrice: 239000,
    images: [shoeFashion, shoeFashion, shoeFashion, shoeFashion, shoeFashion, shoeFashion],
    category: "fashion",
    sizes: shoeSizes,
    rating: 4.6,
    reviews: 156,
    description: "클래식한 레트로 스타일과 현대 기술의 완벽한 조합. 스트리트웨어에 최적화된 패션 신발입니다.",
    isNew: true,
  },
  {
    id: "29",
    name: "Nike Air Force 1 '07 Triple White",
    brand: "Nike",
    price: 159000,
    images: [shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle, shoeLifestyle],
    category: "fashion",
    sizes: shoeSizes,
    rating: 4.9,
    reviews: 456,
    description: "전설적인 나이키 에어 포스 1. 클린한 트리플 화이트 컬러로 어떤 스타일에도 완벽하게 어울리는 머스트해브 아이템입니다.",
    isBestSeller: true,
  },
  {
    id: "30",
    name: "Adidas Samba OG White Black",
    brand: "Adidas",
    price: 189000,
    originalPrice: 219000,
    images: [shoeFashion, shoeFashion, shoeFashion, shoeFashion, shoeFashion, shoeFashion],
    category: "fashion",
    sizes: shoeSizes,
    rating: 4.8,
    reviews: 287,
    description: "아디다스 삼바 OG. 레트로 감성의 클래식 디자인으로 스트릿 패션의 아이콘입니다. 프리미엄 가죽과 스웨이드 소재.",
    isNew: true,
    isBestSeller: true,
  },

  // ===== SPORTSWEAR =====
  {
    id: "9",
    name: "프로 축구 유니폼",
    brand: "Nike",
    price: 129000,
    originalPrice: 159000,
    images: [jerseySoccer, jerseySoccer, jerseySoccer, jerseySoccer, jerseySoccer, jerseySoccer],
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
    images: [jerseyBasketball, jerseyBasketball, jerseyBasketball, jerseyBasketball, jerseyBasketball, jerseyBasketball],
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
    images: [jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning],
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
    images: [jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining],
    category: "sportswear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.5,
    reviews: 92,
    description: "프리미엄 트레이닝 트랙수트 세트. 재킷과 팬츠 모두 포함되어 있으며, 스트레치 소재로 운동 시 편안한 움직임을 보장합니다.",
  },
  {
    id: "31",
    name: "컴프레션 스포츠 레깅스",
    brand: "Nike",
    price: 89000,
    images: [jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining, jerseyTraining],
    category: "sportswear",
    sizes: [95, 100, 105, 110],
    rating: 4.7,
    reviews: 167,
    description: "Dri-FIT 기술의 컴프레션 레깅스. 근육 피로를 줄이고 운동 효율을 높여주며, 4방향 스트레치로 자유로운 움직임이 가능합니다.",
    isNew: true,
  },
  {
    id: "32",
    name: "윈드브레이커 스포츠 재킷",
    brand: "Adidas",
    price: 149000,
    originalPrice: 189000,
    images: [jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning, jerseyRunning],
    category: "sportswear",
    sizes: [95, 100, 105, 110, 115],
    rating: 4.6,
    reviews: 123,
    description: "경량 윈드브레이커 재킷. 방풍 기능과 통기성을 동시에 갖추고 있어 야외 운동 시 최적의 컨디션을 유지합니다.",
    isBestSeller: true,
  },

  // ===== BAGS =====
  {
    id: "17",
    name: "BALO MCM BRANDENBURG BACKPACK VISETOS BLACK LIKE AUTH",
    brand: "MCM",
    price: 269000,
    originalPrice: 379000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-2.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-4.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-5.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-1.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-8.jpg"
    ],
    category: "bags",
    sizes: [],
    rating: 4.8,
    reviews: 215,
    description: "내구성 뛰어난 프리미엄 스포츠 백팩. 노트북 수납 공간과 다수의 포켓으로 수납력이 우수하며, 인체공학적 등판 설계로 장시간 착용에도 편안합니다.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "18",
    name: "BaLo LV Christopher MM Monogram Eclipse Canvas Best Quality",
    brand: "Louis Vuitton",
    price: 769000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-12.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-18.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-17.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-15.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-13.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-1.jpg"
    ],
    category: "bags",
    sizes: [],
    rating: 4.7,
    reviews: 178,
    description: "대용량 스포츠 더플백. 방수 소재로 제작되어 체육관이나 여행에 최적화되어 있습니다. 탈부착 가능한 어깨끈 포함.",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "19",
    name: "Balo LV Utility Backpack Damier Graphite Canvas Black Best Quality",
    brand: "Louis Vuitton",
    price: 890000,
    originalPrice: 1255000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-2.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-8.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-7.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-1.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-21.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-utility-backpack-damier-graphite-canvas-black-13.jpg"
    ],
    category: "bags",
    sizes: [],
    rating: 4.6,
    reviews: 134,
    description: "고급 가죽 소재의 미니멀 크로스백. 가볍고 세련된 디자인으로 일상에서 스타일리시하게 활용할 수 있습니다. 조절 가능한 스트랩 포함.",
    isNew: true,
  },
  {
    id: "20",
    name: "Balo Louis Vuitton 2019 Monogram Reverse Palm Springs Mini Best Quality",
    brand: "Louis Vuitton",
    price: 726000,
    originalPrice: 970000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-2.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-20.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-19.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-4.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-5.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-louis-vuitton-2019-monogram-reverse-palm-springs-mini-9.jpg"
    ],
    category: "bags",
    sizes: ["One Size"],
    rating: 4.5,
    reviews: 96,
    description: "스포티한 디자인의 대용량 토트백. 가벼운 나일론 소재로 운동이나 쇼핑에 활용하기 좋으며, 내부 지퍼 포켓으로 소지품을 안전하게 보관할 수 있습니다.",
  },
  {
    id: "33",
    name: "MCM Stark Side Studs Backpack Visetos Cognac",
    brand: "MCM",
    price: 359000,
    originalPrice: 489000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-2.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-4.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-5.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-1.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-mcm-brandenburg-backpack-visetos-black-8.jpg"
    ],
    category: "bags",
    sizes: [],
    rating: 4.7,
    reviews: 156,
    description: "MCM 시그니처 비세토스 패턴의 스타크 백팩. 사이드 스터드 디테일이 특징이며, 넉넉한 수납공간과 고급스러운 디자인을 자랑합니다.",
    isBestSeller: true,
  },
  {
    id: "34",
    name: "LV Keepall Bandoulière 45 Monogram Canvas",
    brand: "Louis Vuitton",
    price: 950000,
    originalPrice: 1350000,
    images: [
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-12.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-18.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-17.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-15.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-13.jpg",
      "https://rollsneaker.vn/wp-content/uploads/2023/11/balo-lv-christopher-mm-monogram-eclipse-canvas-nau-1.jpg"
    ],
    category: "bags",
    sizes: [],
    rating: 4.9,
    reviews: 203,
    description: "LV 모노그램 캔버스의 키팔 반둘리에르 45. 여행용 더플백으로 최적이며, 탈부착 가능한 어깨끈과 넉넉한 수납공간을 제공합니다.",
    isNew: true,
  },
];

export const categories = [
  { id: "running", name: "러닝화", icon: "🏃" },
  { id: "basketball", name: "농구화", icon: "🏀" },
  { id: "lifestyle", name: "라이프스타일", icon: "👟" },
  { id: "fashion", name: "패션 신발", icon: "✨" },
  { id: "sportswear", name: "스포츠 유니폼", icon: "⚽" },
  { id: "fashionwear", name: "정품 패션 의류", icon: "👔" },
  { id: "bags", name: "가방 & 백팩", icon: "🎒" },
];

export const brands = ["Nike", "Adidas", "Puma", "New Balance", "Converse", "BAPE", "MCM", "Louis Vuitton", "Onitsuka Tiger"];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(price);
}

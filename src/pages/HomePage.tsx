import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroShoeDunk from "@/assets/hero-shoe-nike-dunk.png";
import promoBanner from "@/assets/promo-banner.jpg";
import brandNike from "@/assets/brand-nike.png";
import brandAdidas from "@/assets/brand-adidas.png";
import brandMlb from "@/assets/brand-mlb.png";
import brandConverse from "@/assets/brand-converse.png";
import brandVans from "@/assets/brand-vans.png";
import brandNewBalance from "@/assets/brand-newbalance.png";

const shoeCategories = ["running", "basketball", "lifestyle", "fashion"];
const allShoes = products.filter((p) => shoeCategories.includes(p.category));

const brandLogos = [
  { name: "Nike", image: brandNike, link: "/shop?brand=Nike" },
  { name: "Adidas", image: brandAdidas, link: "/shop?brand=Adidas" },
  { name: "MLB", image: brandMlb, link: "/shop?brand=Sandal MLB" },
  { name: "Converse", image: brandConverse, link: "/shop?brand=Converse" },
  { name: "Vans", image: brandVans, link: "/shop?brand=Vans" },
  { name: "New Balance", image: brandNewBalance, link: "/shop?brand=New Balance" },
];

const reviews = [
  { name: "김민수", rating: 5, text: "정품 보장에 품질도 최고입니다. 배송도 빠르고 포장도 꼼꼼해요!" },
  { name: "이수진", rating: 5, text: "세 번째 구매인데 항상 만족합니다. 사이즈도 정확하고 포장이 깔끔해요." },
  { name: "박준혁", rating: 4, text: "신발이 예쁘고 편해요. 고객 서비스도 정말 좋습니다. 해외 친구에게도 선물했어요!" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] bg-sport-dark overflow-hidden">
        <img
          src={heroShoeDunk}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sport-dark/90 via-sport-dark/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-accent/60 font-display text-xs tracking-[0.3em] mb-4">SPORTXAUTH</p>
            <p className="text-accent font-display text-xl tracking-widest mb-2">
              2026 NEW COLLECTION
            </p>
            <h1 className="font-display text-6xl sm:text-8xl text-sport-red-foreground leading-none mb-6">
              최고의<br />
              <span className="text-accent">퍼포먼스</span>
            </h1>
            <p className="text-sport-red-foreground/70 text-lg mb-8 max-w-md">
              최첨단 기술과 혁신적인 디자인의 최신 스포츠 신발 컬렉션을 만나보세요. 국내외 배송 가능.
            </p>
            <div className="flex gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                지금 구매 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-sport-red-foreground/30 text-sport-red-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-sport-red-foreground/10 transition-colors"
              >
                더 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12 tracking-wider">
            인기 카테고리
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="block bg-secondary hover:bg-secondary/80 p-8 text-center group transition-colors rounded-sm"
                >
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-display text-lg tracking-wider group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl tracking-wider">베스트셀러</h2>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={promoBanner} alt="프로모션" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-display text-xl tracking-widest mb-2">특별 프로모션</p>
            <h2 className="font-display text-5xl sm:text-7xl text-primary-foreground mb-6">
              최대 50% 할인
            </h2>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              지금 구매 <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl tracking-wider">신상품</h2>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12 tracking-wider">
            고객 리뷰
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-sm"
              >
                <div className="text-accent mb-3">{"★".repeat(r.rating)}</div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
                <p className="text-sm font-bold">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
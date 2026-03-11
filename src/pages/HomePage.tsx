import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, categories, formatPrice } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroShoe from "@/assets/hero-shoe.jpg";
import promoBanner from "@/assets/promo-banner.jpg";

const bestSellers = products.filter((p) => p.isBestSeller);
const newArrivals = products.filter((p) => p.isNew);

const reviews = [
  { name: "Minh Tuấn", rating: 5, text: "Giày chất lượng tuyệt vời, đúng hàng chính hãng. Giao hàng nhanh!" },
  { name: "Thanh Hà", rating: 5, text: "Mua lần thứ 3 rồi, luôn hài lòng. Size chuẩn, đóng gói cẩn thận." },
  { name: "Quốc Bảo", rating: 4, text: "Giày đẹp, êm chân. Dịch vụ chăm sóc khách hàng rất tốt." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] bg-sport-dark overflow-hidden">
        <img
          src={heroShoe}
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
            <p className="text-accent font-display text-xl tracking-widest mb-2">
              BỘ SƯU TẬP MỚI 2026
            </p>
            <h1 className="font-display text-6xl sm:text-8xl text-sport-red-foreground leading-none mb-6">
              BƯỚC CHẠY<br />
              <span className="text-accent">ĐỈNH CAO</span>
            </h1>
            <p className="text-sport-red-foreground/70 text-lg mb-8 max-w-md">
              Khám phá bộ sưu tập giày thể thao mới nhất với công nghệ tiên tiến, thiết kế đột phá.
            </p>
            <div className="flex gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Mua Ngay <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-sport-red-foreground/30 text-sport-red-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-sport-red-foreground/10 transition-colors"
              >
                Xem Thêm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12 tracking-wider">
            DANH MỤC NỔI BẬT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <h2 className="font-display text-4xl tracking-wider">SẢN PHẨM BÁN CHẠY</h2>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
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
        <img src={promoBanner} alt="Khuyến mãi" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-display text-xl tracking-widest mb-2">KHUYẾN MÃI ĐẶC BIỆT</p>
            <h2 className="font-display text-5xl sm:text-7xl text-primary-foreground mb-6">
              GIẢM ĐẾN 50%
            </h2>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Mua Ngay <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl tracking-wider">SẢN PHẨM MỚI</h2>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
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
            KHÁCH HÀNG NÓI GÌ
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

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, ChevronLeft, Star, Minus, Plus } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);

  const [selectedSize, setSelectedSize] = useState<number | string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">상품을 찾을 수 없습니다.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("사이즈를 선택해주세요!");
      return;
    }
    addItem(product, selectedSize, quantity);
    toast.success(`${product.name}이(가) 장바구니에 추가되었습니다!`);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" /> 쇼핑으로 돌아가기
        </Link>

        {/* Section 1: Main image + 6 thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-secondary rounded-sm overflow-hidden mb-4 flex items-center justify-center">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="gap-3 flex items-start justify-start text-center border-solid mb-8 flex-wrap">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                  activeImage === i ? "border-accent" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain bg-secondary" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Product info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{product.brand}</p>
          <h1 className="font-display sm:text-5xl mb-4 text-sm">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} 리뷰)</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="font-display text-3xl">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Size */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-destructive">주의: 고가 상품이며 주문 제작 상품으로 주문 후 취소가 불가합니다.</h4>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-14 h-12 flex items-center justify-center text-sm font-medium rounded-sm transition-colors ${
                    selectedSize === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">수량</h4>
            <div className="flex items-center border border-border rounded-sm w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-secondary transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-secondary transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" /> 장바구니에 담기
            </button>
            <button className="p-4 border border-border hover:bg-secondary rounded-sm transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="border-t border-border pt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">상품 설명</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-border pt-6 mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">배송 안내</h4>
            <ul className="text-sm text-muted-foreground space-y-1.5 leading-relaxed">
              <li>주의: 고가 상품이며 주문 제작 상품으로 주문 후 취소가 불가합니다.</li>
              <li>🌍 해외배송: 7-14일 (지역별 배송비 별도)</li>
              <li>📦 교환/반품: 수령 후 30일 이내</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: All images stacked */}
        <div className="flex flex-col gap-4 mb-12">
          {product.images
            .filter((img) => !img.includes("placehold.co"))
            .map((img, i) => (
              <div key={i} className="bg-secondary rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src={img}
                  alt={`${product.name} - ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-3xl tracking-wider mb-10">관련 상품</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
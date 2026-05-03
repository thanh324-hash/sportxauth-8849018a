import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/product/${product.id}`} className="group block h-full flex flex-col">
        <div className="relative overflow-hidden bg-secondary rounded-sm mb-3 flex items-center justify-center aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ${product.outOfStock ? "opacity-50 grayscale" : ""}`}
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                NEW
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
          {product.outOfStock && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-foreground text-background text-xs font-bold uppercase tracking-widest px-4 py-2">
                품절
              </span>
            </div>
          )}
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
            {product.brand}
          </p>
          <h3 className="text-sm font-medium mb-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            {product.outOfStock ? (
              <span className="text-sm font-bold text-muted-foreground">품절</span>
            ) : (
              <>
                <span className="text-sm font-bold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-accent">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
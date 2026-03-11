import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";
import { motion } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
        <h2 className="font-display text-3xl">GIỎ HÀNG TRỐNG</h2>
        <p className="text-muted-foreground text-sm">Hãy thêm sản phẩm vào giỏ hàng</p>
        <Link
          to="/shop"
          className="mt-4 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-accent/90 transition-colors"
        >
          Tiếp tục mua sắm <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h1 className="font-display text-4xl tracking-wider mb-10">GIỎ HÀNG</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={`${item.product.id}-${item.size}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-4 bg-secondary rounded-sm"
              >
                <Link to={`/product/${item.product.id}`} className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-sm overflow-hidden bg-background">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.product.brand}</p>
                      <h3 className="text-sm font-medium">{item.product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="p-1 hover:bg-background rounded-sm transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="p-1.5 hover:bg-background transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="p-1.5 hover:bg-background transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-bold">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-secondary p-6 rounded-sm h-fit sticky top-24">
            <h3 className="font-display text-xl tracking-wider mb-6">TÓM TẮT ĐƠN HÀNG</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vận chuyển</span>
                <span>{totalPrice() >= 1000000 ? "Miễn phí" : formatPrice(30000)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-bold">
                <span>Tổng cộng</span>
                <span className="text-lg">
                  {formatPrice(totalPrice() + (totalPrice() >= 1000000 ? 0 : 30000))}
                </span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Thanh Toán <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop" className="mt-3 w-full flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

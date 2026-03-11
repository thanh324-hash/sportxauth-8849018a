import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const shipping = totalPrice() >= 1000000 ? 0 : 30000;
  const total = totalPrice() + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Giỏ hàng trống. Không có gì để thanh toán.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl tracking-wider">THANH TOÁN</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Customer Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">THÔNG TIN KHÁCH HÀNG</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Họ và tên *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required placeholder="Số điện thoại *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required type="email" placeholder="Email *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent sm:col-span-2" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">ĐỊA CHỈ GIAO HÀNG</h3>
              <div className="space-y-4">
                <input required placeholder="Địa chỉ chi tiết *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input required placeholder="Quận/Huyện *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                  <input required placeholder="Tỉnh/Thành phố *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                  <input placeholder="Mã bưu chính" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <textarea placeholder="Ghi chú đơn hàng" rows={3} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">PHƯƠNG THỨC THANH TOÁN</h3>
              <div className="space-y-3">
                {[
                  { id: "cod", label: "Thanh toán khi nhận hàng (COD)", desc: "Trả tiền mặt khi nhận hàng" },
                  { id: "bank", label: "Chuyển khoản ngân hàng", desc: "Chuyển khoản trước khi giao hàng" },
                  { id: "ewallet", label: "Ví điện tử", desc: "MoMo, ZaloPay, VNPay" },
                ].map((m) => (
                  <label
                    key={m.id}
                    className={`flex items-center gap-4 p-4 rounded-sm cursor-pointer transition-colors ${
                      paymentMethod === m.id ? "bg-accent/10 border border-accent" : "bg-secondary border border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={m.id}
                      checked={paymentMethod === m.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-accent"
                    />
                    <div>
                      <p className="text-sm font-medium">{m.label}</p>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="bg-secondary p-6 rounded-sm sticky top-24">
              <h3 className="font-display text-xl tracking-wider mb-6">ĐƠN HÀNG CỦA BẠN</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-sm overflow-hidden bg-background flex-shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Size {item.size} × {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm border-t border-border pt-4">
                <div className="flex justify-between"><span className="text-muted-foreground">Tạm tính</span><span>{formatPrice(totalPrice())}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Vận chuyển</span><span>{shipping === 0 ? "Miễn phí" : formatPrice(shipping)}</span></div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border"><span>Tổng cộng</span><span>{formatPrice(total)}</span></div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-accent text-accent-foreground py-4 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Đặt Hàng
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

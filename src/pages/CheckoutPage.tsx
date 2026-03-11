import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingType, setShippingType] = useState("domestic");

  const domesticShipping = totalPrice() >= 100000 ? 0 : 3000;
  const internationalShipping = 25000;
  const shipping = shippingType === "domestic" ? domesticShipping : internationalShipping;
  const total = totalPrice() + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("주문이 완료되었습니다! 감사합니다.");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">장바구니가 비어있습니다. 결제할 상품이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl tracking-wider">결제</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Customer Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">고객 정보</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="이름 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required placeholder="연락처 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required type="email" placeholder="이메일 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent sm:col-span-2" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">배송 유형</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { id: "domestic", label: "🇰🇷 국내배송", desc: "2-3 영업일" },
                  { id: "international", label: "🌍 해외배송", desc: "7-14 영업일" },
                ].map((s) => (
                  <label
                    key={s.id}
                    className={`flex flex-col items-center gap-1 p-4 rounded-sm cursor-pointer transition-colors text-center ${
                      shippingType === s.id ? "bg-accent/10 border border-accent" : "bg-secondary border border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="shippingType"
                      value={s.id}
                      checked={shippingType === s.id}
                      onChange={(e) => setShippingType(e.target.value)}
                      className="sr-only"
                    />
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">배송지 정보</h3>
              <div className="space-y-4">
                {shippingType === "international" && (
                  <input required placeholder="국가 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                )}
                <input required placeholder="상세 주소 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input required placeholder={shippingType === "domestic" ? "시/군/구 *" : "도시 *"} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                  <input required placeholder={shippingType === "domestic" ? "시/도 *" : "주/지역 *"} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                  <input required placeholder="우편번호 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <textarea placeholder="배송 메모" rows={3} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-wider mb-4">결제 수단</h3>
              <div className="space-y-3">
                {[
                  { id: "card", label: "신용카드 / 체크카드", desc: "Visa, Mastercard, 국내 카드" },
                  { id: "kakaopay", label: "카카오페이", desc: "카카오페이로 간편 결제" },
                  { id: "naverpay", label: "네이버페이", desc: "네이버페이로 간편 결제" },
                  { id: "bank", label: "무통장입금", desc: "주문 후 계좌이체" },
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
              <h3 className="font-display text-xl tracking-wider mb-6">주문 내역</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-sm overflow-hidden bg-background flex-shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size}mm × {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm border-t border-border pt-4">
                <div className="flex justify-between"><span className="text-muted-foreground">소계</span><span>{formatPrice(totalPrice())}</span></div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {shippingType === "domestic" ? "국내배송" : "해외배송"}
                  </span>
                  <span>{shipping === 0 ? "무료" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border"><span>합계</span><span>{formatPrice(total)}</span></div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-accent text-accent-foreground py-4 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                주문하기
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
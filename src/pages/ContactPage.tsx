import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("문의가 접수되었습니다! 빠른 시일 내에 답변드리겠습니다.");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="문의하기 - SPORTX 고객 지원"
        description="SPORTX 고객 지원팀에 문의하세요. 주문, 배송, 정품 문의 등 빠르게 답변드립니다."
        path="/contact"
      />
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-4">문의하기</h1>
          <p className="text-primary-foreground/60">언제든지 문의해주세요. 빠르게 답변드리겠습니다.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-display text-3xl tracking-wider mb-6">메시지 보내기</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="이름 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required type="email" placeholder="이메일 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <input required placeholder="제목 *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <textarea required placeholder="문의 내용 *" rows={6} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none" />
              <button type="submit" className="bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors">
                보내기
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="font-display text-3xl tracking-wider mb-6">매장 정보</h2>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "주소", value: "서울특별시 강남구 압구정로 123, 2층" },
                { icon: Phone, label: "전화", value: "02-1234-5678" },
                { icon: Mail, label: "이메일", value: "info@sportx.co.kr" },
                { icon: Clock, label: "영업시간", value: "10:00 - 21:00 (연중무휴)" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed - Gangnam, Seoul */}
            <div className="aspect-video rounded-sm overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.028!3d37.527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMxJzM3LjAiTiAxMjfCsDAxJzQxLjAiRQ!5e0!3m2!1sko!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
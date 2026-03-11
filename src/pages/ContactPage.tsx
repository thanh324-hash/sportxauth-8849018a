import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.");
  };

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-4">LIÊN HỆ</h1>
          <p className="text-primary-foreground/60">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-display text-3xl tracking-wider mb-6">GỬI TIN NHẮN</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Họ và tên *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                <input required type="email" placeholder="Email *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <input required placeholder="Tiêu đề *" className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <textarea required placeholder="Nội dung tin nhắn *" rows={6} className="w-full px-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none" />
              <button type="submit" className="bg-accent text-accent-foreground px-8 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors">
                Gửi tin nhắn
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="font-display text-3xl tracking-wider mb-6">THÔNG TIN CỬA HÀNG</h2>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Địa chỉ", value: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh" },
                { icon: Phone, label: "Điện thoại", value: "0909 123 456" },
                { icon: Mail, label: "Email", value: "info@sportx.vn" },
                { icon: Clock, label: "Giờ mở cửa", value: "9:00 - 21:00 (Thứ 2 - Chủ nhật)" },
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

            {/* Map Embed */}
            <div className="aspect-video rounded-sm overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447!2d106.700!3d10.773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzIzLjAiTiAxMDbCsDQyJzAwLjAiRQ!5e0!3m2!1svi!2s!4v1"
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

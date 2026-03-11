import { motion } from "framer-motion";
import { Shield, Award, Truck, RefreshCw } from "lucide-react";

const commitments = [
  { icon: Shield, title: "100% Chính Hãng", desc: "Cam kết tất cả sản phẩm đều là hàng chính hãng, nhập khẩu trực tiếp." },
  { icon: Award, title: "Chất Lượng Cao", desc: "Chỉ bán những sản phẩm đạt tiêu chuẩn chất lượng cao nhất." },
  { icon: Truck, title: "Giao Hàng Toàn Quốc", desc: "Giao hàng nhanh chóng trên toàn quốc, miễn phí cho đơn từ 1 triệu." },
  { icon: RefreshCw, title: "Đổi Trả 30 Ngày", desc: "Chính sách đổi trả linh hoạt trong vòng 30 ngày kể từ ngày mua." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-4">VỀ CHÚNG TÔI</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            SPORTX - Cửa hàng giày thể thao và thời trang chính hãng hàng đầu Việt Nam
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl mb-6 tracking-wider">CÂU CHUYỆN CỦA CHÚNG TÔI</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SPORTX được thành lập với sứ mệnh mang đến cho người tiêu dùng Việt Nam những đôi giày thể thao chính hãng
            với giá cả hợp lý nhất. Chúng tôi là đối tác chính thức của các thương hiệu hàng đầu thế giới
            như Nike, Adidas, Puma, New Balance và Converse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Với đội ngũ chuyên gia am hiểu sâu về giày thể thao, chúng tôi tự tin tư vấn cho bạn
            đôi giày phù hợp nhất với nhu cầu sử dụng, từ chạy bộ chuyên nghiệp đến phong cách đường phố.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-sm text-center"
            >
              <c.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
              <h3 className="font-display text-lg mb-2 tracking-wider">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

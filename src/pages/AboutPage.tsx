import { motion } from "framer-motion";
import { Shield, Award, Truck, RefreshCw } from "lucide-react";

const commitments = [
  { icon: Shield, title: "100% 정품 보장", desc: "모든 상품은 공식 수입 정품입니다. 정품 인증서를 함께 제공합니다." },
  { icon: Award, title: "프리미엄 품질", desc: "최고 품질 기준을 충족하는 상품만 엄선하여 판매합니다." },
  { icon: Truck, title: "국내외 배송", desc: "국내 빠른배송은 물론, 전 세계 해외배송도 지원합니다." },
  { icon: RefreshCw, title: "30일 교환/반품", desc: "구매일로부터 30일 이내 유연한 교환 및 반품 정책을 운영합니다." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-4">회사 소개</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            SPORTX - 대한민국 No.1 정품 스포츠 & 패션 신발 전문 온라인 스토어
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl mb-6 tracking-wider">우리의 이야기</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SPORTX는 대한민국 소비자에게 합리적인 가격으로 정품 스포츠 신발을 제공하기 위해 설립되었습니다.
            Nike, Adidas, Puma, New Balance, Converse 등 세계적인 브랜드의 공식 파트너로서,
            국내는 물론 전 세계 고객에게 최고의 제품을 전달하고 있습니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            스포츠 신발 전문가로 구성된 팀이 고객의 니즈에 맞는 최적의 제품을 추천해드립니다.
            프로 러닝화부터 스트릿 패션까지, 여러분의 라이프스타일에 맞는 완벽한 한 켤레를 찾아보세요.
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
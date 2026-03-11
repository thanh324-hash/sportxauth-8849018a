import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl mb-4">
              SPORT<span className="text-accent">X</span>
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              대한민국 No.1 정품 스포츠 & 패션 신발 전문 온라인 스토어.
              100% 정품 보장. 국내 및 해외 배송 가능.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">쇼핑</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">전체 상품</Link></li>
              <li><Link to="/shop?category=running" className="hover:text-primary-foreground transition-colors">러닝화</Link></li>
              <li><Link to="/shop?category=basketball" className="hover:text-primary-foreground transition-colors">농구화</Link></li>
              <li><Link to="/shop?category=lifestyle" className="hover:text-primary-foreground transition-colors">라이프스타일</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">고객지원</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">회사 소개</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">문의하기</Link></li>
              <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">교환/반품 정책</span></li>
              <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">사이즈 가이드</span></li>
              <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">해외배송 안내</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">연락처</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>📍 서울특별시 강남구 압구정로 123</li>
              <li>📞 02-1234-5678</li>
              <li>✉️ info@sportx.co.kr</li>
              <li className="pt-2">
                <span className="text-xs uppercase tracking-wider">영업시간: 10:00 - 21:00 (연중무휴)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © 2026 SPORTX. All rights reserved. 사업자등록번호: 123-45-67890
        </div>
      </div>
    </footer>
  );
}
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
              Cửa hàng giày thể thao và thời trang chính hãng hàng đầu Việt Nam.
              Cam kết 100% hàng authentic.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">CỬA HÀNG</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Tất cả sản phẩm</Link></li>
              <li><Link to="/shop?category=running" className="hover:text-primary-foreground transition-colors">Giày chạy bộ</Link></li>
              <li><Link to="/shop?category=basketball" className="hover:text-primary-foreground transition-colors">Giày bóng rổ</Link></li>
              <li><Link to="/shop?category=lifestyle" className="hover:text-primary-foreground transition-colors">Giày lifestyle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">HỖ TRỢ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Giới thiệu</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Liên hệ</Link></li>
              <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Chính sách đổi trả</span></li>
              <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Hướng dẫn chọn size</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-wider">LIÊN HỆ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>📍 123 Nguyễn Huệ, Q.1, TP.HCM</li>
              <li>📞 0909 123 456</li>
              <li>✉️ info@sportx.vn</li>
              <li className="pt-2">
                <span className="text-xs uppercase tracking-wider">Giờ mở cửa: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © 2026 SPORTX. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}

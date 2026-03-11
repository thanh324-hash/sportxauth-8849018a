import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, brands, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const priceRanges = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "Dưới 2.5tr", min: 0, max: 2500000 },
  { label: "2.5tr - 3.5tr", min: 2500000, max: 3500000 },
  { label: "Trên 3.5tr", min: 3500000, max: Infinity },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      const range = priceRanges[selectedPrice];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
  }, [search, selectedBrand, selectedCategory, selectedPrice]);

  const clearFilters = () => {
    setSearch("");
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedPrice(0);
  };

  const hasFilters = search || selectedBrand || selectedCategory || selectedPrice > 0;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-3">CỬA HÀNG</h1>
          <p className="text-primary-foreground/60 text-sm">Khám phá bộ sưu tập giày thể thao chính hãng</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Search & Filter Toggle */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 rounded-sm text-sm font-medium transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Bộ lọc</span>
          </button>
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 text-sm text-accent hover:underline">
              <X className="w-3 h-3" /> Xóa lọc
            </button>
          )}
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-secondary rounded-sm">
                {/* Brand */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Thương hiệu</h4>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(selectedBrand === b ? "" : b)}
                        className={`px-3 py-1.5 text-xs rounded-sm transition-colors ${
                          selectedBrand === b
                            ? "bg-accent text-accent-foreground"
                            : "bg-background hover:bg-background/80"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Loại giày</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategory(selectedCategory === c.id ? "" : c.id)}
                        className={`px-3 py-1.5 text-xs rounded-sm transition-colors ${
                          selectedCategory === c.id
                            ? "bg-accent text-accent-foreground"
                            : "bg-background hover:bg-background/80"
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Giá</h4>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((r, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPrice(i)}
                        className={`px-3 py-1.5 text-xs rounded-sm transition-colors ${
                          selectedPrice === i
                            ? "bg-accent text-accent-foreground"
                            : "bg-background hover:bg-background/80"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-6">{filtered.length} sản phẩm</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Không tìm thấy sản phẩm nào.</p>
          </div>
        )}
      </div>
    </div>
  );
}

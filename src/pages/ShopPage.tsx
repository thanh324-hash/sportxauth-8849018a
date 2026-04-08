import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, brands, categories, shoeSubBrands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const priceRanges = [
  { label: "전체", min: 0, max: Infinity },
  { label: "₩150,000 이하", min: 0, max: 150000 },
  { label: "₩150,000 - ₩200,000", min: 150000, max: 200000 },
  { label: "₩200,000 이상", min: 200000, max: Infinity },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedSubBrand, setSelectedSubBrand] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showSubBrandDropdown, setShowSubBrandDropdown] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedSubBrand && p.brand.toUpperCase() !== selectedSubBrand) return false;
      const range = priceRanges[selectedPrice];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
  }, [search, selectedBrand, selectedCategory, selectedSubBrand, selectedPrice]);

  const clearFilters = () => {
    setSearch("");
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedSubBrand("");
    setSelectedPrice(0);
  };

  const hasFilters = search || selectedBrand || selectedCategory || selectedSubBrand || selectedPrice > 0;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl tracking-wider mb-3">쇼핑</h1>
          <p className="text-primary-foreground/60 text-sm">정품 스포츠 신발 컬렉션을 만나보세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Search & Filter Toggle */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="상품 검색..."
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
            <span className="hidden sm:inline">필터</span>
          </button>
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 text-sm text-accent hover:underline">
              <X className="w-3 h-3" /> 초기화
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
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">브랜드</h4>
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
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">카테고리</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <div key={c.id} className="relative">
                        <button
                          onClick={() => {
                            if (c.id === "shoes") {
                              setSelectedCategory(selectedCategory === c.id ? "" : c.id);
                              if (selectedCategory === c.id) {
                                setSelectedSubBrand("");
                                setShowSubBrandDropdown(false);
                              } else {
                                setShowSubBrandDropdown(true);
                              }
                            } else {
                              setSelectedCategory(selectedCategory === c.id ? "" : c.id);
                              setSelectedSubBrand("");
                              setShowSubBrandDropdown(false);
                            }
                          }}
                          className={`px-3 py-1.5 text-xs rounded-sm transition-colors flex items-center gap-1 ${
                            selectedCategory === c.id
                              ? "bg-accent text-accent-foreground"
                              : "bg-background hover:bg-background/80"
                          }`}
                        >
                          {c.name}
                          {c.id === "shoes" && <ChevronDown className="w-3 h-3" />}
                        </button>
                        {/* Sub-brand dropdown for shoes */}
                        {c.id === "shoes" && selectedCategory === "shoes" && showSubBrandDropdown && (
                          <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-sm shadow-lg z-50 min-w-[160px]">
                            <button
                              onClick={() => { setSelectedSubBrand(""); setShowSubBrandDropdown(false); }}
                              className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${
                                !selectedSubBrand ? "bg-accent text-accent-foreground" : ""
                              }`}
                            >
                              전체
                            </button>
                            {shoeSubBrands.map((sb) => (
                              <button
                                key={sb}
                                onClick={() => { setSelectedSubBrand(selectedSubBrand === sb ? "" : sb); setShowSubBrandDropdown(false); }}
                                className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${
                                  selectedSubBrand === sb ? "bg-accent text-accent-foreground" : ""
                                }`}
                              >
                                {sb}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3">가격</h4>
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
        <p className="text-sm text-muted-foreground mb-6">{filtered.length}개 상품</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
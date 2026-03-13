import { motion } from "framer-motion";

export default function MarqueeBanner() {
  const text = "⚠️ 웹사이트 업그레이드 중입니다. Instagram 계정을 통해 주문해 주세요 ⚠️";
  const repeated = Array(6).fill(text).join("     ");

  return (
    <div className="bg-accent text-accent-foreground py-2 overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block text-sm font-medium tracking-wide"
      >
        {repeated}
      </motion.div>
    </div>
  );
}

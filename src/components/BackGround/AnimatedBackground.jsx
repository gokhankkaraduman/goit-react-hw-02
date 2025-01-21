import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <motion.div
      style={{
        position: "fixed", // Ekranın tamamını kaplar
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1, // İçeriklerin arkasında kalmasını sağlar
        background: "linear-gradient(45deg, #ff6b6b, #4facfe)",
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    ></motion.div>
  );
}

export default AnimatedBackground;

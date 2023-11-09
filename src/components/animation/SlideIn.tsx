import { motion } from "framer-motion";

export const SlideIn = ({ duration = 0.5, delay = 0, animate, children }) => {
  return (
    <motion.div
      variants={{
        hidden: { width: 0 },
        visible: { width: "100%" },
      }}
      initial="hidden"
      animate={animate}
      transition={{
        duration: duration,
        delay: delay,
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

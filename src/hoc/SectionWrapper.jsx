import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  return function HOC() {
    const controls = useAnimation();
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            controls.start("show"); // animate once
            hasAnimated.current = true;
            observer.disconnect(); // 🔥 stop observing completely
          }
        },
        { threshold: 0.25 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [controls]);

    return (
      <motion.section
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        animate={controls} // ❌ no whileInView
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName} />
        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Company() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="company-container">
      <h1>What I love about the Company</h1>
      <span>Here are some facts that I really like about the company.</span>
      <div className="company-grid">
        <motion.div
          className="company-card"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="company-logo1">
          <h2>Company Fact 1</h2>
          <p>
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like. Here is a fact about the company that I really like.
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like.
          </p>
          </div>
        </motion.div>
        <motion.div
          className="company-card"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="company-logo2">
          <h2>Company Fact 2</h2>
          <p>
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like. Here is a fact about the company that I really like.
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like.
          </p>
          </div>
        </motion.div>
        <motion.div
          className="company-card"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="company-logo3">
          <h2>Company Fact 3</h2>
          <p>
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like. Here is a fact about the company that I really like.
            Here is a fact about the company that I really like. Here is a fact
            about the company that I really like. Here is a fact about the
            company that I really like. Here is a fact about the company that I
            really like.
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
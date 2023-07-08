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
      <h1>The Company</h1>
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
          <h2>Innovation</h2>
          <p>
          The company prides itself on fostering a culture of innovation, encouraging employees to think creatively and push boundaries to develop groundbreaking solutions.
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
          <h2>Diversity and Inclusion</h2>
          <p>
          The company is committed to creating a diverse and inclusive workplace where every individual feels valued, respected, and empowered to contribute their unique perspectives.
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
          <h2>Social Responsibility</h2>
          <p>
          The company actively engages in philanthropy, community outreach, and sustainable practices, making a positive impact on society and demonstrating its commitment to corporate social responsibility.
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import companies from "../data/companies";

console.log(companies);
export default function Company() {
  const company = companies.find((company) => company.id === 1);

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
      <h1>{company.name}</h1>
      <span>Here are some facts that I really like about {company.name}.</span>
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
            <h2>{company.card1.title}</h2>
            <p>{company.card1.description}</p>
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
            <h2>{company.card2.title}</h2>
            <p>{company.card2.description}</p>
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
            <h2>{company.card3.title}</h2>
            <p>{company.card3.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

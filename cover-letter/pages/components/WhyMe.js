import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyMe() {  
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
    <div className="whyme-container">
      <h1>Why Me?</h1>
      <span>Here are some reasons why I would be a great fit for the role</span>
      <div className="whyme-grid">
        <motion.div
          className="whyme-card why-me1"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <h2>Reason 1: Quickly Adopt and Learn</h2>
          <motion.p>
            I pride myself on my ability to quickly learn and adapt to new technologies. I am always curious to learn new technologies!
            One of the things I love about software development is that it's a never-ending learning journey, and I am always looking for ways to expand my skills and knowledge in the field.
          </motion.p>
        </motion.div>
        <motion.div
          className="whyme-card why-me2"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Reason 2: Collaboration</h2>
          <motion.p>
            I believe that teamwork is key to achieving success, and I am committed to doing my part to contribute to the Company team's efforts.
            Empathy and kindness are values that are important to me, and I try to incorporate them into my interactions with others.
          </motion.p>
        </motion.div>
        <motion.div
          className="whyme-card why-me3"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Reason 3: Passionate</h2>
          <motion.p>
            I have a strong desire to create software and online experiences that are both visually appealing and intuitive for users.
            I am always looking for ways to make the user's journey through a website as seamless and enjoyable as possible.
            I believe that design can change the way people interact with software.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
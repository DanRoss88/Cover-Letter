import React, { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main id="about" className={`about-container ${isVisible && "visible"}`}>
      <div className="about-headline">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className={`about-card ${isVisible && "visible"}`}>
          <h3>2006</h3>
          <h2>Started kitchen work</h2>
          <p>
            I started working in kitchens at the age of 18. I worked at a local
            restaurant in my hometown of Surrey, British Columbia.
          </p>
        </div>
        <div className={`about-card ${isVisible && "visible"}`}>
          <h3>2020</h3>
          <h2>Child Care</h2>
          <p>
            I lost my job due to the pandemic and decided to take a break from
            managing kitchens. I took up a job as a caretaker for high-risk
            youth in my hometown. In my spare time, I started learning to code.
          </p>
        </div>
        <div className={`about-card ${isVisible && "visible"}`}>
          <h3>2023</h3>
          <h2>Graduated from Lighthouse Labs</h2>
          <p>
            I ended up loving coding and decided to pursue it as a career. I
            enrolled in a coding bootcamp and graduated from the Web Development
            Bootcamp at Lighthouse Labs. It was challenging, but also extremely
            rewarding. I learned so much and feel confident in my abilities as a
            developer. I am excited to see where this career path takes me and
            am grateful for the opportunity to pursue my passion.
          </p>
        </div>
        <div className={`about-wrapup ${isVisible && "visible"}`}>
          <p>
            When I'm not working on coding projects, I love to spend my free
            time doing things that make me happy. I enjoy taking my dog Bobbi
            for walks and playing guitar with my friends. Watching movies is
            also something that I enjoy doing, especially on lazy weekends.
            Although I used to love cooking, I realized that it wasn't the right
            career path for me. It's important to follow your passions and find
            what truly makes you happy.
          </p>
        </div>
      </div>
    </main>
  );
}
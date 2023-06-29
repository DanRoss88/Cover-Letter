import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const items = {
    responsive: [
      {
        id: 1,
        title: "First Aide",
        description:
          "First Aide is an AI-powered personal health assistant that utilizes speech recognition and Open AI to provide medical-related advice. It also keeps track of personal medical records. This was a collaborative effort for my final project at Lighthouse Labs.",
        image: "/cover-letter/public/speech-recognition.gif",
        url1: "https://github.com/danross88/first-aide-client",
        url2: "https://github.com/danross88/first-aide-server",
      },
      {
        id: 2,
        title: "PhotoLabs",
        description:
          "PhotoLabs is a full-stack web application that allows users to upload photos, categorize them into topics and store their favorites. It was built using React and Node.js. It was my first introduction to React.",
        image: "/cover-letter/public/photo-lab.png",
        url1: "https://github.com/DanRoss88/photolabs-project",
      },
      {
        id: 3,
        title: "Portfolio",
        description:
          "This portfolio started out as a Next.js blog tutorial. I then customized it to my liking and added a few features of my own. I used Next.js, React, and CSS to build this portfolio.",
        image: "/cover-letter/public/portfolio.png",
        url1: "https://danross-portfolio.vercel.app/",
      },
      {
        id: 4,
        title: "bArk",
        description:
          "bArk is a full-stack web application that allows users to create, read, update, and delete stories. It was built using React, Node, Express, and PostgreSQL. It was my first collaborative effort and was built as a group project with 2 other developers.",
        image: "/cover-letter/public/bArk-read-story.png",
        url1: "https://github.com/DanRoss88/bArk",
      },
      {
        id: 5,
        title: "Tweeter",
        description:
          "Tweeter is a simple, single-page Twitter clone. I took this project on to learn more about front-end development and to practice my HTML, CSS, JS, jQuery, and AJAX front-end skills. I customized the design to my liking and added a few features of my own.",
        image: "/cover-letter/public/Tweeter!.png",
        url1: "https://github.com/DanRoss88/tweeter",
      },
    ],
  };

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.responsive.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="overflow-hidden cursor-pointer lg:w-1/2">
                <Link href={item.url1}>
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={514}
                      width={800}
                      className="rounded-lg shadow-xl"
                      placeholder="blur"
                      blurDataURL={item.image}
                    />
                  </>
                </Link>
                <Link href={item.url2 || "#"} />
                <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 space-x-2">
        {items.responsive.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}

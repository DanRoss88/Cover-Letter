import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import items from "../data/items";

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

  const handleScrollTo = (index) => {
    scrollTo(index);
    setSelectedIndex(index);
  };
  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.responsive.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="overflow-hidden cursor-pointer lg:w-1/2">
                <Link href={item.url1}>
                  <>
                    <div className="absolute z-10 flex items-center justify-center w-full h-full text-3xl font-bold text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={514}
                        className="responsive-image rounded-lg shadow-xl"
                        placeholder="blur"
                        blurDataURL={item.image}
                      />
                    </div>
                  </>
                </Link>

                <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}{" "}
                    {item.url2 && (
                      <Link href={item.url2}>
                        <AiOutlineLink /> First Aide Server Link
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      {embla && (
        <div className="scroll-index">
          <div className="flex items-center justify-center mt-5 space-x-2">
            {items.responsive.map((item, index) => (
              <button
                key={index}
                className={`${index === selectedIndex ? "active" : "inactive"}`}
                onClick={() => handleScrollTo(index)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

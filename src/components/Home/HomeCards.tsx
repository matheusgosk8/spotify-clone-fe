"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MediaCard } from "./MediaCard"; 

interface SectionProps {
  title: string;
  items: {
    id: string;
    name: string;
    image?: string;
    subtitle?: string;
  }[];
}

export function Section({ title, items }: SectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScroll(el.scrollWidth > el.clientWidth + 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    checkScroll();

    return () => observer.disconnect();
  }, [checkScroll]);

  const handleLayoutChange = useCallback(() => {
    checkScroll();
  }, [checkScroll]);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth"
        >
          {items.map((item) => (
            <MediaCard
              key={item.id}
              name={item.name}
              subtitle={item.subtitle}
              image={item.image}
              onReady={handleLayoutChange}
            />
          ))}
        </div>

        {canScroll && (
          <>
            <button
              onClick={() => scrollByAmount("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur rounded-full shadow hover:text-primary transition-colors"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scrollByAmount("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur rounded-full shadow hover:text-primary transition-colors"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

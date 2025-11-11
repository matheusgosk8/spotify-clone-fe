"use client";

export function SectionSkeleton() {
  return (
    <section className="relative w-full animate-pulse">
      <div className="flex justify-between items-center mb-3">
        <div className="h-6 w-40 bg-foreground/10 rounded"></div>
      </div>

      <div className="flex gap-5 overflow-x-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-44 h-60 bg-foreground/10 rounded-lg overflow-hidden"
          >
            <div className="h-44 w-full bg-foreground/20"></div>
            <div className="p-3 space-y-2">
              <div className="h-4 w-3/4 bg-foreground/20 rounded"></div>
              <div className="h-3 w-1/2 bg-foreground/10 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const HomeCardSkeleton = () => {
    const qty = 5;
  
    return (
      <div className="space-y-10">
        {Array.from({ length: qty }).map((_, i) => (
          <SectionSkeleton key={i} />
        ))}
      </div>
    );
  };

export default HomeCardSkeleton
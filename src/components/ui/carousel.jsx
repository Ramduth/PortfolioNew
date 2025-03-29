import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slides, setSlides] = React.useState(0);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    
    setSlides(api.scrollSnapList().length);

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, selectedIndex, slides }}>
      <div className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
        {children}
        <CarouselPagination />
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden cursor-grab" data-slot="carousel-content">
      <div className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
      {...props}
    />
  );
}

// function CarouselPagination({ className }) {
//   const { api, selectedIndex, slides } = useCarousel();

//   if (!api) return null;

//   return (
//     <div className={cn("flex justify-center gap-2 mt-4", className)}>
//       {Array.from({ length: slides }).map((_, index) => (
//         <button
//           key={index}
//           className={cn(
//             "h-2 w-2 rounded-full transition-colors",
//             selectedIndex === index ? "bg-black" : "bg-gray-400 hover:bg-gray-600"
//           )}
//           onClick={() => api.scrollTo(index)}
//         />
//       ))}
//     </div>
//   );
// }

function CarouselPagination({ className }) {
  const { api, selectedIndex, slides } = useCarousel();

  if (!api) return null;

  return (
    <div className={cn("flex justify-start ml-4 gap-2 mt-4", className)}>
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "text-2xl font-bold transition-colors cursor-pointer",
            selectedIndex === index ? "text-[#D9D9D9]" : "text-gray-400 hover:text-gray-600"
          )}
          onClick={() => api.scrollTo(index)}
        >
          {selectedIndex === index ? "—" : "-"}
        </button>
      ))}
    </div>
  );
}

export { Carousel, CarouselContent, CarouselItem };

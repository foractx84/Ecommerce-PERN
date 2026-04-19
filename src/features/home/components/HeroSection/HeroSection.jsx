import { useState, useEffect } from 'react';
import heroCategories from '../../../../mocks/home/heroCategories';
import heroSlides from '../../../../mocks/home/heroSlides';
import { ChevronRight } from 'lucide-react';

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  const translateX = activeIndex * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16">
      <div className="grid w-full gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div
          className="relative border-r border-black/10 pt-10 text-black"
          onMouseLeave={() => setActiveCategory(null)}
        >
          <aside className="pr-4">
            <ul className="space-y-4">
              {heroCategories.map((item) => (
                <li
                  key={item.id}
                  onMouseEnter={() =>
                    item.subCategories.length > 0
                      ? setActiveCategory(item)
                      : setActiveCategory(null)
                  }
                  className="flex cursor-pointer items-center justify-between text-[15px] text-black"
                >
                  <span>{item.label}</span>
                  {item.hasArrow ? <ChevronRight size={18} /> : null}
                </li>
              ))}
            </ul>
          </aside>

          {activeCategory && activeCategory.subCategories.length > 0 && (
            <div className="absolute left-full top-0 z-20 ml-2 min-w-[220px] bg-white p-4 shadow-lg">
              <h3 className="mb-3 text-base font-semibold">
                {activeCategory.label}
              </h3>

              <ul className="space-y-3">
                {activeCategory.subCategories.map((subItem, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-sm text-black hover:text-red-500"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative mt-10 max-h-[344px] overflow-hidden bg-black">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {heroSlides.map((slide) => (
              <div key={slide.id} className="w-full shrink-0">
                <div className="grid items-center px-[64px] text-white lg:grid-cols-2">
                  <div className="max-w-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src={slide.logo}
                        alt={slide.brand}
                        className="h-auto w-[55px] max-w-none object-contain"
                      />
                      <p className="text-sm text-white/80">{slide.brand}</p>
                    </div>

                    <h1 className="mt-5 mb-8 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                      {slide.title}
                    </h1>

                    <button
                      type="button"
                      className="inline-flex items-center gap-3 border-b border-white pb-1 text-base font-medium text-white"
                    >
                      <span>{slide.cta}</span>
                    </button>
                  </div>

                  <div className="relative h-[352px] w-full overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute top-4 w-[496px] max-w-none object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-[11px] left-1/2 flex -translate-x-1/2 items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index
                    ? 'bg-red-500 ring-2 ring-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
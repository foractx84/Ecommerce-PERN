import heroCategories from '../../../../mocks/home/heroCategories';
import heroSlides from '../../../../mocks/home/heroSlides';
import { ChevronRight, ArrowRight } from 'lucide-react';

function HeroSection() {
  const activeSlide = heroSlides[0];

  return (
    <section className="pb-16">
      <div className="grid w-full grid-cols-12 gap-8">
        <div className="border-r border-black/10 col-span-12 lg:col-span-3 text-black pt-10">
          <div className="col-span-12 lg:col-span-3">
            <aside className="pr-6">
                <ul className="space-y-4">
                {heroCategories.map((item) => (
                    <li
                    key={item.id}
                    className="flex items-center justify-between text-base text-black"
                    >
                    <span>{item.label}</span>

                    {item.hasArrow ? (
                        <ChevronRight size={18} />
                    ) : null}
                    </li>
                ))}
                </ul>
            </aside>
            </div>
        </div>

        <div className="relative col-span-12 lg:col-span-9 text-black bg-black flex justify-between flex-col mt-10 max-h-[344px]">
            <div className="col-span-12 lg:col-span-9 order-first">
                <div className="bg-black px-[64px] text-white">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="max-w-sm">
                            <img
                                src={activeSlide.logo}
                                alt={activeSlide.brand}
                                className="h-auto w-[55px] max-w-none object-contain inline mr-2"
                            />
                            <p className="mb-5 text-sm text-white/80 inline">
                                {activeSlide.brand}
                            </p>

                            <h1 className="font-['Inter'] mb-8 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                                {activeSlide.title}
                            </h1>

                            <button
                                type="button"
                                className="inline-flex items-center gap-3 border-b border-white pb-1 text-base font-medium text-white"
                            >
                                <span>{activeSlide.cta}</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="relative h-[352px] w-full overflow-hidden">
                            <img
                                src={activeSlide.image}
                                alt={activeSlide.title}
                                className="absolute top-4 max-h-[352px] max-w-[496px] max-w-none object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[11px] left-1/2 flex -translate-x-1/2 items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-white/30"></span>
                <span className="h-3 w-3 rounded-full bg-white/30"></span>
                <span className="h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>
                <span className="h-3 w-3 rounded-full bg-white/30"></span>
                <span className="h-3 w-3 rounded-full bg-white/30"></span>
            </div> 
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
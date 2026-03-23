import heroCategories from '../../../../mocks/home/heroCategories';
import heroSlides from '../../../../mocks/home/heroSlides';
import { ChevronRight, ArrowRight } from 'lucide-react';

function HeroSection() {
  const activeSlide = heroSlides[0];

  return (
    <section className="pb-16 pt-10">
      <div className="mx-auto grid w-full  grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="col-span-12 lg:col-span-3 text-black">
          <div className="col-span-12 lg:col-span-3">
            <aside className="border-r border-black/10 pr-6">
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

        <div className="col-span-12 lg:col-span-9 text-black bg-black flex justify-between flex-col">
            <div className="col-span-12 lg:col-span-9 order-first">
                <div className="rounded bg-black text-white">
                    <div className="col-span-12 lg:col-span-9">
                        <div className="rounded bg-black px-[64px] text-white">
                            <div className="grid items-center gap-8 lg:grid-cols-2">
                                <div className="max-w-sm mt-[58px]">
                                    <img
                                        src={activeSlide.logo}
                                        alt={activeSlide.brand}
                                        className="h-auto w-[40px] object-contain inline mr-2"
                                    />
                                    <p className="mb-5 text-sm text-white/80 inline">
                                        {activeSlide.brand}
                                    </p>

                                    <h1 className="mb-8 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
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
                                <div className="flex justify-center lg:justify-end">
                                    <img
                                        src={activeSlide.image}
                                        alt={activeSlide.title}
                                        className="h-auto max-h-[352px] w-full max-w-md object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-[11px] flex items-center justify-center gap-2 order-last">
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
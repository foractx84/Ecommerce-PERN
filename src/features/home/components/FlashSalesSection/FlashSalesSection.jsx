import { useState, useEffect } from 'react';

import SectionHeader from '../../../../components/ui/SectionHeader';
import flashSales from '../../../../mocks/home/flashSales';
import ProductCard from '../../../../components/common/ProductCard';
import Button from '../../../../components/ui/Button/Button';


function FlashSalesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
  const updateVisibleCards = () => {
    const width = window.innerWidth;

    if (width >= 1760) {
      setVisibleCards(5);
    } else if (width >= 1440) {
      setVisibleCards(4);
    } else if (width >= 1160) {
      setVisibleCards(3);
    } else {
      setVisibleCards(1); // fallback for small screens
    }
  };

  updateVisibleCards(); // run once

  window.addEventListener('resize', updateVisibleCards);

  return () => window.removeEventListener('resize', updateVisibleCards);
}, []);
  
  const cardWidth = 270;
  const gap = 30;
  const maxIndex = Math.max(flashSales.length - visibleCards, 0);
  const translateX = currentIndex * (cardWidth + gap);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  return (
    <section className="py-8">
      <div>
        <SectionHeader
          eyebrow="Today’s"
          title="Flash Sales"
          arrows
          countdownItem
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <div className="overflow-hidden">
          <div
            className="flex gap-[30px] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {flashSales.map((product) => (
              <div
                key={product.id}
                className="min-w-[270px] max-w-[270px] shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
            <Button type="button" mode="text" children={'View All Products'} variant='primary'/>
        </div>
        <div className="mt-16 border-b border-black/10"></div>
      </div>
    </section>
  );
}

export default FlashSalesSection;
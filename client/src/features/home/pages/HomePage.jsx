import HeroSection from '../components/HeroSection/HeroSection';  
import FlashSalesSection from '../components/FlashSalesSection/FlashSalesSection';
import CategoriesSection from '../components/CategoriesSection/CategoriesSection';
import BestSellingSection from '../components/BestSellingSection/BestSellingSection';
import PromoSection from '../components/PromoSection/PromoSection';
import ExploreProductsSection from '../components/ExploreProductsSection/ExploreProductsSection';
import NewArrivalSection from '../components/NewArrivalSection/NewArrivalSection';
import ServiceHighlightsSection from '../components/ServiceHighlightsSection/ServiceHighlightsSection';

function HomePage() {
  return (
    <div>
      <div className="bg-white">
        <HeroSection />
        <FlashSalesSection />
        <CategoriesSection />
        <BestSellingSection />
        <PromoSection />
        <ExploreProductsSection />
        <NewArrivalSection />
        <ServiceHighlightsSection />
      </div>
    </div>
  );
}

export default HomePage;
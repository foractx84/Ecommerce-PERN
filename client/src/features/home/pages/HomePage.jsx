import HeroSection from '../components/HeroSection/HeroSection';  
import FlashSalesSection from '../components/FlashSalesSection/FlashSalesSection';
import CategoriesSection from '../components/CategoriesSection/CategoriesSection';
import BestSellingSection from '../components/BestSellingSection/BestSellingSection';
import PromoSection from '../components/PromoSection/PromoSection';
import ExploreProductsSection from '../components/ExploreProductsSection/ExploreProductsSection';
import NewArrivalSection from '../components/NewArrivalSection/NewArrivalSection';
import ServiceHighlightsSection from '../components/ServiceHighlightsSection/ServiceHighlightsSection';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <div className="bg-white px-[135px]">
        <HeroSection />
        <FlashSalesSection />
        <CategoriesSection />
        <BestSellingSection />
        <PromoSection />
        <ExploreProductsSection />
        <NewArrivalSection />
        <ServiceHighlightsSection />
      </div>
        <Footer />
    </div>
  );
}

export default HomePage;
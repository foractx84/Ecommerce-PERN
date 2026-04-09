import WishlistHeader from '../components/WishlistHeader';
import WishlistGrid from '../components/WishlistGrid';
import RecommendationHeader from '../components/RecommendationHeader';
import RecommendationGrid from '../components/RecommendationGrid';

function WishlistPage() {
  return (
      <section className="mx-auto py-20 lg:px-0">
        <WishlistHeader />
        <WishlistGrid />

        <div className="mt-20">
          <RecommendationHeader />
          <RecommendationGrid />
        </div>
      </section>
  );
}

export default WishlistPage;
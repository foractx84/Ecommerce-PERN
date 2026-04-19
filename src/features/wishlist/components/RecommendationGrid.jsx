import recommendationItems from '../../../mocks/wishlist/recommendations.mock';
import WishlistProductCard from './WishlistProductCard';

function RecommendationGrid() {
  return (
    <div className="mt-15 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {recommendationItems.map((item) => (
        <WishlistProductCard
          key={item.id}
          product={item}
          showRating
          actionIcon="eye"
        />
      ))}
    </div>
  );
}

export default RecommendationGrid;
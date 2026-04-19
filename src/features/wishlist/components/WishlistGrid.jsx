import wishlistItems from '../../../mocks/wishlist/wishlist.mock';
import WishlistProductCard from './WishlistProductCard';

function WishlistGrid() {
  return (
    <div className="mt-15 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {wishlistItems.map((item) => (
        <WishlistProductCard
          key={item.id}
          product={item}
          actionIcon="trash"
        />
      ))}
    </div>
  );
}

export default WishlistGrid;
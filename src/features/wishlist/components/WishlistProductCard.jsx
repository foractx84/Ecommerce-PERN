import { ShoppingCart } from 'lucide-react';
import RatingStars from '../../../components/ui/RatingStars/RatingStars';
import Button from '../../../components/ui/Button/Button';
import Price from '../../../components/ui/Price';

function WishlistProductCard({
  product,
  showRating = false,
  actionIcon = 'trash',
}) {
  return (
    <div>
      <div className="relative overflow-hidden rounded  aspect-square bg-[#f5f5f5] px-6 py-8 flex items-center justify-center">
        {(product.discountPercent || product.badgeText) && (
          <span
            className={`absolute left-3 top-3 rounded px-3 py-1 text-xs font-normal text-white ${
              product.badgeText ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {product.badgeText || `-${product.discountPercent}%`}
          </span>
        )}

        {actionIcon === 'trash' ?  <Button
          type="button"
          className="absolute right-3 top-3"
          mode="icon"
          icon="trash"
          variant="secondary"
          size="sm"
        /> :  <Button
          type="button"
          className="absolute right-3 top-3"
          mode="icon"
          icon="eye"
          variant="secondary"
          size="sm"
        />}

        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-56 object-contain transition-opacity duration-300"
        />

        <button
          type="button"
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-semibold text-center flex w-full items-center justify-center gap-2 bg-black py-2 text-xs hover:opacity-80"
        >
          <ShoppingCart size={14} />
          <span>Add To Cart</span>
        </button>
      </div>

      <div className="mt-4">
        <h3 className="truncate text-base font-medium text-black">
          {product.title}
        </h3>

        <Price price={product.price} oldPrice={product.oldPrice} />

        {showRating && product.rating && (
          <div className="mt-2 flex items-center gap-2">
            <RatingStars rating={product.rating} />
            <span className="text-sm text-black/50">({product.reviewCount})</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistProductCard;
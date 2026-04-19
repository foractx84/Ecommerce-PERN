import formatCurrency from '../../../utils/formatCurrency';
import calculateDiscount from '../../../utils/calculateDiscount';

function Price({ price, oldPrice, discount }) {
  let finalPrice = price;
  let originalPrice = oldPrice;

  // Case: no price, but oldPrice + discount exist
  if (!price && oldPrice && discount) {
    finalPrice = calculateDiscount(oldPrice, discount);
    originalPrice = oldPrice;
  }

  // Case: only price (no oldPrice)
  if (price && !oldPrice) {
    originalPrice = null;
  }

  return (
    <div className="flex items-center gap-3">
      {finalPrice && (
        <span className="text-base font-medium text-red-500">
          {formatCurrency(finalPrice)}
        </span>
      )}

      {originalPrice && originalPrice !== finalPrice && (
        <span className="text-base text-black/50 line-through">
          {formatCurrency(originalPrice)}
        </span>
      )}
    </div>
  );
}

export default Price;
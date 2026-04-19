import { useState } from 'react';
import Button from '../../ui/Button/Button';
import ColorSwatch from '../../ui/ColorSwatch/ColorSwatch';
import Badge from '../../ui/Badge';
import Price from '../../ui/Price';
import RatingStars from '../../ui/RatingStars';

function ProductCard({ product }) {
  // Initialize with first color if available, otherwise null
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.length > 0 ? product.colors[0] : null
  );

  // Get current image based on selected color
  const currentImage = selectedColor?.image || product.image;

  return (
    <article className="group w-full">
      <div className="relative mb-4 rounded bg-[#F5F5F5] p-6 overflow-hidden aspect-square flex items-center justify-center">
        {/* Badge (Discount or NEW) */}
        {product.isNew && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant="success">NEW</Badge>
          </div>
        )}

        {product.discount && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant="danger">-{product.discount}%</Badge>
          </div>
        )}

        {/* Heart & Eye Icons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
          <Button
            type="button"
            className="flex shadow"
            mode="icon"
            icon="heart"
            size="sm"
          />
          <Button
            type="button"
            className="flex shadow"
            mode="icon"
            icon="eye"
            variant="secondary"
            size="sm"
          />
        </div>

        {/* Product Image - Changes when color is selected */}
        <img
          key={currentImage}
          src={currentImage}
          alt={product.title}
          className="h-64 w-64 object-contain transition-opacity duration-300"
        />

        {/* Add To Cart Button - Slides up on hover */}
        <button
          type="button"
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-semibold text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        >
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-base font-medium text-black">
          {product.title}
        </h3>

        <Price price={product.price} oldPrice={product.oldPrice} discount={product.discount} />

        <RatingStars
          rating={product.rating}
          count={product.reviewCount}
        />

        {/* Color Swatches */}
        {product.colors?.length > 0 && (
          <div className="flex items-center gap-3 pt-1">
            {product.colors.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                selected={selectedColor?.code === color.code}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
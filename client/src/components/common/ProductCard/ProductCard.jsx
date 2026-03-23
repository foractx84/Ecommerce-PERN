import Button from '../../ui/Button/Button';
import ColorSwatch from '../../ui/ColorSwatch/ColorSwatch';
import Badge from '../../ui/Badge';
import Price from '../../ui/Price';
import RatingStars from '../../ui/RatingStars';

function ProductCard({ product }) {
  return (
    <article className="w-full">
      <div className="relative mb-4 rounded bg-[#F5F5F5] p-6">
        {(product.discount || product.isNew) && (
          <div className="absolute left-3 top-3">
            {product.discount ? (
              <Badge>-{product.discount}%</Badge>
            ) : (
              <Badge variant="success">NEW</Badge>
            )}
          </div>
        )}

        <div className="absolute right-3 top-3 flex flex-col gap-2">
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
            variant='secondary'
            size="sm"
          />
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-40 w-auto object-contain"
        />
        {product.showAddToCart && (
          <button
            type="button"
            className="absolute bottom-0 left-0 w-full rounded-b bg-black py-3 text-sm font-medium text-white"
          >
            Add To Cart
          </button>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-medium text-black">
          {product.title}
        </h3>

        <Price price={product.price} oldPrice={product.oldPrice} />

        <RatingStars
          rating={product.rating}
          count={product.reviewCount}
        />

        {product.colors?.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            {product.colors.map((color, index) => (
              <ColorSwatch key={index} color={color} selected={true} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
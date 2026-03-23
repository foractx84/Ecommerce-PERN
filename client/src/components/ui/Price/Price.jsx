function Price({ price, oldPrice }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-medium text-red-500">
        ${price}
      </span>

      {oldPrice ? (
        <span className="text-base text-black/50 line-through">
          ${oldPrice}
        </span>
      ) : null}
    </div>
  );
}

export default Price;
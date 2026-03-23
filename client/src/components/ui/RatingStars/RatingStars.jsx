function RatingStars({ rating = 0, count = 0 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'text-[#FFAD33]' : 'text-gray-300'}
          >
            ★
          </span>
        ))}
      </div>

      <span className="text-sm text-black/50">
        ({count})
      </span>
    </div>
  );
}

export default RatingStars;
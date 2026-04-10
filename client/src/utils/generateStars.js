function generateStars(rating, maxStars = 5) {
  const safeRating = Math.max(0, Math.min(rating, maxStars));

  return Array.from({ length: maxStars }, (_, index) => {
    const starNumber = index + 1;

    if (safeRating >= starNumber) {
      return 'full';
    }

    if (safeRating >= starNumber - 0.5) {
      return 'half';
    }

    return 'empty';
  });
}

export default generateStars;
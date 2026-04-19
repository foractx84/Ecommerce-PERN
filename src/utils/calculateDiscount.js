function calculateDiscount(price, discountPercent) {
  if (typeof price !== 'number' || typeof discountPercent !== 'number') {
    return 0;
  }

  const discountAmount = (price * discountPercent) / 100;
  return Math.round(price - discountAmount);
}

export default calculateDiscount;
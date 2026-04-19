function CartTableHeader() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center rounded-[4px] bg-white px-10 py-6 shadow-sm">
      <span className="text-base text-black">Product</span>
      <span className="text-base text-black">Price</span>
      <span className="text-base text-black">Quantity</span>
      <span className="text-right text-base text-black">Subtotal</span>
    </div>
  );
}

export default CartTableHeader;
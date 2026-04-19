import cartItems from '../../../mocks/cart/cart.mock';
import formatCurrency from '../../../utils/formatCurrency';
import Button from '../../../components/ui/Button/Button';

function CartSummary() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="w-full max-w-[470px] rounded-[4px] border border-black p-8">
      <h3 className="text-xl font-medium text-black">Cart Total</h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-b border-black/20 pb-4">
          <span className="text-base text-black">Subtotal:</span>
          <span className="text-base text-black">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-black/20 pb-4">
          <span className="text-base text-black">Shipping:</span>
          <span className="text-base text-black">Free</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base text-black">Total:</span>
          <span className="text-base text-black">
            {formatCurrency(total)}
          </span>
        </div>
      </div>

      <Button
        type="button"
        mode="text"
        variant="primary"
        children={<span>Process to checkout</span>}
        className='mt-4 ml-[75px]'
      />
    </div>
  );
}

export default CartSummary;
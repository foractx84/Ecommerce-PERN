import cartItems from '../../../mocks/cart/cart.mock';
import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';

function CartTable() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px] space-y-10">
        <CartTableHeader />

        <div className="space-y-10">
          {cartItems.map((item) => (
            <CartTableRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartTable;
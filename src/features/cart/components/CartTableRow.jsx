import QuantitySelector from '../../../components/ui/QuantitySelector';
import formatCurrency from '../../../utils/formatCurrency';

function CartTableRow({ item }) {
  const subtotal = item.price * item.quantity;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center rounded-[4px] bg-white px-10 py-6 shadow-sm">
      <div className="flex items-center gap-5">
        <img
          src={item.image}
          alt={item.title}
          className="h-[54px] w-[54px] object-contain"
        />
        <span className="text-base text-black">{item.title}</span>
      </div>

      <span className="text-base text-black">
        {formatCurrency(item.price)}
      </span>

      <div>
        <QuantitySelector value={item.quantity} onChange={() => {}} />
      </div>

      <span className="text-right text-base text-black">
        {formatCurrency(subtotal)}
      </span>
    </div>
  );
}

export default CartTableRow;
import Breadcrumb from '../../../components/common/Breadcrumb';
import CartTable from '../components/CartTable';
import CartActions from '../components/CartActions';
import CouponForm from '../components/CouponForm';
import CartSummary from '../components/CartSummary';

function CartPage() {
  return (
      <section className="mx-auto px-4 py-20 lg:px-0">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Cart' },
          ]}
        />

        <div className="mt-20">
          <CartTable />
        </div>

        <div className="mt-6">
          <CartActions />
        </div>

        <div className="mt-20 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <CouponForm />
          <CartSummary />
        </div>
      </section>
  );
}

export default CartPage;
import SectionHeader from '../../../../components/ui/SectionHeader';
import CountdownItem from '../../../../components/ui/CountdownItem';
import flashSales from '../../../../mocks/home/flashSales';
import ProductCard from '../../../../components/common/ProductCard';
import Button from '../../../../components/ui/Button/Button';

function FlashSalesSection() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Today’s"
          title="Flash Sales"
          arrows
          countdownItem
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flashSales.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <div className="mt-10 flex justify-center">
            <Button type="button" mode="text" children={'View All Products'} variant='primary'/>
        </div>
        <div className="mt-16 border-b border-black/10"></div>
      </div>
    </section>
  );
}

export default FlashSalesSection;
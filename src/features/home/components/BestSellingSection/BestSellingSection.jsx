import bestSelling from '../../../../mocks/home/bestSelling';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ProductCard from '../../../../components/common/ProductCard';

function BestSellingSection() {
  return (
    <section className="py-8">
      <div>
        <SectionHeader
            eyebrow="This Month"
            title="Best Selling Products"
            button
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSelling.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellingSection;
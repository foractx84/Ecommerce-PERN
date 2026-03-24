import ProductCard from '../../../../components/common/ProductCard';
import SectionHeader from '../../../../components/ui/SectionHeader';
import exploreProducts from '../../../../mocks/home/exploreProducts';
import Button from '../../../../components/ui/Button/Button';

function ExploreProductsSection() {
  return (
    <section className="py-8">
      <div>
        <SectionHeader
            eyebrow="Our Products"
            title="Explore Our Products"
            arrows
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
            <Button type="button" mode="text" children={'View All Products'} variant='primary'/>
        </div>
      </div>
    </section>
  );
}

export default ExploreProductsSection;
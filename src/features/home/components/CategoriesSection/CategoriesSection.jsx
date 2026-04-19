import categories from '../../../../mocks/home/categories';
import SectionHeader from '../../../../components/ui/SectionHeader';
import CategoryCard from '../../../../components/common/CategoryCard';

function CategoriesSection() {
  return (
    <section className="py-8">
        <div>
            <SectionHeader
                eyebrow="Categories"
                title="Browse By Category"
                arrows
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        icon={category.icon}
                        title={category.title}
                        active={category.active}
                    />
            ))}
            </div>
            <div className="mt-16 border-b border-black/10"></div>
        </div>
    </section>
  );
}

export default CategoriesSection;
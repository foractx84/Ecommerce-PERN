import promoBanner from '../../../../mocks/home/promoBanner';
import CountdownItem from '../../../../components/ui/CountdownItem';
import Button from '../../../../components/ui/Button/Button';

function PromoSection() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded bg-black px-8 py-10 text-white md:px-12 lg:px-14 lg:py-8 ">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-md">
              <p className="mb-6 text-base font-semibold text-[#00FF66]">
                {promoBanner.category}
              </p>

              <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                {promoBanner.title}
              </h2>

              <CountdownItem days={'05'} hours={'23'} minutes={'59'} seconds={'35'} variant='circle' />

              <Button mode='text' children={"Buy Now!"} variant='green' className='mt-[40px]'/>
            </div>

              <img
                src={promoBanner.image}
                alt={promoBanner.title}
                className="h-auto w-full max-w-xl object-contain"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
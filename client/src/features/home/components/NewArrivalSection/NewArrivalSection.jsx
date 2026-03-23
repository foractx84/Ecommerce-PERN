import SectionHeader from '../../../../components/ui/SectionHeader';
import newArrival from '../../../../mocks/home/newArrival';

function NewArrivalSection() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured"
          title="New Arrival"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[600px] overflow-hidden rounded bg-black p-8 text-white">
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src={newArrival.featured.image}
                alt={newArrival.featured.title}
                className="h-full w-full object-contain pt-10"
              />
            </div>

            <div className="absolute bottom-8 left-8 z-10 max-w-xs">
              <h3 className="mb-3 text-2xl font-semibold">
                {newArrival.featured.title}
              </h3>

              <p className="mb-4 text-sm text-white/80">
                {newArrival.featured.description}
              </p>

              <button
                type="button"
                className="border-b border-white pb-1 text-sm font-medium text-white"
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative min-h-[287px] overflow-hidden rounded bg-black p-8 text-white">
              <div className="absolute inset-0 flex items-end justify-end">
                <img
                  src={newArrival.women.image}
                  alt={newArrival.women.title}
                  className="h-full w-auto object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 z-10 max-w-xs">
                <h3 className="mb-3 text-2xl font-semibold">
                  {newArrival.women.title}
                </h3>

                <p className="mb-4 text-sm text-white/80">
                  {newArrival.women.description}
                </p>

                <button
                  type="button"
                  className="border-b border-white pb-1 text-sm font-medium text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative min-h-[285px] overflow-hidden rounded bg-black p-6 text-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={newArrival.speakers.image}
                    alt={newArrival.speakers.title}
                    className="h-full w-full object-contain p-6"
                  />
                </div>

                <div className="absolute bottom-6 left-6 z-10 max-w-[180px]">
                  <h3 className="mb-2 text-xl font-semibold">
                    {newArrival.speakers.title}
                  </h3>

                  <p className="mb-3 text-sm text-white/80">
                    {newArrival.speakers.description}
                  </p>

                  <button
                    type="button"
                    className="border-b border-white pb-1 text-sm font-medium text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="relative min-h-[285px] overflow-hidden rounded bg-black p-6 text-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={newArrival.perfume.image}
                    alt={newArrival.perfume.title}
                    className="h-full w-full object-contain p-6"
                  />
                </div>

                <div className="absolute bottom-6 left-6 z-10 max-w-[180px]">
                  <h3 className="mb-2 text-xl font-semibold">
                    {newArrival.perfume.title}
                  </h3>

                  <p className="mb-3 text-sm text-white/80">
                    {newArrival.perfume.description}
                  </p>

                  <button
                    type="button"
                    className="border-b border-white pb-1 text-sm font-medium text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivalSection;
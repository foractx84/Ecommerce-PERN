import services from '../../../../mocks/home/services';

function ServiceItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white ring-8 ring-black/10">
        <Icon size={32} strokeWidth={1.8} />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-black">
        {title}
      </h3>

      <p className="text-sm text-black/70">
        {description}
      </p>
    </div>
  );
}

function ServiceHighlightsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceHighlightsSection;
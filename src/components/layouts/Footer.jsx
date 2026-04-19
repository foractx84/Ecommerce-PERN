import footerData from '../../mocks/home/footerData';

function Footer() {
  const SubscribeIcon = footerData.subscribeIcon;

  return (
    <footer className="bg-black text-white px-[135px]">
      <div className="w-full">
        <div className="grid gap-10 py-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              {footerData.brand.logo}
            </h2>

            <h3 className="mb-4 text-xl font-medium">
              {footerData.brand.subscribeTitle}
            </h3>

            <p className="mb-4 text-base text-white/80">
              {footerData.brand.subscribeText}
            </p>

            <div className="flex max-w-xs items-center justify-between rounded border border-white px-4 py-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />

              <button type="button" className="ml-3 shrink-0">
                <SubscribeIcon size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-medium">
              {footerData.support.title}
            </h3>

            <ul className="space-y-4 text-base text-white/80">
              {footerData.support.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-medium">
              {footerData.account.title}
            </h3>

            <ul className="space-y-4 text-base text-white/80">
              {footerData.account.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-medium">
              {footerData.quickLink.title}
            </h3>

            <ul className="space-y-4 text-base text-white/80">
              {footerData.quickLink.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-medium">
              {footerData.downloadApp.title}
            </h3>

            <p className="mb-4 text-sm text-white/60">
              {footerData.downloadApp.note}
            </p>

            <div className="mb-6 flex items-start gap-3 h-[84px]">
              <img
                src="/images/banners/qr.jpg"
                alt="QR Code"
                className="h-[80px] w-[80px] shrink-0 object-cover border-2 border-white rounded"
              />

              <div className="flex flex-col gap-1">
                <button type="button" className="transition hover:opacity-80 w-[104px] h-[30px]">
                  <img
                    src="/images/banners/google-play.png"
                    alt="Google Play"
                    className="block w-full h-full object-contain border border-white/30 rounded"
                  />
                </button>

                <button type="button" className="transition hover:opacity-80 w-[104px] h-[30px]">
                  <img
                    src="/images/banners/app-store.png"
                    alt="App Store"
                    className="block w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {footerData.socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-white transition hover:text-white/70"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
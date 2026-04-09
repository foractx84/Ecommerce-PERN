import LanguageDropdown from "../common/LanguageDropdown";

function TopPromoBar() {
  return (
    <section className="bg-black text-white flex relative w-full min-w-[1000px]">
      <div className="mx-auto flex h-12 items-center justify-between px-4">
        <div className="flex mx-auto items-center gap-[8px]">
          <p className="text-sm font-normal leading-[21px] ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="text-sm font-semibold leading-[24px] underline underline-offset-2"
          >
            ShopNow
          </a>
        </div>
      </div>
      <LanguageDropdown />
    </section>
  );
}

export default TopPromoBar;
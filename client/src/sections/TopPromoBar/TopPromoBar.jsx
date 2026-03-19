import { ChevronDown } from "lucide-react";

function TopPromoBar() {
  return (
    <section className="bg-black text-white flex relative w-full min-w-[1000px]">
      <div className="mx-auto flex h-12 items-center justify-between px-4">
        <div className="flex mx-auto items-center gap-2">
          <p className="font-['Poppins'] text-xs font-normal leading-[18px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="font-['Poppins'] text-xs font-semibold leading-[24px] underline underline-offset-2"
          >
            ShopNow
          </a>
        </div>
      </div>
      <button
        type="button"
        className="flex w-[120px] items-center justify-end gap-1 font-['Poppins'] text-sm font-normal leading-[21px] absolute right-[136px] top-1/2 transform -translate-y-1/2"
      >
        <span>English</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </button>
    </section>
  );
}

export default TopPromoBar;
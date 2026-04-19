import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";

function CouponForm() {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <Input
        type="text" variant="outline"
        placeholder="Coupon Code"
        className=" max-w-[300px]"
      />

      <Button
        type="button" mode="text" variant="primary" children="Apply Coupon"
      />
    </div>
  );
}

export default CouponForm;
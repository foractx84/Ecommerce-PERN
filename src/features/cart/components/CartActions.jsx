import Button from "../../../components/ui/Button/Button";

function CartActions() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button
        type="button"
        mode="text"
        variant="white"
        children="Return To Shop"
      />

      <Button
        type="button"
        mode="text"
        variant="white"
        children="Update Cart"
      />
    </div>
  );
}

export default CartActions;
import Button from "../../../components/ui/Button";

function WishlistHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-xl font-normal text-black">Wishlist (4)</h2>

      <Button
        mode="text" variant="white" children="Move All To Bag"
      />
    </div>
  );
}

export default WishlistHeader;
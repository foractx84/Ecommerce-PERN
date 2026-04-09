import Button from "../../../components/ui/Button";

function RecommendationHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="h-10 w-5 rounded bg-red-500"></span>
        <h2 className="text-xl font-normal text-black">Just For You</h2>
      </div>

      <Button
        mode="text"
        variant="white"
        children="See All"
      />
    </div>
  );
}

export default RecommendationHeader;
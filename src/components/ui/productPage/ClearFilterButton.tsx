import { clearFilters } from "../../../redux/features/product/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn bg-violet-500 text-white hover:bg-violet-600 mt-4"
      onClick={() => dispatch(clearFilters())}
    >
      Clear Filters
    </button>
  );
};

export default ClearFilterButton;

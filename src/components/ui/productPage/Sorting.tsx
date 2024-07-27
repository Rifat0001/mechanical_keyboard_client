import { setSort } from "../../../redux/features/product/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const Sorting = () => {
  const dispatch = useAppDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "asc") {
      dispatch(setSort("priceLowToHigh"));
    } else if (value === "desc") {
      dispatch(setSort("priceHighToLow"));
    } else {
      dispatch(setSort(""));
    }
  };

  return (
    <div className="mt-4">
      <select className="select select-bordered lg:w-auto w-full border-violet-500" onChange={handleSortChange}>
        <option value="">Filter by Price</option>
        <option value="desc">High to Low</option>
        <option value="asc">Low to High</option>
      </select>
    </div>
  );
};

export default Sorting;

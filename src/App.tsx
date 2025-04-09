import { getQuotes } from "./slice/thunks";
import { useAppDispatch } from "./hooks";

export const App = () => {
  const dispatch = useAppDispatch();

  const handleFetch = () => {
    dispatch(getQuotes());
  };

  return (
    <div className="">
      <h1 className="text-center mt-4">Breaking Bad Quotes</h1>
      <button onClick={handleFetch} className="btn btn-primary">
        New Quote
      </button>
    </div>
  );
};

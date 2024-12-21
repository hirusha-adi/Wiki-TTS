import PropTypes from "prop-types";
import { useState } from "react";

const FromUrl = ({ setLookupUrl, setApiResponse }) => {
  const [inputValue, setInputValue] = useState("");

  // for fetching
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSetLookupUrl = () => {
    setLookupUrl(inputValue);
    fetchData(inputValue);
  };

  const fetchData = async (url) => {
    setIsLoading(true);
    setError(null);
    setApiResponse("");

    try {
      const response = await fetch(
        `http://fivefilters.hirusha.xyz/extract.php?images=0&url=${encodeURIComponent(
          url
        )}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.text();
      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearLookupUrl = () => {
    setInputValue("");
    setLookupUrl("");
    setApiResponse("");
    setError(null);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Enter the url here..."
            className="input input-bordered w-full flex-[4_0_100%]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex w-full gap-4">
            <button
              className="btn btn-primary flex-[3_1_auto]"
              onClick={handleSetLookupUrl}
            >
              Search
            </button>
            <button
              className="btn btn-error text-white flex-[1_1_auto]"
              onClick={handleClearLookupUrl}
            >
              Clear
            </button>
          </div>
        </div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </div>
    </>
  );
};

FromUrl.propTypes = {
  lookupUrl: PropTypes.string.isRequired,
  setLookupUrl: PropTypes.func.isRequired,
  setApiResponse: PropTypes.func.isRequired,
};

export { FromUrl };

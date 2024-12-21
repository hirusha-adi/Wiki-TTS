import PropTypes from "prop-types";
import { useState } from "react";

const FromUrl = ({ lookupUrl, setLookupUrl }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSetLookupUrl = () => {
    setLookupUrl(inputValue);
  };

  const handleClearLookupUrl = () => {
    setInputValue("");
    setLookupUrl("");
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
        {lookupUrl}
      </div>
    </>
  );
};

FromUrl.propTypes = {
  lookupUrl: PropTypes.string.isRequired,
  setLookupUrl: PropTypes.func.isRequired,
};

export { FromUrl };

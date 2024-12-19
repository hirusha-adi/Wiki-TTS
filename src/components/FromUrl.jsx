import PropTypes from "prop-types";

const FromUrl = ({ lookupUrl, setLookupUrl }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full flex-[4_0_100%]"
          />
          <div className="flex w-full">
            <button className="btn btn-primary flex-[3_1_auto]">Primary</button>
            <button className="btn btn-error text-white flex-[1_1_auto]">
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FromUrl.propTypes = {
  useUrl: PropTypes.bool.isRequired,
  setUseUrl: PropTypes.func.isRequired,
};

export { FromUrl };

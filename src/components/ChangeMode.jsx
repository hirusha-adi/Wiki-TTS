import PropTypes from "prop-types";

const ChangeMode = ({ useUrl, setUseUrl }) => {
  return (
    <>
      <div className="text-center text-md">Change text mode:</div>
      <div className="flex justify-between items-center mx-10 mt-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="option"
              value="url"
              className="radio checked:bg-blue-500"
              checked={useUrl}
              onChange={() => setUseUrl(true)}
            />
            <span className="label-text ml-2">Use URL</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="option"
              value="text"
              className="radio checked:bg-blue-500"
              checked={!useUrl}
              onChange={() => setUseUrl(false)}
            />
            <span className="label-text ml-2">Custom Text</span>
          </label>
        </div>
      </div>
    </>
  );
};

ChangeMode.propTypes = {
  useUrl: PropTypes.bool.isRequired,
  setUseUrl: PropTypes.func.isRequired,
};

export { ChangeMode };

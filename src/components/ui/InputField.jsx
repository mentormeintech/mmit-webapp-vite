import { PropTypes } from "prop-types";

const InputField = ({
  htmlFor,
  inputType,
  inputLabelText,
  inputPlaceholder,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {inputLabelText}
      </label>
      <input
        type={inputType}
        id={htmlFor}
        className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

InputField.propTypes = {
  htmlFor: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputLabelText: PropTypes.string.isRequired,
};

export default InputField;

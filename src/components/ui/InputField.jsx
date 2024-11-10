import { PropTypes } from "prop-types";

const InputField = ({
  errors,
  pattern,
  htmlFor,
  required,
  onChange,
  inputType,
  inputLabelText,
  inputPlaceholder,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {inputLabelText}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={htmlFor}
        type={inputType}
        pattern={pattern}
        onChange={onChange}
        className={`bg-white border text-gray-900 text-sm rounded-lg ${
          errors
            ? "focus:ring-red-500 border-red-500 focus:border-red-500 bg-red-50"
            : "focus:ring-primary-500 border-gray-200 focus:border-primary-500 "
        } block w-full p-3`}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

InputField.propTypes = {
  errors: PropTypes.object,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  htmlFor: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputLabelText: PropTypes.string.isRequired,
};

export default InputField;

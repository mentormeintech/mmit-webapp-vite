import { useForm, Controller } from "react-hook-form";
import InputField from "./ui/InputField";

const PartnershipForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
      full_name: "",
      company_name: "",
    },
  });
  const onsSubmit = (data) => console.log(data);
  return (
    <section
      id="become-a-partner"
      className="max-4xl mx-auto scroll-smooth scroll-mt-24"
    >
      <h2 className="text-[#FE9B7E] text-[24px] font-[600] mb-3 text-center mt-16">
        Become a Partner
      </h2>
      <div className="max-w-2xl md:mx-auto py-5 mx-4 lg:mb-24 mb-10">
        <form onSubmit={handleSubmit(onsSubmit)}>
          <Controller
            name="full_name"
            control={control}
            rules={{
              required: "The name field is required",
            }}
            render={({ field }) => (
              <InputField
                inputType="text"
                required={true}
                htmlFor="full_name"
                inputLabelText="Name"
                pattern="^[a-zA-Z ]*$"
                onChange={field.onChange}
                errors={errors.full_name}
                inputPlaceholder="Full Name..."
              />
            )}
          />
          {errors.full_name && (
            <p role="alert" className="-mt-2 mb-2 text-sm text-red-500">
              {errors.full_name.message}
            </p>
          )}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "The email field is required",
            }}
            render={({ field }) => (
              <InputField
                htmlFor="email"
                required={true}
                inputType="email"
                errors={errors.email}
                inputLabelText="Email"
                onChange={field.onChange}
                inputPlaceholder="example@gmail.com"
              />
            )}
          />
          {errors.email && (
            <p role="alert" className="-mt-2 mb-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
          <Controller
            name="company_name"
            control={control}
            rules={{
              required: "The company name field is required",
            }}
            render={({ field }) => (
              <InputField
                required={true}
                inputType="text"
                htmlFor="company_name"
                onChange={field.onChange}
                errors={errors.company_name}
                inputLabelText="Company Name"
                inputPlaceholder="mentormeintech..."
              />
            )}
          />
          {errors.company_name && (
            <p role="alert" className="-mt-2 mb-2 text-sm text-red-500">
              {errors.company_name.message}
            </p>
          )}
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  id="message"
                  onChange={field.onChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </>
            )}
          />
          <button
            type="submit"
            className="bg-[#FE9B7E] rounded-[5px] text-white mt-4 w-full font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md flex items-center space-x-3 justify-center py-2.5"
          >
            <span>Join Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default PartnershipForm;

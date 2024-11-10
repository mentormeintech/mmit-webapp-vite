import { useForm, Controller } from "react-hook-form";

import MMITContacts from "./MMITContacts";

import InputField from "./ui/InputField";

const PartnershipForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      message: "",
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
            render={() => (
              <InputField
                inputType="text"
                htmlFor="full_name"
                inputLabelText="Name"
                inputPlaceholder="Full Name..."
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={() => (
              <InputField
                htmlFor="email"
                inputType="email"
                inputLabelText="Email"
                inputPlaceholder="example@gmail.com"
              />
            )}
          />
          <Controller
            name="company_name"
            control={control}
            render={() => (
              <InputField
                inputType="text"
                htmlFor="company_name"
                inputLabelText="Company Name"
                inputPlaceholder="mentormeintech..."
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={() => (
              <>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
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
      {/* <form className="mb-10 px-4">
        <div className="mb-6">
          <label
            className="block text-[20px] mb-1 text-[#000000]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-[52px] bg-transparent border border-[rgba(0,0,0,0.21)] outline-none px-4 rounded-[10px]"
          />
        </div>
        <InputField inputLabelText="Name" inputPlaceholder="Full Name..." />
        <div className="mb-6">
          <label
            className="block text-[20px] mb-1 text-[#000000]"
            htmlFor="mail"
          >
            Email
          </label>
          <input
            type="text"
            id="mail"
            className="w-full h-[52px] bg-transparent border border-[rgba(0,0,0,0.21)] outline-none px-4 rounded-[10px]"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-[20px] mb-1 text-[#000000]"
            htmlFor="company"
          >
            Company name
          </label>
          <input
            type="text"
            id="company"
            className="w-full h-[52px] bg-transparent border border-[rgba(0,0,0,0.21)] outline-none px-4 rounded-[10px]"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-[20px] mb-1 text-[#000000]"
            htmlFor="name"
          >
            Message
          </label>
          <textarea className="resize-none w-full h-[207px] border border-[rgba(0,0,0,0.21)] rounded-[10px] bg-transparent outline-none px-4"></textarea>
        </div>
        <button
          type="submit"
          className="block ml-auto bg-[#FE9B7E] w-[94px] h-[43px] rounded-[5px] text-white"
        >
          Send
        </button>
      </form> */}

      {/* <MMITContacts /> */}
    </section>
  );
};

export default PartnershipForm;

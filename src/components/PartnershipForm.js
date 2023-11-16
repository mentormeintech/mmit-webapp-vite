import MMITContacts from "./MMITContacts";

const PartnershipForm = () => {
	return (
		<section className="bg-[#F6FAFD] w-[49%] shadow-[0px,4px,4px,0px,rgba(0,0,0,0.08)] rounded-[10px] py-12 pl-10">
			<form className="w-[477px] mb-10">
				<h2 className="text-[#FE9B7E] text-[24px] font-[600] mb-7">
					Become a Partner
				</h2>

				<div className="mb-6">
					<label
						className="block text-[20px] mb-1 text-[#000000]"
						htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="w-full h-[52px] bg-transparent border border-[rgba(0,0,0,0.21)] outline-none px-4 rounded-[10px]"
					/>
				</div>

				<div className="mb-6">
					<label
						className="block text-[20px] mb-1 text-[#000000]"
						htmlFor="mail">
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
						htmlFor="company">
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
						htmlFor="name">
						Message
					</label>
					<textarea className="resize-none w-full h-[207px] border border-[rgba(0,0,0,0.21)] rounded-[10px] bg-transparent outline-none px-4"></textarea>
				</div>

				<button
					type="submit"
					className="block ml-auto bg-[#FE9B7E] w-[94px] h-[43px] rounded-[5px] text-white">
					Send
				</button>
			</form>

			<MMITContacts />
		</section>
	);
};

export default PartnershipForm;

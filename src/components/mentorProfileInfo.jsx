import { useState } from 'react'
import { FaToggleOn } from "react-icons/fa"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function MentorProfileInfo(props) {
    const { dashboard, onSubmit } = props
    
    const schema = yup.object().shape({
        years_of_experience: yup.number().typeError('Years of experience should be a number').min(2, 'Years of experience should be at least 2').required('Years of experience is required'),
        // tools: yup.string().required('Tools is required'),
        company: yup.string().required('Company is required'),
        area_of_expertise: yup.string().required('Area of expertise is required'),
        linked_in_url: yup.string().url('LinkedIn URL is invalid').required('LinkedIn url is required'),
        twitter_url: yup.string().url('Twitter URL is invalid').typeError('Twitter url is invalid').required('Twitter url is required'),
        portfolio_url: yup.string().url().optional('Portfolio url is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            years_of_experience: dashboard?.years_of_experience || '',
            // tools: dashboard?.tools || '',
            company: dashboard?.company || '',
            area_of_expertise: dashboard && dashboard?.area_of_expertise && dashboard?.area_of_expertise[0]?.name || '',
            linked_in_url: dashboard?.linked_in_url || '',
            twitter_url: dashboard?.twitter_url || '',
            portfolio_url: dashboard?.portfolio_url || '',
        },
        resolver: yupResolver(schema),
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="w-72">
                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Level of Experience</p>
                        <label htmlFor="years_of_experience" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="years_of_experience"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('years_of_experience', { required: "Year of experience is required", valueAsNumber: true })}
                    />
                    {errors.years_of_experience && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.years_of_experience?.message} {'\n \n'}
                        </span>
                    )}
                </div>

                {/* <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Tools</p>
                        <label htmlFor="tools" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="tools"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('tools', { required: "Tools is a required field" })}
                    />
                    {errors.tools && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.tools?.message || 'This field is required'}
                        </span>
                    )}
                </div> */}

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Company</p>
                        <label htmlFor="company" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="company"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('company', { required: 'Company is a required field' })}
                    />
                    {errors.company && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.company?.message || 'This field is required'}
                        </span>
                    )}
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Role</p>
                        <label htmlFor="role" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        style={{ textTransform: 'capitalize' }}
                        id="area_of_expertise"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('area_of_expertise', { required: true})}
                    />
                    {errors.area_of_expertise && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.area_of_expertise?.message || 'This field is required'}
                        </span>
                    )}
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>LinkedIn Profile</p>
                        <label htmlFor="linkedInUrl" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="linked_in_url"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('linked_in_url', { required: 'LinkedIn URL is a required field' })}
                    />
                    {errors.linked_in_url && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.linked_in_url?.message || 'This field is required'}
                        </span>
                    )}
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Twitter Profile</p>
                        <label htmlFor="twitter_url" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="twitter_url"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('twitter_url', { required: true })}
                    />
                    {errors.twitter_url && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.twitter_url?.message || 'This field is required'}
                        </span>
                    )}
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Portfolio Link</p>
                        <label htmlFor="portfolio_url" className="cursor-pointer">Edit</label>
                    </div>
                    <input
                        type="text"
                        id="portfolio_url"
                        placeholder="N/A"
                        className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3"
                        {...register('portfolio_url', { required: 'Portfolio is a required field' })}
                    />
                    {errors.portfolio_url && (
                        <span className="mt-1 text-xs text-red-500">
                            {errors?.portfolio_url?.message || 'This field is required'}
                        </span>
                    )}
                </div>
            </section>

            <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white" type="submit">
                save
            </button>

            <div className="flex justify-between items-center min-h-32 w-11/12 max-w-[840px] px-12 py-5 bg-[#F9F9F9] rounded-md mt-14">
                <div className="w-4/12">
                    <h5 className="mb-2 font-medium">I want to take a break</h5>
                    <p className="italic text-[12px]">When {"you're"} on a break, members will be unable to book calls with you.</p>
                </div>

                <span className="text-4xl"><FaToggleOn /></span>
            </div>
        </form >
    )
}

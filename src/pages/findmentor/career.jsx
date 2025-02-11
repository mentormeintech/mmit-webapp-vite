import React from 'react'
import DatasetIcon from "@mui/icons-material/Dataset";
import ProductDesign from "../../assets/Product design icon.png";
import ProjectManagement from "../../assets/Project Management.png";
import Frontend from "../../assets/Web Analytics.png";

export default function Career(props) {
    const { careers, filterByCareerType } = props
    return (
        <React.Fragment>
            {careers?.map((career, index) => (
                <div
                    className="mr-5 cursor-pointer capitalize"
                    key={index}
                    onClick={() => filterByCareerType(career._id)}
                >
                    <p className='text-[#454545] text-[.95rem] font-normal'>{career?.name}</p>
                </div>
            ))}
        </React.Fragment>
    )
}

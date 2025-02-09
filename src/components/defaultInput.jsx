import React, { forwardRef } from 'react'

// export default function DefaultInput(props) {
const DefaultInput = forwardRef((props, ref) => {
    return (
        <input
            className="outline-none border-b-[0.02px] w-full border-[#434343] bg-transparent box-shadow-none border-0"
            {...props}
            ref={ref}
        />
    )
})

export default DefaultInput;
import React from 'react'

function TextInput({ placeholder, value, onChange, label }) {
    return (
        <div className="relative inline-block w-full pb-[12px]" >
            <div className="absolute top-[8px] left-[18px] text-[11px] text-[#d5d5d5] w-[100%]" >{label}</div>

            <input
                className={`bg-[#3e404b] pt-[24px] pr-[18px] pb-[12px] pl-[18px] w-full text-white rounded-md`}
                type={"text"}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput

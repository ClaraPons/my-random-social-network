import React from "react";


const Input = ({type, label, value, placeholder, handleChange, name, error, disabled}) => {
    return (
        <section className="flex justify-center py-0.5">
            <div className="py-5 bg-gray-50 px-5 rounded w-[600px]">
                <label className="block mb-2 text-m ">{label}</label>
                <input className={`border border-slate-300 rounded w-[550px] p-1 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500 required:ring-red-2`} type={type} value={value} placeholder={placeholder} onChange={handleChange} name={name} disabled={disabled}/>
                {error && <p>{error}</p>}
            </div>
        </section >
    )
}

export default Input
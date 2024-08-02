import React from "react";

const InputCustom = ({
    labelContent,
    id,
    placeholder,
    name,
    onBlur,
    onChange,
    value,
    error,
    touched,
}) => {
    return (
        <div>
            <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {labelContent}
            </label>
            <input
                type="text"
                value={value}
                // onChange={handleOnchange}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}
            />
            {error && touched ? <p className="text-red-500">{error}</p> : null}
        </div>
    );
};

export default InputCustom;

import React from "react";

const ButtonCustom = ({
    content,
    type = "button",
    onClick,
    bgColor = "bg-blue-500",
    bgHover = "bg-blue-700 ",
}) => {
    return (
        <button
            type={type}
            className={`py-2 my-4  me-4 px-5 text-white rounded-md ${bgColor} hover:${bgHover} `}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default ButtonCustom;

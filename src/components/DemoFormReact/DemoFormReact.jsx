import React, { useState } from "react";

const DemoFormReact = () => {
    const [value, setvalue] = useState({
        hoTen: "",
        email: "",
    });
    console.log(value);
    const handleOnchange = (event) => {
        const id = event.target.id;
        setvalue({ ...value, [id]: event.target.value });
    };
    return (
        <div>
            <h2>Demo Form React ứng dụng lấy from dữ liệu trong REACT</h2>
            <form>
                <div>
                    <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Họ tên:
                    </label>
                    <input
                        type="text"
                        value={value.hoTen}
                        onChange={handleOnchange}
                        id="hoTen"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Vui lòng nhập họ tên"
                    />
                </div>
                <div>
                    <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email:
                    </label>
                    <input
                        type="text"
                        value={value.email}
                        onChange={(e) => {
                            const id = e.target.id;
                            setvalue({ ...value, [id]: e.target.value });
                        }}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Vui lòng nhập email"
                    />
                </div>
            </form>
        </div>
    );
};

export default DemoFormReact;

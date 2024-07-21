import React from "react";
import { useDispatch } from "react-redux";
import { capNhatHoTen } from "../../redux/slices/userSlice";

const DemoRedux = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-200 py-20 ">
            <h2 className="text-xl font-semibold text-center py-3 text-violet-700">
                Demo về xử lí chức năng với Redux Tookkit
            </h2>
            <div className="flex justify-center">
                <label htmlFor="" className="mt-2">
                    Tên người dùng
                </label>
                <input
                    onChange={(event) => {
                        console.log(event.target.value);
                        dispatch(capNhatHoTen(event.target.value));
                    }}
                    type="text"
                    style={{ width: "30%" }}
                    className="border ms-4 w-20 p-2 rounded-md"
                    placeholder="Nhập tên người dùng"
                />
            </div>
        </div>
    );
};

export default DemoRedux;

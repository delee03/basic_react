import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";
import { luaChonUser } from "../../redux/slices/xiNgauSlice";

const XiNgau = () => {
    const dispatch = useDispatch();
    const { xiNgau } = useSelector((state) => state.xiNgauSlice);

    // console.log(xiNgau);
    return (
        <div>
            <div className="xiNgau flex items-center justify-between py-10 px-16 mt-10">
                <button
                    onClick={() => {
                        dispatch(luaChonUser(true));
                    }}
                    className="btn-xiNgau animate__animated animate__pulse animate__infinite animate__delay-1s "
                >
                    Tài
                </button>
                <div className="flex items-center h-max p-3 bg-white rounded-lg">
                    <img
                        src={`./public/lacXiNgau/${xiNgau[0]}.png`}
                        width={75}
                        alt=""
                    />
                    <img
                        src={`./public/lacXiNgau/${xiNgau[1]}.png`}
                        width={75}
                        alt=""
                    />
                    <img
                        src={`./public/lacXiNgau/${xiNgau[2]}.png`}
                        width={75}
                        alt=""
                    />
                </div>
                <button
                    onClick={() => {
                        dispatch(luaChonUser(false));
                    }}
                    className="btn-xiNgau animate__animated animate__pulse animate__infinite animate__delay-1s "
                >
                    Xỉu
                </button>
            </div>
        </div>
    );
};

export default XiNgau;

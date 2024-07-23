import React from "react";
import { useSelector } from "react-redux";

const KetQua = () => {
    const { tongBanThang, tongBanChoi, yourChoice } = useSelector(
        (state) => state.xiNgauSlice
    );

    return (
        <div className="ketQua">
            <p>
                Bạn chọn:{" "}
                <span className="ms-3 text-red-500">
                    {yourChoice ? "Tài" : "Xỉu"}
                </span>{" "}
            </p>
            <p>
                TỔng số bàn thắng:{" "}
                <span className="ms-3 text-violet-500">{tongBanThang}</span>
            </p>
            <p>
                Tổng số ván chơi:{" "}
                <span className="ml-3 text-violet-500">{tongBanChoi}</span>
            </p>
        </div>
    );
};

export default KetQua;

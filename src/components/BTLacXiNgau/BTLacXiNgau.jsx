import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
const BTLacXiNgau = () => {
    return (
        <div className="baiTap2">
            <h2 className="uppercase">Game Đổ Xúc Xắc</h2>
            <XiNgau></XiNgau>
            <KetQua></KetQua>

            <button className="btn-play">Play game</button>
        </div>
    );
};

export default BTLacXiNgau;

//câu lệnh: rafce

import React from "react";

const sinhVien = {
    maSinhVien: 1,
    tenSinhVien: "Nguyễn Văn A",
    lop: "BS12",
    tuoi: 18,
};

const arrMonAn = [
    {
        monAn: "Lẩu Hadilao",
        gia: 10000,
    },
    {
        monAn: "Lẩu Manwah",
        gia: 20000,
    },
    {
        monAn: "Lẩu cay Tứ Xuyên",
        gia: 500000,
    },
];

const styleBtn = "d-block py-2 px-5 bg-pink-600 rounded-lg text-white my-3";

const HeaderDemo = () => {
    return (
        <div className="text-white bg-black p-10 my-3 ">
            <h2 className="h2">Demo Sử dụng CSS trong React</h2>
            <p>Tôi là {sinhVien.tenSinhVien}</p>
            <p>
                {sinhVien.tuoi >= 18
                    ? "Bạn đã trưởng thành"
                    : "Bạn chưa đủ tuổi !"}
            </p>
            <button className={styleBtn} id={sinhVien.lop}>
                Đăng nhập
            </button>

            <button className={styleBtn}>Đăng kí</button>
            {arrMonAn.map((item, index) => {
                return (
                    <>
                        <h3 className="text-green-300 bold">{item.monAn}</h3>
                        <p className="text-red-300">{item.gia}</p>
                    </>
                );
            })}

            <button className={styleBtn}>Đặt món</button>
        </div>
    );
};

export default HeaderDemo;

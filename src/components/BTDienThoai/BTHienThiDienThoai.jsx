import React, { useState } from "react";
import DSDienThoai from "./DSDienThoai";
import CTDienThoai from "./CTDienThoai";

const iphones = [
    {
        name: "iPhone 14 ProMax",
        image: "https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_1_1.jpg",
        screen: 'OLED, 6.1", Super Retina XDR',
        os: "iOS 16",
        front_camera: "12 MP",
        rear_camera: "Chính 12 MP & Phụ 12 MP",
        ram: "4 GB",
        rom: "512 GB",
    },
    {
        name: "iPhone 15 ProMax",
        image: "https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953771684_thumb_iphone_15_pro_didongviet.jpg",
        screen: 'LCD, 6.1", Liquid Retina',
        os: "iOS 16",
        front_camera: "48 MP",
        rear_camera: "Chính 64 MP & Phụ 48 MP",
        ram: "4 GB",
        rom: "1 TB",
    },
    {
        name: "iPhone SE (2020)",
        image: "https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-12-64gb-mau-tim-didongviet.jpg",
        screen: 'LCD, 4.7", Retina HD',
        os: "iOS 13",
        front_camera: "7 MP",
        rear_camera: "12 MP",
        ram: "3 GB",
        rom: "64 GB",
    },
    {
        name: "iPhone 13 Pro",
        image: "https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-512gb-didongviet_1.jpg",
        screen: 'OLED, 6.1", Super Retina XDR',
        os: "iOS 15",
        front_camera: "12 MP",
        rear_camera: "Chính 12 MP & Phụ 12 MP",
        ram: "6 GB",
        rom: "128 GB",
    },
];
const BTHienThiDienThoai = () => {
    //use State
    const [dienThoai, setDienThoai] = useState(iphones[0]);

    function updateDienThoai(selectedIphone) {
        console.log(selectedIphone);
        setDienThoai(selectedIphone);
        //set một cái dienThoai khi onclick bên DSDienThoai
        //dienThoai mới cập nhật truyền state sang CTDienThoai
    }

    return (
        <div>
            <h2 className="text-center text-3xl text-sky-400 font-bold pt-20 pb-10">
                Bài tập hiển thị điện thoại
            </h2>
            <DSDienThoai
                listPhone={iphones}
                title={"Danh sách điện thoại"}
                updateDienThoai={updateDienThoai}
            />
            <CTDienThoai dienThoai={dienThoai} />
        </div>
    );
};

export default BTHienThiDienThoai;

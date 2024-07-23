import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DemoUseEffect = () => {
    const [listShoe, setListShoe] = useState();

    useEffect(() => {
        console.log(
            "Use Effect chạy sau khi giao diện và các biến khởi tạo xuất hiện"
        );
        //lưu ý useEffect chạy 1 lần duy nhất khi component dc khởi tạo
        //xử lí gọi API cho component ở useEffect này;
        //=> test API
        axios({
            method: "GET",
            url: "https://shop.cyberlearn.vn/api/Product",
        })
            .then((res) => {
                // console.log(res.data.content);
                setListShoe(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log("Tôi là component demoUseEffect");
    console.log(listShoe);
    function render() {
        console.log("Tôi là giao diện của demo UseEffect");
        return <h2>BCS 12</h2>;
    }
    return (
        <div>
            {render()}
            <div className="grid grid-cols-4 gap-5 text-center">
                {/* //nếu có dữ liệu thì chạy */}
                {listShoe?.map((item, index) => {
                    return (
                        <div>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full"
                            />
                            <h2>{item.name}</h2>
                            <p className="mb-5">Giá tiền: {item.price}</p>
                            <Link
                                to={`/demo-useEffect-detail/${item.id}`}
                                className="bg-sky-500 text-white py-2 px-5 rounded-lg mt-5"
                            >
                                Xem chi tiết
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DemoUseEffect;

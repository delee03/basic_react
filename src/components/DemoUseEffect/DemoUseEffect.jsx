import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../App";

const DemoUseEffect = () => {
    //gọi tới hooks USE Context để truy cập vào notification contexxt lấy ra các value

    const dataContext = useContext(NotificationContext);

    console.log(dataContext);

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
        dataContext.handleNotification("error", "Hello");
    }, []);
    console.log("Tôi là component demoUseEffect");
    console.log(listShoe);
    function render() {
        console.log("Tôi là giao diện của demo UseEffect");
        return <p>{listShoe && listShoe[0]?.name}</p>;
    }
    const [number, setNumber] = useState("");
    //use Callback đc sử dụng khi chusgn ta cần quản lí 1 function
    //có nên dc render lại khi component re render hay không
    //các tham số trong dependencies của useCallBack giúp thực hiện kiểm tra
    //khi nào thì function đó nên render lại để lấy dữ liệu mới

    const functionCallback = useCallback(render, [listShoe]);

    return (
        <div>
            {/* {render()} */}

            {functionCallback()}
            <input
                type="text"
                placeholder="Vui lòng nhập số bất kì"
                onChange={(event) => {
                    setNumber(event.target.value);
                }}
            />

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

import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const DemoUseEffectDetail = () => {
    const [shoe, setShoe] = useState({}); //tạo 1 object rỗng truyền vào và kết hợp với ? để tránh undefined
    //sử dujg queryParam để search
    const [searchParam, setSearchParam] = useSearchParams();
    const dataGiaTien = searchParam.get("gia");
    const dataHang = searchParam.get("hang");

    console.log(dataHang);

    //shoe.tuoi ==> undefined;

    const { id } = useParams();

    let random = id + Math.floor(Math.random() * 6);
    console.log(random);
    const randomMemmo = useMemo(() => {
        return random;
    }, [id]);

    console.log(id);
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        })
            .then((res) => {
                setShoe(res.data.content);
                // console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    //khai báo id để khi id trong useffect thay đổi sẽ tự động chạy useEffect lại
    console.log(shoe);

    useEffect(() => {
        return () => {
            console.log("Component use effect detail đã bị tắt");
            //tracking thời gian người dùng sử dụng
        };
    });

    return (
        <>
            {/* {randomMemmo} */}
            {random}
            <input
                type="text"
                className="p-2 border-black rounded-md"
                placeholder="Vui lòng nhập hãng yêu thích"
                onChange={(event) => {
                    const dataQuery = Object.fromEntries(searchParam);

                    //object.fromEntries để giải mã các cặp entry : value
                    console.log(dataQuery);

                    //spread operator
                    setSearchParam({
                        ...dataQuery,
                        hang: event.target.value,
                    });
                }}
            />
            <div>
                <h2 className="text-center text-3xl text-pink-400">
                    Demo trang chi tiết sản phẩm
                </h2>
                {shoe && (
                    <div className="flex items-center gap-20">
                        <div className="w-5/12">
                            <img src={shoe.image} alt="" className="w-full" />
                        </div>
                        <div className="w-7/12">
                            <h2 className="text-3xl text-sky-400 uppercase">
                                {shoe.name}
                            </h2>
                            <p className="text-xl my-8">
                                Giá tiền: ${shoe.price}
                            </p>
                            <p className="mb-5">{shoe.shortDescription}</p>
                            <button className="bg-sky-500 px-2 py-5 text-white rounded-lg">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                {/* Sản phẩm liên quan */}
                <h3>Các sản phẩm liên quan</h3>
                {shoe.relatedProducts?.map((item, index) => {
                    return (
                        <div key={index}>
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
        </>
    );
};

export default DemoUseEffectDetail;

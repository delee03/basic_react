import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DemoUseEffectDetail = () => {
    const [shoe, setShoe] = useState();

    //shoe.tuoi ==> undefined;

    const { id } = useParams();
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
    }, []);

    console.log(shoe);

    return (
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
                        <p className="text-xl my-8">Giá tiền: ${shoe.price}</p>
                        <p className="mb-5">{shoe.shortDescription}</p>
                        <button className="bg-sky-500 px-2 py-5 text-white rounded-lg">
                            Mua ngay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoUseEffectDetail;

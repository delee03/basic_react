import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DemoUseEffectDetail = () => {
    const [shoes, setShoe] = useState();
    //shoe.tuoi ==> undefined;

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://shop.cyberlearn.vn/api/Product/getbyid/?id=${id}`,
        })
            .then((res) => {
                console.log(res.data.content);
                setShoe(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(shoes);

    return (
        <div>
            <h2 className="text-center text-3xl text-pink-400">
                Demo trang chi tiết sản phẩm
            </h2>
            <div className="flex">
                <div className="w-4/12">
                    <img src={shoes.image} alt="" className="w-full" />
                </div>
                <div className="w-8/12">
                    <h2>{shoes.name}</h2>
                    <p>{shoes.price}</p>
                    <p>{shoes.shortDescription}</p>
                    <button className="bg-sky-500 px-2 py-5 text-white rounded-lg">
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoUseEffectDetail;

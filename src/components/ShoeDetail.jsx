import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ShoeDetail = () => {
    const params = useParams();
    const location = useLocation();
    console.log(params);
    return (
        <div>
            <h1>Shoe Detail</h1>
            {/* <Link
                className={
                    location.pathname == "/shoe-detail/:id"
                        ? "text-green-500"
                        : "text-black"
                }
            >
                Demo
            </Link> */}
        </div>
    );
};

export default ShoeDetail;

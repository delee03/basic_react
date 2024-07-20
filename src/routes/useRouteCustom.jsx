import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import BaiTapProps1 from "../components/DemoProps/BaiTapProps1";
import BTHienThiDienThoai from "../components/BTDienThoai/BTHienThiDienThoai";
import ShoeDetail from "../components/ShoeDetail";
import { path } from "../common/path";

const useRouteCustom = () => {
    const elements = useRoutes([
        {
            path: path.homePage,
            element: <HomeTemplate />,
            children: [
                {
                    index: true,
                    element: <BaiTapProps1 />,
                },
                {
                    path: path.baiTapDienThoai,
                    element: <BTHienThiDienThoai />,
                },
                {
                    path: `${path.shoeDetail}/:id`,
                    element: <ShoeDetail />,
                },
            ],
        },
        {
            path: "*",
            element: <PageNotFound />,
        },
    ]);
    return elements;
};

export default useRouteCustom;

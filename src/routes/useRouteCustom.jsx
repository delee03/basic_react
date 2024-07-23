import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import BaiTapProps1 from "../components/DemoProps/BaiTapProps1";
import BTHienThiDienThoai from "../components/BTDienThoai/BTHienThiDienThoai";
import ShoeDetail from "../components/ShoeDetail";
import { path } from "../common/path";
import DemoRedux from "../components/DemoRedux/DemoRedux";
import BTLacXiNgau from "../components/BTLacXiNgau/BTLacXiNgau";
import DemoUseEffect from "../components/DemoUseEffect/DemoUseEffect";
import DemoUseEffectDetail from "../components/DemoUseEffect/DemoUseEffectDetail";

//Use Route custom : dùng để tối ưu lại App.jsx nhằm giúp dễ quản lí, và clean code

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
                {
                    path: path.demoRedux,
                    element: <DemoRedux></DemoRedux>,
                },
                {
                    path: path.btXiNgau,
                    element: <BTLacXiNgau />,
                },
                {
                    path: "/demo-useEffect",
                    element: <DemoUseEffect />,
                },
                {
                    path: "/demo-useEffect-detail/:id",
                    element: <DemoUseEffectDetail />,
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

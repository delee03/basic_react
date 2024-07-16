import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BaiTapProps1 from "./components/DemoProps/BaiTapProps1";
import BTHienThiDienThoai from "./components/BTDienThoai/BTHienThiDienThoai";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
    //  * Cách sử dụng và setup React Router DOM
    // * path : endpoint /home ?
    //  * index, element, path trong react router dom
    //  * set up template sử dụng chung cho các trang
    //  * PAGE not found
    //  * lấy dữ liệu param (:id, query param (&nam=""))
    //  * Custom xây dựng cơ chế routing theo hook useRoutes từ react router dom

    return (
        <>
            <Routes>
                {/* path /bai-tap-hien-thi-dt */}
                {/* Bọc layout từ Ant Design nằm trong HomeTemplate */}
                {/* pathTemplate / pathCHildElement */}
                <Route path="/" element={<HomeTemplate></HomeTemplate>}>
                    {/* thuộc tính index xác định 1 component con sẽ hiển thị cùng lúc khi người dùng
                truy cập tới đường dẫn của component cha */}
                    <Route index element={<BaiTapProps1 />} />
                    <Route
                        path="/bai-tap-hien-thi-dt"
                        element={<BTHienThiDienThoai></BTHienThiDienThoai>}
                    ></Route>
                </Route>
                {/* path với giá trị * là các đường dẫn khác với path đã set up */}
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </>
    );
}

export default App;

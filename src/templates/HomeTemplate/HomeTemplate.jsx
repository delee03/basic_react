import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//     key: String(index + 1),
//     label: `nav ${index + 1}`,
// }));
const HomeTemplate = () => {
    //tạo arrNavLink để dễ quản lí thanh header bao gồm to: path từ path.js và content là tên của navlink đó
    const arrNavLink = [
        {
            to: path.homePage,
            content: "Trang chủ",
        },
        {
            to: path.baiTapDienThoai,
            content: "Bài tập hiện thị DT",
        },
        {
            to: path.demoRedux,
            content: "Demo Redux",
        },
        {
            to: path.btXiNgau,
            content: "Chơi xí ngầu",
        },
        {
            to: "/demo-useEffect",
            content: "useEffect",
        },
    ];

    const { hoTen } = useSelector((state) => state.userSlice);
    //state này đại diện cho reducers đến từ store config và lấy ra userSlice

    console.log(hoTen);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="min-h-screen">
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div className="demo-logo" />
                {/* <NavLink
                    className={({ isActive, isPending }) => {
                        return isActive
                            ? "text-red-500"
                            : "text-white font-semibold";
                    }}
                    to={"/"}
                >
                    Trang chủ
                </NavLink> */}

                {/*Thẻ NAV LINK hỗ trợ 1 cái {isActive, isPending} trong classname
                    để kiểm tra biến của to {"..."} và so sánh với URL nếu giống
                    nhau thì sẽ return về true => kiểm tra trạng thái của navlink  */}

                <div>
                    {arrNavLink.map((item, index) => {
                        return (
                            <NavLink
                                className={({ isActive, isPending }) => {
                                    console.log(isActive);
                                    return `mx-4 text-lg ${
                                        isActive
                                            ? "text-red-500 font-semibold "
                                            : "text-white"
                                    }`;
                                }}
                                to={item.to}
                            >
                                {item.content}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="text-white uppercase">{hoTen}</div>
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                /> */}
            </Header>
            <Content
                style={{
                    padding: "30px 48px",
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: "100%",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet></Outlet>
                    {/* Sử dụng thẻ outlet để render dữ liệu body từ các component */}
                </div>
            </Content>
            <Footer
                style={{
                    marginBottom: "0px",
                    textAlign: "center",
                }}
            >
                Copyright ©{new Date().getFullYear()} Repo của Đại Phát
            </Footer>
        </Layout>
    );
};
export default HomeTemplate;

import React from "react";
import { Space, Table, Tag } from "antd";
import ButtonCustom from "./ButtonCustom";

const data = [
    {
        key: "1",
        hoTen: "John Brown",
        email: "john@gmail.com",
        sdt: "0987653234",
        ngaySinh: "03-09-2003",
        gioiTinh: "Nam",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        hoTen: "John Brown",
        email: "john@gmail.com",
        sdt: "0987653234",
        ngaySinh: "23-09-2003",
        gioiTinh: "Nam",
        tags: ["nice", "developer"],
    },
    {
        key: "3",
        hoTen: "Penny Clawrs",
        email: "john@gmail.com",
        sdt: "0987653234",
        ngaySinh: "22-12-2002",
        gioiTinh: "Nữ",
        tags: ["nice", "developer"],
    },
];

const TableNhanVien = ({ data, handleDeleteNV }) => {
    const columns = [
        {
            //tiêu đề các cột
            title: "MSNV",
            //xác định thuộc tính tới lấy dữ liệu
            dataIndex: "msnv",
            key: "msnv",
            //quyết định cấu trúc jsx hiển thị trên giao diện , có 3 tham số là text (nội dung của dataIndex lấy về)
            //record đại diện cho phần tử đang lấy dữ liệu), index (vị trí index của record trong data  )
            // render: (text, record, index) => {
            //     return <button className="bg-red-500">{text}</button>;
            // },
        },
        {
            title: "Họ tên",
            dataIndex: "hoTen",
            key: "hoTen",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Ngày sinh",
            dataIndex: "ngaySinh",
            key: "ngaySinh",
        },
        {
            title: "Số điện thoại",
            dataIndex: "sdt",
            key: "sdt",
        },
        {
            title: "Giới tính",
            key: "gioiTinh",
            dataIndex: "gioiTinh",
            render: (text, record, index) => {
                return (
                    <Tag
                        color={
                            record.gioiTinh === "Nam" ? "volcano" : "geekblue"
                        }
                    >
                        {text}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            render: (text, record, index) => {
                return (
                    <>
                        <ButtonCustom
                            onClick={console.log("first")}
                            className="mb-2"
                            content={"Sửa"}
                            bgColor="bg-yellow-500"
                        ></ButtonCustom>

                        <ButtonCustom
                            content={"Xóa"}
                            onClick={() => handleDeleteNV(record.msnv)}
                            bgColor="bg-red-500"
                        ></ButtonCustom>
                    </>
                );
            },
        },
    ];
    return (
        <div className="mt-10">
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default TableNhanVien;

import React, { useState } from "react";
import { useFormik } from "formik";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ButtonCustom from "./ButtonCustom";
import TableNhanVien from "./TableNhanVien";
const DemoFormReact = () => {
    dayjs.extend(customParseFormat);

    // const [value, setvalue] = useState({
    //     hoTen: "",
    //     email: "",
    // });
    // console.log(value);
    // const handleOnchange = (event) => {
    //     const id = event.target.id;
    //     setvalue({ ...value, [id]: event.target.value });
    // };
    //msnv , họ tên, email, mật khẩu, ngày tháng năm sinh, giới tính, sdt
    //form nhập dữ liệu người dùng thuần, table quản lí nhân viên (antd)

    const [arrNhanVien, setArrNhanVien] = useState([]);

    const formik = useFormik({
        //formik cần name, values = formik khởi tạo để update content, handleChang, handle...
        initialValues: {
            hoTen: "",
            email: "",
            msnv: "",
            sdt: "",
            ngaySinh: "",
            gioiTinh: "",
            matKhau: "",
        },
        //initialValues là dữ liệu mặc định của formik dc cung cấp từ người dùng

        //onSubmit được thực thi khi form bắt đầu chạy sự kiện submit, tham số values đại diện cho dữ liệu của tất cả field trong form
        onSubmit: (values) => {
            console.log(values);
            setArrNhanVien([...arrNhanVien, values]);
        },
    });
    const { handleChange, handleSubmit, values, setFieldValue } = formik;

    return (
        <div>
            <h2>Demo Form React ứng dụng lấy from dữ liệu trong REACT</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                    <InputCustom
                        labelContent={"MSNV"}
                        placeholder={"Vui lòng nhập msnv"}
                        name={"msnv"}
                        id={"msnv"}
                        value={values.msnv}
                        onChange={handleChange}
                    ></InputCustom>
                    <InputCustom
                        labelContent={"Họ tên"}
                        placeholder={"Vui lòng nhập họ tên"}
                        name={"hoTen"}
                        id={"hoTen"}
                        value={values.hoTen}
                        onChange={handleChange}
                    ></InputCustom>
                    <InputCustom
                        labelContent={"Email"}
                        placeholder={"Vui lòng nhập email"}
                        name={"email"}
                        id={"email"}
                        value={values.email}
                        onChange={handleChange}
                    ></InputCustom>
                    <InputCustom
                        labelContent={"Số điện thoại"}
                        placeholder={"Vui lòng nhập sdt"}
                        name={"sdt"}
                        id={"sdt"}
                        value={values.sdt}
                        onChange={handleChange}
                    ></InputCustom>
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Chọn ngày giờ
                        </label>
                        <DatePicker
                            className="w-full"
                            onChange={(date, dateString) => {
                                console.log(date);
                                setFieldValue("ngaySinh", dateString);
                                console.log(dateString);
                            }}
                            format={"DD-MM-YYYY"}
                            // defaultValue={dayjs(value.getDate(), format)}
                            // minDate={dayjs("2024-08-01", format)}
                            // maxDate={dayjs("2024-10-31", format)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Giới tính
                        </label>
                        <select
                            id="countries"
                            name="gioiTinh"
                            onChange={handleChange}
                            value={values.gioiTinh}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        >
                            <option selected>Choose a gender</option>
                            <option value="Nam ">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>

                    <InputCustom
                        labelContent={"Mật khẩu"}
                        placeholder={"Vui lòng nhập mật khẩu"}
                        name={"matKhau"}
                        id={"matKhau"}
                        value={values.matKhau}
                        onChange={handleChange}
                    ></InputCustom>
                </div>
                <div>
                    <ButtonCustom content={"Thêm nhân viên"} type="submit" />

                    <ButtonCustom
                        content={"Reset Form"}
                        bgColor="bg-black"
                        bgHover="bg-slate-700"
                    />
                    <ButtonCustom
                        content={"Cập nhật nhân viên"}
                        bgColor="bg-yellow-400"
                        bgHover="bg-yellow-600"
                    />
                </div>
            </form>
            <TableNhanVien data={arrNhanVien} />
        </div>
    );
};

export default DemoFormReact;

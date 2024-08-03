import React, { useCallback, useContext, useState } from "react";
import { useFormik } from "formik";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ButtonCustom from "./ButtonCustom";
import TableNhanVien from "./TableNhanVien";
import * as yup from "yup";

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
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setArrNhanVien([...arrNhanVien, values]);
            resetForm();
        },
        //yup .object sẽ nhận 1 object chứa thông tin các validation dành
        //cho các field ở initialValue;
        validationSchema: yup.object({
            email: yup
                .string()
                .required("Vui lòng không bỏ trống!")
                .email("Vui lòng nhập đúng định dạng email"),
            hoTen: yup
                .string()
                .required("Vui lòng không bỏ trống!")
                .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Vui lòng nhập chữ không có số"),
            msnv: yup
                .string()
                .required("Vui lòng không bỏ trống")
                .min(4, "Tối thiểu 4 kí tự")
                .max(8, "Tối đa 8 kí tự"),
            sdt: yup
                .string()
                .matches(
                    /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/,
                    "Vui lòng nhập đúng sdt Việt Nam"
                ),
            ngaySinh: yup.string().required("Vui lòng không bỏ trống!"),
            gioiTinh: yup.string().required("Vui lòng chọn giới tính!"),
            matKhau: yup
                .string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    "Vui lòng tạo mật khảu có ít nhất 1 kí tự đặt biệt, 1 số"
                ),
        }),
        //kiểm tra msnv: từ 4-8 kí tự, không bỏ trống
        //sdt: nhập đúng số dt vn(regex)
        //matKhau: bao gồm ít nhất 1 kí tự đặt biệt, 1 chữ hoa, 1 số
        //giới tính : bắt buộc chọn
        //họ tên phải là chữ (regex)
    });
    const {
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
        handleBlur,
        resetForm,
        setValues,
    } = formik;

    // console.log(errors, touched);
    const valueContext = useContext(Notification);
    //tate arrNhanVien) được bọc trong useCallback để tránh tạo ra một hàm mới trong mỗi lần render:
    const deleteNhanVien = useCallback((id) => {
        const arrNhanVienClone = [...arrNhanVien];
        const arrNhanVienUpdate = arrNhanVienClone.filter(
            (nv) => nv.msnv != id
        );
        //không cần kiểm tra index có hay không vì record có mới có nút xóa để click !
        setArrNhanVien(arrNhanVienUpdate);
    });

    //get info đưa lên input sử dụng method setValue từ formik lấy record đưa lên form
    const getInfoNV = () => {};

    const updateNhanVien = () => {
        //sử dụng isValid từ formik để kiểm tra, nếu không còn lỗi thì sẽ cập nhật dữ liệu
    };

    const searchNhanVien = () => {
        //tìm kiếm nhân viên theo hoTen
        //sử dụng filter để lọc ra nhân viên có tên giống với giá trị nhập vào
        //nếu có thì hiển thị thông báo, không thì thông báo không tìm thấy
    };

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
                        error={errors.msnv}
                        touched={touched.msnv}
                        value={values.msnv}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    ></InputCustom>
                    <InputCustom
                        labelContent={"Họ tên"}
                        placeholder={"Vui lòng nhập họ tên"}
                        name={"hoTen"}
                        error={errors.hoTen}
                        touched={touched.hoTen}
                        id={"hoTen"}
                        value={values.hoTen}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    ></InputCustom>
                    <InputCustom
                        labelContent={"Email"}
                        placeholder={"Vui lòng nhập email"}
                        name={"email"}
                        id={"email"}
                        error={errors.email}
                        touched={touched.email}
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                    ></InputCustom>
                    {/* {touched.email && errors.email ? (
                        <p className="text-red-500">{errors.email}</p>
                    ) : null} */}
                    <InputCustom
                        labelContent={"Số điện thoại"}
                        placeholder={"Vui lòng nhập sdt"}
                        name={"sdt"}
                        error={errors.sdt}
                        touched={touched.sdt}
                        id={"sdt"}
                        value={values.sdt}
                        onBlur={handleBlur}
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
                            onBlur={() =>
                                handleBlur({ target: { name: "ngaySinh" } })
                            }
                            format={"DD-MM-YYYY"}
                            // defaultValue={dayjs(value.getDate(), format)}
                            // minDate={dayjs("2024-08-01", format)}
                            // maxDate={dayjs("2024-10-31", format)}
                        />
                        {touched.ngaySinh && errors.ngaySinh ? (
                            <p className="text-red-500">{errors.ngaySinh}</p>
                        ) : null}
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
                        {touched.gioiTinh && errors.gioiTinh ? (
                            <p className="text-red-500">{errors.gioiTinh}</p>
                        ) : null}
                    </div>

                    <InputCustom
                        labelContent={"Mật khẩu"}
                        placeholder={"Vui lòng nhập mật khẩu"}
                        name={"matKhau"}
                        onBlur={handleBlur}
                        error={errors.matKhau}
                        touched={touched.matKhau}
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
                        onClick={() => {
                            resetForm();
                        }}
                        bgHover="bg-slate-700"
                    />
                    <ButtonCustom
                        content={"Cập nhật nhân viên"}
                        bgColor="bg-yellow-400"
                        bgHover="bg-yellow-600"
                    />
                </div>
            </form>
            <TableNhanVien data={arrNhanVien} handleDeleteNV={deleteNhanVien} />
        </div>
    );
};

export default DemoFormReact;

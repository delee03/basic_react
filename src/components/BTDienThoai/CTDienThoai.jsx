import React from "react";

const CTDienThoai = ({ dienThoai }) => {
    return (
        <div className="flex justify-center">
            <div className="w-3/12">
                <img src={dienThoai.image} alt="" />
            </div>
            <div className="w-4/12">
                <h3 className="text-xl font-bold text-sky-500">
                    Thông số kĩ thuật
                </h3>
                <table border={2} cellPadding={10}>
                    <tbody>
                        <tr>
                            <td>Màn hình:</td>
                            <td>{dienThoai.screen}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành:</td>
                            <td>{dienThoai.os}</td>
                        </tr>
                        <tr>
                            <td>Camera trước:</td>
                            <td>{dienThoai.front_camera}</td>
                        </tr>
                        <tr>
                            <td>Camera sau:</td>
                            <td>{dienThoai.rear_camera}</td>
                        </tr>
                        <tr>
                            <td>RAM:</td>
                            <td>{dienThoai.ram}</td>
                        </tr>
                        <tr>
                            <td>ROM:</td>
                            <td>{dienThoai.rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CTDienThoai;

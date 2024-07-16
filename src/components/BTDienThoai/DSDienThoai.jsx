import React from "react";

const DSDienThoai = ({ listPhone, title, updateDienThoai }) => {
    return (
        <>
            {/* Thẻ fragment <> </> dùng hiển thị 2 object HTML trong 1 lệnh return */}
            <h2 className="text-left text-2xl text-sky-400 font-bold pt-20 pb-10">
                {title}
            </h2>
            <div className="grid grid-cols-4 gap-4 py-10">
                {/* nv1: thực hiện sử dụng mảng để render tạo các div item hiển thị dữ liệu điện thoại,
            Các thông tin: hình ảnh, tên, button xem chi tiết onclick */}
                {listPhone.map((iphone, index) => {
                    let { name, image, os } = iphone;
                    // console.log(name);
                    return (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        >
                            <a href="#">
                                <img class="rounded-t-lg" src={image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                        {name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    {os}
                                </p>
                                {/* Trả về ()=> {} để không bị gọi ra khi load trang */}
                                <button
                                    onClick={() => {
                                        updateDienThoai(iphone);
                                    }}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                                >
                                    Xem chi tiết
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DSDienThoai;

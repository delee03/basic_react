import React from "react";

//sử dụng databinding nên k cần gọi hàm bên ngoài onclick
const DemoEvent = () => {
    function chaoMung(hoTen) {
        //phân biệt kĩ khi nào dùng databinding (jsx only) và string template (logic  bình thường)
        alert(`Chào mừng ${hoTen} đã nhập học`);
    }

    return (
        <div className="container">
            <h2 className="text-2xl font-bold">Demo xử lí sự kiện</h2>
            <button
                // onClick={() => {
                //     alert("Bạn đã bấm nút");
                // }}

                onClick={() => {
                    chaoMung("Quang Khải");
                }}
                className="bg-black text-white py-2 px-5 rounded-md"
            >
                Hiển thị câu chào
            </button>

            <label htmlFor="" className="block">
                Họ tên
            </label>

            <input
                type="text"
                placeholder="Vui lòng nhập họ tên"
                className="p-2 border rounded-md block mb-10 w-50"
                onChange={(event) => {
                    event.preventDefault();
                    console.log(event.target.value);
                }}
            />
        </div>
    );
};

export default DemoEvent;

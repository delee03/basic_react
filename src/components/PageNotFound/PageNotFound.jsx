import React from "react";
import Lottie from "lottie-react";
import pagenotfoundAnimation from "../../assets/animation/pagenotfound.json";

const PageNotFound = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <Lottie
                animationData={pagenotfoundAnimation}
                loops
                style={{ width: "800px", height: "500px" }}
                // width={full}
                // height={500}
            />
            <div className="text-center">
                <h2 className="text-2xl text-red-600">
                    Trang web bạn đang tìm kiếm không có!
                </h2>
                <button className="py-2 px-5 bg-red-500 text-xl">
                    <a href="/">Trở về</a>
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;

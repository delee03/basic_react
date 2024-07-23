import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
import "animate.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { playGame } from "../../redux/slices/xiNgauSlice";

const BTLacXiNgau = () => {
    const dispatch = useDispatch();
    const notify = () =>
        toast("😲 Bạn đã chơi xí ngầu Repo Đại Phát!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer />
            <div className="baiTap2">
                <h2 className="uppercase animate__animated animate__tada animate__infinite animate__delay-2s animate__slow ">
                    Game Đổ Xúc Xắc
                </h2>
                <XiNgau></XiNgau>
                <KetQua></KetQua>

                <button
                    onClick={() => {
                        notify();
                        dispatch(playGame());
                    }}
                    className="btn-play animate__animated animate__flash animate__infinite animate__delay-2s animate__slow "
                >
                    Play game
                </button>
            </div>
        </>
    );
};

export default BTLacXiNgau;

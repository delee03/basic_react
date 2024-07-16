/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        //sửa lại các thuộc tính thì dùng trong theme
        //cú pháp:  [tên-class] : {
        //          key: value,
        //          }
        //
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1300px",
            },
        },
        //cấu hình thêm 1 thuộc tính thì dùng extent
        extend: {
            fontSize: {
                title: "40px",
            },
        },
    },
    plugins: [],
};

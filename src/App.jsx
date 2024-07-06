import { useState } from "react";
import HeaderDemo from "./components/HeaderDemo";
import HomeComponent from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import ContentComponent from "./components/ContentComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <HomeComponent></HomeComponent>
            <HeaderDemo></HeaderDemo>
            <div className="grid grid-cols-2 h-30 ">
                <NavComponent></NavComponent>
                <ContentComponent></ContentComponent>
            </div>
        </>
    );
}

export default App;

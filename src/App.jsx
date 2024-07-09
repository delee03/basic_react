import { useState } from "react";
import HeaderDemo from "./components/HeaderDemo";
import HomeComponent from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import ContentComponent from "./components/ContentComponent";
import RenderShoe from "./components/RenderShoe";
import DemoEvent from "./components/DemoEvent";
import DemoCss from "./components/DemoCss/DemoCss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <DemoCss></DemoCss>
            <HomeComponent></HomeComponent>
            <HeaderDemo></HeaderDemo>
            <div className="grid grid-cols-2 h-30 ">
                <NavComponent></NavComponent>
                <ContentComponent></ContentComponent>
            </div>
            <RenderShoe></RenderShoe>
            <DemoEvent></DemoEvent>

            <div className="container">
                <h4 className="demo_sass">Hello bé Ba</h4>
            </div>
        </>
    );
}

export default App;

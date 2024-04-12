import React from "react";
import './Main.css';
import Sidemenu from "../components/Sidemenu";

function Main(){
    return(
        <main>
            <Sidemenu/>
            <div className="banner"></div>
        </main>
    )
}
export default Main;
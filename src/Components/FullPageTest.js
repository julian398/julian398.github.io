import React from "react";
import "../CSS/FullPageTest.css"
import Home from "../Components/page1"
import Studies from "../Components/page2"
import UniPro from "../Components/page3"
import Professional from "../Components/page4"

const FullPageTest = ({CurrentPage}) =>{
    let display;
    switch (CurrentPage){
        case "1":
            display = <Home></Home>;
            break
        case "2":
            display = <Studies></Studies>;
            break
        case "3":
            display = <UniPro></UniPro>;
            break
        case "4":
            display = <Professional></Professional>;
            break
    }
    return(
        <div className="Test">
            <dir className = "Name">Andres Julian Avella <br/> C:/Software Engineer
            {display}
            </dir>
        </div>
    )
}

export default FullPageTest 
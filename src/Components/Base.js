import React, {useState} from "react";
import SideBar from "./SideBar";
import FullPageTest from "./FullPageTest";

const Base = () =>{
    const [CurrentPage, setCurrentPage] = useState("")
    return(
        <div className="Base">
            <SideBar CurrentPage={CurrentPage} setCurrentPage={setCurrentPage}></SideBar>
            <FullPageTest CurrentPage={CurrentPage}></FullPageTest>
        </div>
    )
}

export default Base;
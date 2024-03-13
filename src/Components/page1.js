import React from "react";
import "../CSS/page1.css";
import javaL from "../Elements/Java.png";
import pythonL from "../Elements/Python.png";
import CsharpL from "../Elements/Csharp.png";
import JavaScriL from "../Elements/Javascript.png";
import ReactL from "../Elements/Uses/React.png";
import UnityL from "../Elements/Uses/Unity.png";
import UnrealL from "../Elements/Uses/Unreal.png";
import mySQLL from "../Elements/Uses/mySQL.png";



const page1 = () =>{
    return(
        <div className="title1"> Hi, I'm Julian
            <div className="page1">
                I'm a recently graduated software engineer and developer with one year and a half of experience that requiered knowledge in databases, ETLs, Java, SQL among other concepts <br></br><br/>
                In addition I have some university and personal projects I'd like to showcase, but first I'll mention what languages I know and use:
                <div className="gallery">
                    <div>
                        <img src={javaL} alt=""/>
                        <p>Desktop and DBs</p>
                    </div>
                    <div>
                        <img src={CsharpL} alt=""/>
                        <p>Gamedev</p>
                    </div>
                    <div>
                        <img src={pythonL} alt=""/>
                        <p>BI</p>
                    </div>
                    <div>
                        <img src={JavaScriL} alt=""/>
                        <p>Frontend Dev</p>
                    </div>
                </div>
                <br/>
                And where I've applied these technologies:
                <div className="gallery2">
                    <div>
                        <img src={ReactL} alt=""/>
                        <p>Reactive pages</p>
                    </div>
                    <div>
                        <img src={mySQLL} alt=""/>
                        <p>Databases</p>
                    </div>
                    <div>
                        <img src={UnityL} alt=""/>
                        <p>Personal projects</p>
                    </div>
                    <div>
                        <img src={UnrealL} alt=""/>
                        <p>Gamedev diploma</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default page1
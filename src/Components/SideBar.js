import React from "react";
import Logo from "../Elements/Logo.png"
import Intro from "../Elements/Intro.png"
import Education from "../Elements/Education.png"
import ProjetUni from "../Elements/ProjetUni.png"
import Personal from "../Elements/Personal.png"
import "../CSS/Sidebar.css";


const SideBar = ({CurrentPage,setCurrentPage}) =>{

    const IntroInputHan = (e) =>{
        setCurrentPage("1");
        console.log({CurrentPage})
    };

    const EduInputHan = (e) =>{
        setCurrentPage("2");
        console.log({CurrentPage})
    };

    const UniProjInputHan = (e) =>{
        setCurrentPage("3");
        console.log({CurrentPage})
    };

    const ProfessInputHan = (e) =>{
        setCurrentPage("4");
        console.log({CurrentPage})
    };


    return(
        <div className="main">
            <img src={Logo} alt="Logo" height={100} width={100}></img>
            <ul>
                <li className="Intro"><button onClick={IntroInputHan}>
                    <img src={Intro} alt="Logo"></img><span>Home</span>
                    </button>
                </li>
                <li className="Education"><button onClick={EduInputHan}>
                    <img src={Education} alt="Logo"></img><span>Education</span>
                    </button>
                </li>

                <li className="ProjetUni"><button onClick={UniProjInputHan}>
                    <img src={ProjetUni} alt="Logo"></img><span>Uni Projects</span>
                    </button>
                </li>

                <li className="Personal"><button onClick={ProfessInputHan}>
                    <img src={Personal} alt="Logo"></img><span> Professional</span></button>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
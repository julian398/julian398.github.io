import React from "react";
import "../CSS/page4.css";
import SabanaL from "../Elements/Professional/SabanaL.png";
import VolanteL from "../Elements/Professional/VolanteL.png";

const page4 = () =>{
    return(
        <div className="title4"> This were I have worked prevously
            <div className="page4">
                <div className="galleryPro">
                    <div>
                        <img src={VolanteL} alt=""/>
                        <p>Volante technologies</p>
                        <p className="footnote">Worked from January 2022 to october of that same year, using a custom IDE based on nodes I was asked to modify workflows used in transactions between countries, managing different datatypes and formats to then parce them to the correct outputs, while it was mostly done with nodes some elements required blocks of custom code for uncommon operations</p>
                    </div>
                    <div>
                        <img src={SabanaL} alt=""/>
                        <p>Universidad de la Sabana</p>
                        <p className="footnote">Worked from August 2023 to January 2024, I was part of the database group within the university and the project we were working towards was a dashboard were we could visualize the entrepreneurship of the graduates, this information was inside a series of Excels and I had to do a ETL process for each where after I organized the information correctly I would feed it into ODI ${"("}Oracle data integrator${")"} to integrate the data into the existing database making changes where necesary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page4
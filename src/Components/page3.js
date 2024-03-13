import React from "react";
import "../CSS/page3.css";
import CybeRingB from "../Elements/ProjectU/CyberRingB.png";
import BattleShipB from "../Elements/ProjectU/BattleShipB.jpg";
import SocialShoppng from "../Elements/ProjectU/SocialShoppng.png";

const page3 = () =>{
    return(
        <div className="title3"> This were my projects during university
            <div className="page3">
                <div className="galleryUP">
                    <div>
                        <img src={CybeRingB} alt=""/>
                        <p>Cyber Ring</p>
                        <p className="footnote">Unreal Engine blueprints and git</p>
                    </div>
                    <div>
                        <img src={BattleShipB} alt=""/>
                        <p>Battleships</p>
                        <p className="footnote">React and firebase</p>
                    </div>
                    <div>
                        <img src={SocialShoppng} alt=""/>
                        <p>The social shop</p>
                        <p className="footnote">Front end design with sigma</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page3
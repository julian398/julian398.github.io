import React from "react";
import "../CSS/page2.css"
import Sabana from "../Elements/Sabana.png"
import Adportas from "../Elements/Adportas.png"


const page2 = () =>{
    return(
        <div className="title2"> This is where I studied
            <div className="page2">
                <img src={Sabana} alt="" className="Sabana"/> Started in 2019 and will graduate in May 2024 it has been a long process from taking interest in computers to developing web applications, doing data analysis and workign within the institution helping in database development I've learnt a lot but I'm now ready to take all these skills and use them in whatever lies ahead but also to learn in new eviroments and with more morderm problems
                <br />
                <br />
                <br />
                <img src={Adportas} alt="" className="Adportas"/>The focus of the program was showing us all facests of software, but giving us tools to pick which path we'd like to specialize in, and while I've deloped abilities in web development and Database management I'm still looking for any new oportinuty to expand my knowledge, that's why I'm currently learning Rust and hope to make more prototypes in Unity
                <br />
                <br />
                <br />
                As with any other profession the biggest learning experinces come with real life problems and as such I am ready to join any team to both help with what I already know but also to confront situations that I haven't seen before to learn and improve from them always trying to keep my co-workers in mind as I do so if I need help
            </div>
        </div>
    )
}

export default page2
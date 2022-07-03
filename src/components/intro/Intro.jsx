import './intro.scss';
import {init} from "ityped";
import {useEffect, useRef} from "react";
export default function Intro(){
    const textRef = useRef();

    useEffect(()=>{
        //console.log(textRef)
        init(textRef.current,{
            showCursor: true,
            backDelay: 1500,
            backSpeed:50,
            strings:["Big Data Student","Web Developer","Game Developer","Designer","Freelancer"],
        });
    },[]);
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Maatoug Khalil</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
               
                <a href="#portfolio">
                    <img src="assets/mous.png" alt="" />
                    
                </a>
                
            </div>
        </div>
    )
}
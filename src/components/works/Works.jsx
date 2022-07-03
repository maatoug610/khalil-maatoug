import { useState } from "react";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Dev",
      desc:"I developed many application web static & dynamic for more detail click in the link below.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "2",
      icon: "./assets/game.png",
      title: "Game Dev",
      desc: "I devloped many game using Unity 3D/2D for more detail click in the link below.",
      img:
        "https://th.bing.com/th/id/OIP.-zR_GFyj_7cnNJz_7X991AAAAA?w=156&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: "3",
      icon: "./assets/dashboard.png",
      title: "Data Science",
      desc: "I designed Dashboard visualisation using PowerBI and python for more detail click in the link below.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
  
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="assets\test3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
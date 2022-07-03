import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Protfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import Particles from "react-tsparticles";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Particles
        options={{
          // background: {
          //   color:"#0e387a",
          // },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            },
          },
          particles: {
            color: {
              value : "#9fafca"
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value:400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value:1
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5
              },
              value:1,
            },
          },
        }} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Protfolio/>
        <Works/>
        {/* <Testimonials/> */}
        <Contact />
        
      </div>
    </div>
  );
}

export default App;

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  gamePortfolio,
  formPortfolio,
  dashboardPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "game",
      title: "Game Dev",
    },
    {
      id: "form",
      title: "App Form",
    },
    {
      id: "dashboard",
      title: "Dashboard",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      case "form":
        setData(formPortfolio);
        break;
      case "dashboard":
        setData(dashboardPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./top-bar.scss";
import TopBarItem from "./top-bar-item.jsx";
import { NavLink } from "react-router-dom";

function Header() {
  const topBarItems = [
    {
      header: "Open Hours",
      description: "Mon - Fri, 8:00 - 9:00",
      icon: "flaticon-calendar",
    },
    {
      header: "Call Us",
      description: "+012 345 6789",
      icon: "flaticon-call",
    },
    {
      header: "Email Us",
      description: "info@example.com",
      icon: "flaticon-send-mail",
    },
  ];

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <NavLink to="/">
                <h1>Builderz</h1>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
            <div className="row">
              {topBarItems.map((item, index) => (
                <div key={index} className="col-4">
                  <TopBarItem
                    header={item.header}
                    description={item.description}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

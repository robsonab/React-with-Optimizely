import React, { useState } from "react";
import "./navigation.scss";

function Navigation() {
  const menuItems = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "service.html", label: "Service" },
    { href: "team.html", label: "Team" },
    { href: "portfolio.html", label: "Project" },
    {
      label: "Pages",
      dropdown: true,
      items: [
        { href: "blog.html", label: "Blog Page" },
        { href: "single.html", label: "Single Page" },
      ],
    },
    { href: "contact.html", label: "Contact" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownClick = (event, index) => {
    setOpenDropdown((prevValue) => {
      const closestDiv = event.target.nextElementSibling;

      if (prevValue === index) {
        closestDiv.style.height = "0px";
      } else {
        closestDiv.style.height = `${closestDiv.childElementCount * 45}px`;
        return index;
      }
    });
  };

  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="index.html" className="navbar-brand">
            MENU
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      onClick={(event) => handleDropdownClick(event, index)}
                    >
                      {item.label}
                    </span>
                    <div
                      className={`dropdown-menu ${
                        openDropdown === index ? "show-menu" : ""
                      }`}
                    >
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="dropdown-item"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={index} href={item.href} className="nav-item nav-link">
                    {item.label}
                  </a>
                )
              )}
            </div>
            <div className="ml-auto">
              <a className="btn" href="index.html">
                Get A Quote
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;

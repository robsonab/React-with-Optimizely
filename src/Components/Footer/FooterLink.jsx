import React from "react";

const Social = ({ header, links }) => {
  return (
    <div className="footer-link">
      <h2>{header}</h2>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.description}
        </a>
      ))}
    </div>
  );
};

export default Social;

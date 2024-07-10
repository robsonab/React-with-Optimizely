import React from "react";

const Social = () => {
  const socialLinks = [
    { href: "", icon: "fab fa-twitter" },
    { href: "", icon: "fab fa-facebook-f" },
    { href: "", icon: "fab fa-youtube" },
    { href: "", icon: "fab fa-instagram" },
    { href: "", icon: "fab fa-linkedin-in" },
  ];

  return (
    <div className="footer-social">
      {socialLinks.map((link, index) => (
        <a href={link.href} key={index}>
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;

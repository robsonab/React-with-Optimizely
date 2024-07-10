import React from "react";
import "./footer.scss";
import Social from "./Social";
import FooterLink from "./FooterLink";

const Footer = () => {
  const serviceLinks = [
    { href: "", description: "Building Construction" },
    { href: "", description: "House Renovation" },
    { href: "", description: "Architecture Design" },
    { href: "", description: "Interior Design" },
    { href: "", description: "Painting" },
  ];

  const usefulPageLinks = [
    { href: "", description: "About Us" },
    { href: "", description: "Contact Us" },
    { href: "", description: "Our Team" },
    { href: "", description: "Projects" },
    { href: "", description: "Testimonial" },
  ];
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p>
                <i className="fa fa-map-marker-alt"></i>123 Street, New York,
                USA
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope"></i>info@example.com
              </p>
              <Social />
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <FooterLink header="Services Areas" links={serviceLinks} />
          </div>
          <div className="col-md-6 col-lg-3">
            <FooterLink header="Useful Pages" links={usefulPageLinks} />
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="./index.html">Terms of use</a>
          <a href="./index.html">Privacy policy</a>
          <a href="./index.html">Cookies</a>
          <a href="./index.html">Help</a>
          <a href="./index.html">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="./index.html">Your Site Name</a>, All Right
              Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

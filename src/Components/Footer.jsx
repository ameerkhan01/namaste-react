import React from "react";

const Footer1 = () => {
  return (
    <div className="footer-container">
      <h2 id="logo">Namaste Food</h2>
      <p>2023 Namaste Food limited</p>
    </div>
  );
};

const Footer2 = () => {
  return (
    <div className="footer-container">
      <h3>Company</h3>
      <p>About</p>
      <p>Contact</p>
      <p>Teams</p>
      <p>Careers</p>
      <p>Partner</p>
    </div>
  );
};

const Footer3 = () => {
  return (
    <div className="footer-container">
      <h3>we deliver to</h3>
      <p>Chennai</p>
      <p>Madurai</p>
      <p>Theni</p>
      <p>Namakal</p>
      <p>Erode</p>
      <p>Salem</p>
    </div>
  );
};
const Footer4 = () => {
  return (
    <div className="footer-container">
      <h3>Contact us</h3>
      <p>Help us</p>
      <p>Support</p>
      <p>Call centre</p>
      <p>Partner with us</p>
    </div>
  );
};
const Footer5 = () => {
  return (
    <div className="footer-container">
      <h3>Legal</h3>
      <p>Terms and condition</p>
      <p>Cookie Poilcy</p>
      <p>Privacy Policy</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <Footer5 />
    </div>
  );
};

export default Footer;

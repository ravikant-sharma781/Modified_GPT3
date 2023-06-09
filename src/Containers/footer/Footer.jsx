import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the feature before others.
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          {/* <img src={gptlogo} alt="logo" /> */}
          <h1 className="gpt-3_footer_heading">GPT-3</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Conters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>lorem ipsum 182 AK asdfsd</p>
          <p>2316547852</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

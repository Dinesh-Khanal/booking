import React from "react";
import "./footerEmail.css";

const FooterEmail = () => {
  return (
    <div className="footerEmail">
      <div className="footerEmail__maintxt">Save Time Save Money!</div>
      <div className="footerEmail__subtxt">
        Sign up and we'll send the best deals to you
      </div>
      <form className="footerEmail__form-input">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default FooterEmail;

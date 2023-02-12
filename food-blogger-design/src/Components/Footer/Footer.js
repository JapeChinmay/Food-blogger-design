import React, { Fragment } from "react";
import "../Footer/footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="footer-div">
        <img
          className="logo-footer"
          src={require("../assets/logofooter.png")}
          alt="footer-logo"
        />
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton <br />
            Road, Phartosh Gate near YTM <br />
            Market, XYZ-343434
          </p>
          <p>example2020#gmail.com</p>
          <p>434343412434</p>
        </div>
        <div className="footer-more-list">
          <ul>
            <h3 className="more">More</h3>
            <li>About US</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="social-links">
          <h3 className="heading">Social Links</h3>
          <div>
            <img
              src={require("../assets/instagram.png")}
              alt="instagram-logo"
            />
            <img src={require("../assets/twiiter.png")} alt="twitter-logo" />
            <img src={require("../assets/facebook.png")} alt="facebook-logo" />
          </div>
          <h3 className="copyright-footer">© 2022 Food Truck Example</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;

import React from "react";
import moment from "moment";
import { Link } from "gatsby";

import logo from "../../img/logo.svg";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import { Wrap, Section, Social, Logo } from "../../common-styles";
import { FooterMenu } from "./styles";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Section color="gray">
          <Wrap>
            <FooterMenu>
              <Link to="/" title="Logo">
                <Logo src={logo} alt="Horizon Cycling in St Joseph, MO" />
              </Link>
              <Social>
                <a
                  title="facebook"
                  href="https://www.facebook.com/horizon.cycling/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Horizon Cycling on Facebook" />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/horizoncycling/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Horizon Cycling on Instagram" />
                </a>
              </Social>
            </FooterMenu>
            <p>
              <small>
                &copy; {moment().format("YYYY")} Horizon Cycling. All rights
                reserved. This is a <a href="https://midcoast.io">Midcoast</a>{" "}
                website.
              </small>
            </p>
          </Wrap>
        </Section>

        {/* <ul>
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>
          <li>
            <a
              className="navbar-item"
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Latest Stories
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul> */}
      </footer>
    );
  }
};

export default Footer;

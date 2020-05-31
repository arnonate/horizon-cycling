import React from "react";
import moment from "moment";
import { Link } from "gatsby";

import logo from "../../img/logo_inverse.svg";
import facebook from "../../img/social/facebook_inverse.svg";
import instagram from "../../img/social/instagram_inverse.svg";
import { Wrap, Section, Flex, Social, Logo } from "../../common-styles";
import { Divider, StyledFooter, Copyright } from "./styles";

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Section color="blue">
          <Wrap>
            <Divider />
            <Flex>
              <Link to="/" title="Logo">
                <Logo src={logo} alt="Horizon Cycling in St Joseph, MO" />
              </Link>
              <Social footer>
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
            </Flex>
            <Copyright>
              <small>
                &copy; {moment().format("YYYY")} Horizon Cycling. All rights
                reserved.
                <br />
                Made with ❤️ by{" "}
                <a href="https://midcoast.io">Midcoast Collective</a>.
              </small>
            </Copyright>
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
      </StyledFooter>
    );
  }
};

export default Footer;

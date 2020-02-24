import React from "react";
import { Link } from "gatsby";
import logo from "../../img/logo.svg";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import { Nav, Menu } from "./styles";
import { Wrap, Flex, Logo, Social } from "../../common-styles";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <header>
        <Wrap>
          <Nav role="navigation" aria-label="main-navigation">
            <Flex align="center">
              <Link to="/" title="Logo">
                <Logo src={logo} alt="Horizon Cycling in St Joseph, MO" />
              </Link>

              {/* eslint-disable-next-line */}
              {/* <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div> */}

              <Menu id="navMenu">
                <Link to="/" activeClassName="active">
                  Home
                </Link>
                <Link to="/products" activeClassName="active">
                  Service
                </Link>
                <Link to="/blog" activeClassName="active">
                  Events
                </Link>
                <Link to="/contact" activeClassName="active">
                  Bikes
                </Link>
                <Link to="/contact/examples" activeClassName="active">
                  Teams
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
              </Menu>
            </Flex>
          </Nav>
        </Wrap>
      </header>
    );
  }
};

export default Navbar;

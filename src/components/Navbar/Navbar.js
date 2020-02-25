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

              {/* <Link to="/products" activeClassName="active"> */}
              {/* <Link to="/blog" activeClassName="active"> */}
              {/* <Link to="/contact" activeClassName="active"> */}
              {/* <Link to="/contact/examples" activeClassName="active"> */}

              <Menu id="navMenu">
                <Link to="/" activeClassName="active">
                  Home
                </Link>
                <Link to="/">Service</Link>
                <Link to="/">Events</Link>
                <Link to="/">Bikes</Link>
                <Link to="/">Teams</Link>
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

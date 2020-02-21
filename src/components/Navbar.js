import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import styled from "styled-components";
import { Tokens } from "../tokens";

const Nav = styled.nav`
  max-width: 1200px;
  margin: auto;
  padding: ${Tokens.rhythm} ${Tokens.gutter};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 300px;
`;

const Menu = styled.div`
  display: flex;

  & > * {
    padding: calc(${Tokens.gutter} / 4) calc(${Tokens.gutter} / 2);

    &.active {
      border: 3px solid;
    }
  }

  img {
    width: ${Tokens.font.size.base};
    height: ${Tokens.font.size.base};
  }
`;

const Social = styled.div`
  display: flex;

  & > * + * {
    margin-left: calc(${Tokens.gutter} / 2);
  }
`;

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
      <Nav role="navigation" aria-label="main-navigation">
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
      </Nav>
    );
  }
};

export default Navbar;

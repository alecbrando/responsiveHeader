import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnlink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Future</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={toggle} to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={toggle} to="discover">
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={toggle} to="services">
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={toggle} to="signup">
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnlink to="/sigin">Sign In</NavBtnlink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

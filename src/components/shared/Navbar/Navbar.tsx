import { useState } from "react";

import logo from "../../../assets/logo.png";
import downLine from "../../../assets/down_line.png";
import hamburger from "../../../assets/hamburger.png";
import closeIcon from "../../../assets/close.png";

import {
  NavbarContainer,
  NavContent,
  LeftSection,
  Logo,
  NavLinks,
  NavItem,
  DropdownIcon,
  RightSection,
  SecondaryButton,
  PrimaryButton,
  HamburgerIcon,
  MobileMenu,
  Overlay,
} from "./styles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <NavbarContainer>
        <NavContent>
          <LeftSection>
            <Logo src={logo} alt="Zamda Logo" />
          </LeftSection>

          <NavLinks>
            <NavItem>
              Solutions <DropdownIcon src={downLine} />
            </NavItem>
            <NavItem>Developers</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>Contact Us</NavItem>
          </NavLinks>

          <RightSection>
            <SecondaryButton>Button</SecondaryButton>
            <PrimaryButton>Get Early Access</PrimaryButton>
          </RightSection>

          <HamburgerIcon
            src={isMenuOpen ? closeIcon : hamburger}
            alt="menu"
            onClick={toggleMenu}
          />
        </NavContent>
      </NavbarContainer>

      {isMenuOpen && <Overlay onClick={closeMenu} />}

      <MobileMenu isOpen={isMenuOpen}>
        <NavItem onClick={closeMenu}>
          Solutions <DropdownIcon src={downLine} />
        </NavItem>
        <NavItem onClick={closeMenu}>Developers</NavItem>
        <NavItem onClick={closeMenu}>Pricing</NavItem>
        <NavItem onClick={closeMenu}>Contact Us</NavItem>

        <SecondaryButton>Button</SecondaryButton>
        <PrimaryButton>Get Early Access</PrimaryButton>
      </MobileMenu>
    </>
  );
};

export default Navbar;
import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

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
  DropdownMenu,
  DropdownItem,
  DropdownIcon,
  RightSection,
  // SecondaryButton,
  PrimaryButton,
  HamburgerIcon,
  MobileMenu,
  Overlay,
} from "./styles";

const NavSectionLinks = [
  { id: "for-pharmacies", label: "For Pharmacies" },
  { id: "for-clinicians", label: "For Doctors/Clinicians" },

  { id: "for-patients", label: "For Patients" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState<string>("for-pharmacies");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSolutions = () => setIsSolutionsOpen((prev) => !prev);
  const toggleMobileSolutions = () => setIsMobileSolutionsOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSolution("");
      return;
    }

    const sectionIds = ["for-pharmacies", "for-clinicians", "for-patients"];

    const updateActive = () => {
      const sectionIds = [
        "for-pharmacies",
        "for-clinicians",
        "for-patients",
      ];
    
      let currentId = "";
    
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
    
        if (!section) return;
    
        const rect = section.getBoundingClientRect();
    
        if (rect.top <= 180 && rect.bottom >= 180) {
          currentId = id;
        }
      });
    
      if (currentId) {
        setActiveSolution(currentId);
      }
    };
    updateActive();
    window.addEventListener("scroll", updateActive);
    return () => window.removeEventListener("scroll", updateActive);
  }, [location.pathname]);

  useEffect(() => {
    setIsSolutionsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileSolutionsOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSolutionsOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSolutionsOpen]);

  return (
    <>
      <NavbarContainer>
        <NavContent>
          <LeftSection>
            <Link to="/">
              <Logo src={logo} alt="Zamda Logo" />
            </Link>
          </LeftSection>

          <NavLinks>
            <NavItem ref={dropdownRef}>
              <div onClick={toggleSolutions}>
                Solutions <DropdownIcon src={downLine} />
              </div>

              <DropdownMenu isOpen={isSolutionsOpen}>
                {NavSectionLinks.map((link) => (
                  <DropdownItem
                    key={link.id + link.label}
                    to={`/#${link.id}`}
                    active={activeSolution === link.id}
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {link.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </NavItem>
            <NavItem as={NavLink} to="/developers">Developers</NavItem>
            <NavItem as={NavLink} to="/pricing">Pricing</NavItem>
            <NavItem as={NavLink} to="/contact">Contact Us</NavItem>
          </NavLinks>

          <RightSection>
            {/* <SecondaryButton>Button</SecondaryButton> */}
            <PrimaryButton as={Link} to="/waitlist" className="bounce-top">
              Get Early Access
            </PrimaryButton>
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
        <NavItem onClick={toggleMobileSolutions}>
          <div>Solutions <DropdownIcon src={downLine} /></div>
        </NavItem>
        {isMobileSolutionsOpen && (
          <>
            <NavItem as={Link} to="/#for-pharmacies" onClick={closeMobileMenu} style={{ paddingLeft: "24px", fontSize: "13px" }}>
              For Pharmacies
            </NavItem>
            <NavItem as={Link} to="/#for-clinicians" onClick={closeMobileMenu} style={{ paddingLeft: "24px", fontSize: "13px" }}>
              For Doctors/Clinicians
            </NavItem>
            <NavItem as={Link} to="/#for-patients" onClick={closeMobileMenu} style={{ paddingLeft: "24px", fontSize: "13px" }}>
              For Patients
            </NavItem>
          </>
        )}
        <NavItem as={NavLink} to="/developers" onClick={closeMenu}>
          Developers
        </NavItem>
        <NavItem as={NavLink} to="/pricing" onClick={closeMenu}>
          Pricing
        </NavItem>
        <NavItem as={NavLink} to="/contact" onClick={closeMenu}>
          Contact Us
        </NavItem>

        {/* <SecondaryButton>Button</SecondaryButton> */}
        <PrimaryButton as={Link} to="/waitlist" onClick={closeMenu}>
          Get Early Access
        </PrimaryButton>
      </MobileMenu>
    </>
  );
};

export default Navbar;

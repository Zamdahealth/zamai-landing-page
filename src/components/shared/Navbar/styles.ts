import styled from "styled-components";

/* NAVBAR */
export const NavbarContainer = styled.nav`
  width: 100%;
  background: #FFFFFF;
  border-top: 6px solid #3f3f3f;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;
`;

export const NavContent = styled.div`
  max-width: 1440px;
  height: 72px;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
`;

/* DESKTOP NAV */
export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-left: 90px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  cursor: pointer;
`;

export const DropdownIcon = styled.img`
  width: 12px;
  height: 12px;
`;

/* RIGHT SIDE BUTTONS */
export const RightSection = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SecondaryButton = styled.button`
  width: 148px;
  height: 44px;

  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
`;

export const PrimaryButton = styled.button`
  width: 148px;
  height: 44px;

  border: none;
  background: #012621;
  color: #fff;
  border-radius: 8px;
`;

/* HAMBURGER */
export const HamburgerIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* OVERLAY */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.4);

  z-index: 1500;
`;

/* MOBILE SIDENAV */
export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 60vw;
  height: 100vh;

  background: #fff;

  padding: 100px 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: 0.3s ease-in-out;

  z-index: 2000;

  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);

  @media (min-width: 769px) {
    display: none;
  }
`;
import styled from "styled-components";

/* NAVBAR */
export const NavbarContainer = styled.nav`
  width: 100%;
  background: #ffffff;
  border-top: 6px solid #3f3f3f;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 32px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 110px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 105px;
  }
`;

/* DESKTOP NAV */
export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;

  margin-left: 90px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 20px;
    margin-left: 40px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;

  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  color: #111111;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const DropdownIcon = styled.img`
  width: 12px;
  height: 12px;

  object-fit: contain;
`;

/* RIGHT SIDE BUTTONS */
export const RightSection = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 12px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SecondaryButton = styled.button`
  width: 148px;
  height: 44px;

  border: 1px solid #dddddd;
  border-radius: 8px;

  background: #ffffff;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background: #f8f8f8;
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 130px;
    height: 40px;

    font-size: 13px;
  }
`;

export const PrimaryButton = styled.button`
  width: 148px;
  height: 44px;

  border: none;
  border-radius: 8px;

  background: #012621;
  color: #ffffff;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 130px;
    height: 40px;

    font-size: 13px;
  }
`;

/* HAMBURGER */
export const HamburgerIcon = styled.img`
  width: 28px;
  height: 28px;

  cursor: pointer;

  display: none;

  z-index: 2500;

  /* MOBILE */
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

  background: #ffffff;

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
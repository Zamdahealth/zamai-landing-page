import styled, {    keyframes } from "styled-components";
import { Link } from "react-router-dom";


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

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  padding: 8px 6px;
  z-index: 1200;
`;

export const DropdownItem = styled(Link)<{ active?: boolean }>`
  display: block;
  padding: 10px 14px;
  color: ${({ active }) => (active ? "#022c22" : "#111111")};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: ${({ active }) => (active ? "#eaf6ef" : "transparent")};

  &:hover {
    background: #f6f9f8;
    color: #022c22;
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
  text-decoration: none;

  transition: 0.3s ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;

  position: relative;

  &:hover {
    color: #022c22;
    border-bottom: 2px solid #022c22;
  }

  &.active {
    border-bottom: 2px solid #111111;
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

  transition: all 0.2s ease;

  &:hover {
    background: #f8f8f8;
    border-color: #022c22;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 130px;
    height: 40px;

    font-size: 13px;
  }
`;

const fadeUp = keyframes `
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`

export const PrimaryButton = styled.button`
  width: 148px;
  height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: 8px;

  background: #012621;
  color: #ffffff;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  line-height: 1;
  padding: 0 16px;

  transition: all 0.2s ease;

  &:hover {
    background: #023933;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(1, 38, 33, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 130px;
    height: 40px;

    font-size: 13px;
  }

  &,
  &:link,
  &:visited {
    text-decoration: none;
  }

  animation: ${fadeUp} 0.9s both;


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
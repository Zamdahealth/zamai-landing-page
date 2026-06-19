import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f2faf6 0%, #f9fbfa 100%);
  padding-top: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow: visible; 

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 24px;
    padding: 40px 32px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 600px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 500px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -3%;
  color: #111111;
  margin-bottom: 24px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 48px;
    line-height: 1.1;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    font-size: 38px;
    padding-top: 80px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const DesktopText = styled.span`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileText = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Highlight = styled.span`
  color: #022c22;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #616161;
  letter-spacing: -1.5%;
  line-height: 28px;
  max-width: 520px;
  margin-bottom: 36px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 460px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;

    margin: 0 auto 36px auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 14px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  width: 180px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #022c22;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding: 0;
  line-height: 1;

  &:hover {
    background: #033a30;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(2, 44, 34, 0.25);
  }

  &:active {
    transform: translateY(-1px);
  }

  &,
  &:link,
  &:visited {
    text-decoration: none;
  }

  /* TABLET */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 160px;
    height: 48px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const SecondaryButton = styled.button`
  width: 180px;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

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
    width: 160px;
    height: 48px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const ButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: -75px; 

  @media (min-width: 769px) and (max-width: 1024px) {
    right: -32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    right: -24px;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  max-width: 550px;
  object-fit: contain;
  margin: 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
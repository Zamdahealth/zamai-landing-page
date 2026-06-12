import styled from "styled-components";

export const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 120px 24px 140px;

  background: linear-gradient(180deg, #f2faf6 0%, #f9fbfa 100%);

  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 24px 100px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  position: relative;
  z-index: 2;
`;

export const Heading = styled.h2`
  color: #141414;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 60px;
  leading-trim: NONE;
  line-height: 64px;
  letter-spacing: -3%;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 52px;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const AccentText = styled.span`
  color: #012621;
`;

export const Description = styled.p`
  width: 529px;
  height: 60px;
  angle: 0 deg;
  opacity: 1;

  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: -1.5%;
  text-align: center;

  @media (max-width: 768px) {

  width: 345px;
height: 72px;


    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0.5%;
    text-align: center;
  }
`;

export const BackgroundLine = styled.img`
  position: absolute;

  left: 0;
  bottom: 40px;

  width: 100%;
  height: auto;

  object-fit: cover;

  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

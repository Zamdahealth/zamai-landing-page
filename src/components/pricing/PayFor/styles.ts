import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 24px 100px;
  background: linear-gradient(180deg, #f2faf6 0%, #f9fbfa 100%);
  overflow: hidden;
  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;margin-bottom: 1000px;
`;

export const Heading = styled.h2`
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 60px;
  leading-trim: NONE;
  line-height: 64px;
  letter-spacing: -3%;
  text-align: center;
  color: #141414;

  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 46px;
  }
`;

export const Description = styled.p`
  max-width: 580px;
  margin-top: 18px;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: -1.5%;
  text-align: center;
  color: #616161;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    max-width: 100%;
  }
`;

export const PricingWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BackgroundLine = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  min-width: 1440px;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  pointer-events: none;

  @media (max-width: 768px) {
    min-width: 900px;
  }
`;

export const ToggleContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 6px 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  width: 284px;
  height: 62px;
  border-radius: 100px;
  gap: 34px;
`;

export const ActiveOption = styled.button`
  height: 48px;
  min-width: 110px;

  border: none;
  border-radius: 999px;

  background: #012621;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #023933;
    box-shadow: 0 4px 12px rgba(1, 38, 33, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const InactiveOption = styled.button`
  height: 48px;
  min-width: 120px;

  border: none;
  background: transparent;

  color: #111111;

  font-size: 14px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #022c22;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const SaveBadge = styled.span`
  padding: 4px 8px;

  border-radius: 999px;

  background: #43FFF3;
  color: #003d35;

  font-size: 10px;
  font-weight: 700;
`;

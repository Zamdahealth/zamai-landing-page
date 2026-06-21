import styled, {    keyframes } from "styled-components";


export const SectionContainer = styled.section`
  width: 100%;

  padding: 120px 24px;

  display: flex;
  justify-content: center;

  background: #f9f9fa;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 60px;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 520px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Label = styled.p`
  width: 130px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;

  border-radius: 100px;

  background: #ecfffe;

  color: #0a5f55;

  font-size: 13px;
  font-weight: 500;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;

  line-height: 44px;
  letter-spacing: -3%;

  color: #111111;

  margin-bottom: 12px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;

    text-align: center;
  }
`;

export const DesktopHeading = styled.span`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeading = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Description = styled.p`
  width: 100%;
  max-width: 478px;

  font-size: 18px;
  font-weight: 500;

  color: #616161;

  line-height: 20px;
  letter-spacing: -1.5%;

  margin-bottom: 48px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    text-align: center;

    font-size: 15px;
    line-height: 24px;
  }
`;
export const MobileBreak = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 14px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;

    background: #ffffff;

    padding: 20px 16px;

    border-radius: 16px;
    border: 1px solid #eef0f2;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);

    align-items: center;

    justify-content: flex-start;

    text-align: left;
  }
`;

export const FeatureIcon = styled.img`
  width: 54px;
  height: 45px;

  padding: 8px;

  border-radius: 8px;

  flex-shrink: 0;

  object-fit: contain;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FeatureTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;

  line-height: 28px;
  letter-spacing: -3%;

  color: #222222;

  margin-bottom: 4px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  font-weight: 400;

  line-height: 24px;
  letter-spacing: 0.5%;

  color: #757575;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const RightSection = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const fadeUp = keyframes `
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }


`

export const PharmacyImage = styled.img`
  width: 100%;
  max-width: 620px;

  height: auto;

  object-fit: contain;

  display: block;

  margin-top: 40px;
  animation: ${fadeUp} 0.7s linear infinite both;


  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 480px;
    margin-top: 20px;
  }
`;
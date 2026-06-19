import styled, {    keyframes } from "styled-components";

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
`;

export const SectionContainer = styled.section`
  width: 100%;
  overflow-x: hidden;

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
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 60px;
  flex-wrap: wrap;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

/* LEFT IMAGE */
export const LeftSection = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  /* safer scaling */
  max-width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CliniciansImage = styled.img`
  width: 100%;
  max-width: 620px;
  height: auto;
  animation: ${fadeUp} 0.3s linear infinite both;

  object-fit: contain;
  display: block;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 480px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/* RIGHT CONTENT */
export const RightSection = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 520px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

/* LABEL */
export const Label = styled.p`
  width: fit-content;

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

/* HEADING */
export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;

  line-height: 1.2;

  color: #111111;

  margin-bottom: 12px;

  word-break: break-word;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
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

/* DESCRIPTION */
export const Description = styled.p`
  width: 100%;
  max-width: 500px;

  font-size: 18px;
  font-weight: 500;

  color: #616161;

  line-height: 24px;

  margin-bottom: 48px;

  word-break: break-word;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 15px;
    margin: 0 auto 48px auto;
  }
`;

export const MobileBreak = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* FEATURES */
export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  width: 100%;

  @media (max-width: 768px) {
    max-width: 360px;

    background: #ffffff;
    padding: 20px 16px;

    border-radius: 16px;
    border: 1px solid #eef0f2;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);

    align-items: center;
  }
`;

export const FeatureIcon = styled.img`
  width: 54px;
  height: 45px;

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
  min-width: 0;
`;

export const FeatureTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;

  line-height: 28px;

  color: #222222;

  margin-bottom: 4px;

  word-break: break-word;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  font-weight: 400;

  line-height: 24px;

  color: #757575;

  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;

  padding: 120px 24px;

  display: flex;
  justify-content: center;

  background: #F9F9FA;

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
  font-size: 13px;
  font-weight: 500;
  width: 130px;
  height: 36px;
  color: #0a5f55;
  border-radius: 100px;
  background: #ECFFFE;
  padding: 10px 16px;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
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
    font-size: 42px;
    line-height: 46px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;

    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 478px;
  height: 20px;
  color: #616161;

  line-height: 20px;
  letter-spacing: -1.5%;

  margin-bottom: 48px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    text-align: center;

    font-size: 15px;
    line-height: 24px;
  }
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 14px;
`;

export const FeatureIcon = styled.img`
  width: 54px;
  height: 45px;
  border-radius: 8px;
  flex-shrink: 0;
  padding: 8px;
  gap: 10px;
  object-fit: contain;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;

  line-height: 28px;
  letter-spacing: -3%;
  color: #222222;

  margin-bottom: 4px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
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

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PharmacyImage = styled.img`
  width: 100%;
  max-width: 620px;
  height: 600px;
  margin-top: 100px;

  object-fit: contain;

  display: block;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 480px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
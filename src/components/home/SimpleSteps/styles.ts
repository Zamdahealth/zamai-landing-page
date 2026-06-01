import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;

  background: #012621;

  padding: 70px 24px;

  display: flex;
  justify-content: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 32px;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 32px;
  }
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;

  color: #ffffff;

  line-height: 44px;
  letter-spacing: -3%;

  text-align: center;

  margin-bottom: 12px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 38px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
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

export const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 500;

  color: #dee3e9;

  line-height: 20px;
  letter-spacing: -1.5%;

  text-align: center;

  margin-bottom: 80px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 15px;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media (max-width: 900px) and (min-width: 769px) {
    &:last-child {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
`;

export const Icon = styled.img`
  width: 362.67px;
  height: 48px;

  object-fit: contain;

  margin-bottom: 24px;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 280px;
    height: 44px;
  }


`;

export const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;

  color: #ffffff;

  line-height: 28px;
  letter-spacing: -3%;

  margin-bottom: 16px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5%;
  }
`;

export const StepDescription = styled.p`
  width: 100%;
  max-width: 362px;

  font-size: 16px;
  font-weight: 600;

  color: #dee3e9;

  opacity: 0.8;

  line-height: 24px;
  letter-spacing: 0.5%;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 280px;

    font-size: 14px;

    line-height: 22px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.5%;
    line-height: 24px;
    horizontal-align: center;
  }
`;
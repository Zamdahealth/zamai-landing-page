import styled, { css } from "styled-components";

export const Section = styled.section`
  padding: 120px 80px;
  background: #02241f;
  color: #fff;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 100px 40px;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 24px;
  border-radius: 100px;
  background: #ecfffe;
  color: #201e82;
  font-size: 14px;
  font-weight: 500;
  width: fit-content;

  @media (max-width: 768px) {
    display: block;  
    width: fit-content;    
    margin: 0 auto 24px auto; 
  }
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -3%;
  color: #ffffff;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 38px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  width: 100%;
  max-width: 640px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  color: #dee3e9;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ApiCard = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

export const ApiTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const ApiDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Endpoint = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  background: #012621;
  color: #43fff3;
  font-size: 13px;
  font-weight: 500;
`;

export const CodePreview = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 620px;
    display: block;
    border-radius: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    img {
      max-width: 480px;
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 620px;

  @media (max-width: 768px) {
    align-items: center; 
    max-width: 100%;
  }
`;

interface ButtonProps {
  variant: "outline" | "filled";
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 425px;
  margin-left: 50px;
  height: 64px;
  padding: 22px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ variant }) =>
    variant === "outline"
      ? css`
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
        `
      : css`
          background: #ffffff;
          border: none;
          color: #012621;
        `}

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 360px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    max-width: 260px; 
    margin-left: 0;
    height: 56px;
  }
`;
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 100px 24px;
  background: #f9f9fa;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 70px 24px;
    
  }

  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
    
  @media (max-width: 768px) {
    padding: 70px 24px;display: none;
  }
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -3%;

  color: #111111;

  margin-bottom: 16px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 46px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  max-width: 500px;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1.5%;
  color: #616161;

  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
`;

export const PrimaryButton = styled.button`
  width: 234px;
  height: 64px;

  border: none;
  border-radius: 8px;
  padding: 22px 32px;
  background: #012621;
  color: #ffffff;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  width: 230px;
  height: 64px;

  border: 1px solid #d9d9d9;
  border-radius: 8px;

  background: #ffffff;
  color: #111111;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #fafafa;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonIcon = styled.span`
  margin-right: 10px;
`;
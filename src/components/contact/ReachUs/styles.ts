import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 24px;
  background: #02241f;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 45px;
  leading-trim: NONE;
  line-height: 44px;
  letter-spacing: -3%;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 42px;
  }
`;

export const Description = styled.p`
  color: #dee3e9;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: -1.5%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 36px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 320px;
  min-height: 280px;
  padding: 36px 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 24px;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 28px;
  letter-spacing: -3%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const CardText = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0.25%;
  text-align: center;
  color: #dee3e9;
  margin-bottom: 24px;
`;

export const CardLink = styled.a`
  margin-top: auto;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: 0.5%;
  text-align: center;
  color: #43fff3;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #6bffff;
    transform: translateY(-2px);
  }
`;

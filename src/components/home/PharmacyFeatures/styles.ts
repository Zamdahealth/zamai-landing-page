import styled from "styled-components";

export const FeaturesContainer = styled.section`
  width: 100%;
  padding: 80px 24px;
  background: #F9F9FA;
  display: flex;
  justify-content: center;
`;

export const FeaturesContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 600;
  color: #141414;
  line-height: 44px;
  letter-spacing: -3%;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #616161;
  line-height: 20px;
  letter-spacing: -1.5%;
  max-width: 600px;
  horizontal-align: center;
  margin-bottom: 50px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  padding: 28px;
  text-align: left;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

export const IconWrapper = styled.img`
  width: 56px;
  height: 60px;
  padding: 10px;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #141414;
  margin-bottom: 10px;
  line-height: 28px;
  letter-spacing: -3%;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #616161;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.3%;
`;
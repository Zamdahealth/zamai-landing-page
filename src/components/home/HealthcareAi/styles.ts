import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 80px;
  background: #021b17;
  color: #ffffff;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 100px 40px;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.h2`
  

  font-size: 45px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -3%;

  @media (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }
`;

export const Description = styled.p`
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.7);

  font-size: 18px;
  line-height: 1.7;

  @media (max-width: 768px) {
    
    text-align: center;
  }
`;

export const Highlight = styled.p`
  margin-top: 20px;
  
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    
    text-align: center;
  }
`;

export const StatCard = styled.div`
  padding: 24px;

  border-radius: 16px;

  background: #1D302E;
  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(94, 92, 92, 0.38);
    
  }
`;

export const StatNumber = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -3%;
  margin-bottom: 8px;
`;

export const StatText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5%;
  color: rgba(255, 255, 255, 0.7);
`;

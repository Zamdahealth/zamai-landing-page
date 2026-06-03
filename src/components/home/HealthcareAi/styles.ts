import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 80px;
  background: #021b17;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
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
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Description = styled.p`
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 16px;
`;

export const Highlight = styled.p`
  margin-top: 20px;
  font-weight: 600;
  color: #ffffff;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
`;

export const StatNumber = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const StatText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;
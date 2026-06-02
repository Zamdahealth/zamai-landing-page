import styled from "styled-components";

/* SECTION WRAPPER */
export const Section = styled.section`
  width: 100%;
  padding: 110px 80px;
  background: #f9f9fa;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 90px 40px;
  }

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

/* MAIN WRAPPER */
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
`;

/*TOP ROW (Badge + Heading + Description) */
export const Header = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: #e8fbfa;
  color: #201e82;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;

  width: fit-content;

  @media (max-width: 768px) {
    margin: 0 auto 16px auto;
  }
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -3%;
  color: #141414;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const Description = styled.p`
  margin-top: 12px;
  color: #6b6b6b;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -1.5%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/*BOTTOM GRID (CARDS ONLY) */
export const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD */
export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #eef0f2;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 140px;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 60px;
  gap: 10px;
  angle: 0 deg;
  opacity: 1;
  padding: 10px;
`;

export const CardTitle = styled.h4`
  font-size: 15.5px;
  font-weight: 600;
  color: #111;
  
`;

export const CardText = styled.p`
  font-weight: 400;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5%;
  margin-top: 6px;
  color: #6f6f6f;
`;

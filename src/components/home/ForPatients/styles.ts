import styled, { keyframes, css } from "styled-components";

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

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
`;

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
`;

export const Heading = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 44px;
  color: #141414;
`;

export const Description = styled.p`
  margin-top: 12px;
  color: #6b6b6b;
  font-size: 18px;
`;

/* GRID */
export const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ANIMATIONS */
const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* CARD */
export const Card = styled.div<{
  $visible: boolean;
  $delay: number;
  $direction: "left" | "right";
}>`
  background: #ffffff;
  border: 1px solid #eef0f2;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 140px;

  opacity: 0;
  transform: translateY(20px);

  ${({ $visible, $delay, $direction }) =>
    $visible &&
    css`
      animation: ${$direction === "left" ? slideLeft : slideRight}
        0.8s ease-out forwards;
      animation-delay: ${$delay}s;
    `}

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 60px;
  padding: 10px;
`;

export const CardTitle = styled.h4`
  font-size: 15.5px;
  font-weight: 600;
  color: #111;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #6f6f6f;
  line-height: 24px;
  margin-top: 6px;
`;
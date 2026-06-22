import styled, { keyframes, css } from "styled-components";

export const FeaturesContainer = styled.section`
  width: 100%;
  padding: 80px 24px;
  background: #f9f9fa;
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
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #616161;
  max-width: 600px;
  margin-bottom: 50px;
`;

/* GRID */
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ANIMATIONS */
const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* CARD (FIXED VERSION) */
export const Card = styled.div<{ $visible: boolean; $delay: number }>`
  background: #ffffff;
  border-radius: 16px;
  padding: 28px;
  text-align: left;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);

  /* hidden by default */
  opacity: 0;
  transform: translateY(20px);

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${$delay % 0.3 === 0
          ? slideFromLeft
          : slideFromRight}
        0.8s ease-out forwards;

      animation-delay: ${$delay}s;
    `}

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const IconWrapper = styled.img`
  width: 56px;
  height: 60px;
  padding: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #141414;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #616161;
  line-height: 24px;
`;
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 24px;
  background: #F9F9FA;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
`;

export const Heading = styled.h2`
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 45px;
  leading-trim: NONE;
  line-height: 44px;
  letter-spacing: -3%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const Description = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: -1.5%;
  text-align: center;
  color: #616161;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FaqList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FaqItem = styled.div`
  background: #FFFFFF;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  overflow: hidden;
`;

export const QuestionRow = styled.button`
  width: 100%;
  padding: 24px 28px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }

  &:active {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Question = styled.h4`
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 28px;
  letter-spacing: -3%;
  color: #141414;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex-shrink: 0;
`;

interface AnswerProps {
  isOpen: boolean;
}

export const Answer = styled.div<AnswerProps>`
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  overflow: hidden;

  transition: all 0.3s ease;

  padding: ${({ isOpen }) => (isOpen ? "0 28px 24px" : "0 28px")};

  @media (max-width: 768px) {
    padding: ${({ isOpen }) => (isOpen ? "0 20px 20px" : "0 20px")};
  }
`;

export const AnswerText = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: 0.5%;
  color: #616161;
`;

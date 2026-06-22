import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 120px 24px 80px;
  background: #f8f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 100px 20px 60px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 700;
  color: #012621;
  text-align: center;
  margin-bottom: 18px;
`;

export const Subtitle = styled.p`
  max-width: 650px;
  margin: 0 auto 50px;

  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 36px;
  }
`;

export const FormCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 36px;

  box-shadow:
    0px 20px 50px rgba(0, 0, 0, 0.06),
    0px 8px 24px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;

  font-size: 0.95rem;
  font-weight: 600;
  color: #0f2b25;
`;

const fieldStyles = `
  width: 100%;
  border: 1px solid #dfe5e4;
  border-radius: 14px;

  background: #fafbfb;

  padding: 14px 16px;

  font-size: 1rem;
  color: #111;

  outline: none;

  transition: all 0.25s ease;

  &:focus {
    border-color: #0d584c;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(1, 38, 33, 0.08);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Input = styled.input`
  ${fieldStyles}
  height: 54px;
`;

export const TextArea = styled.textarea`
  ${fieldStyles}

  min-height: 150px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;

  border: none;
  border-radius: 14px;

  background: #012621;
  color: #ffffff;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: #02352e;
    box-shadow: 0 12px 24px rgba(1, 38, 33, 0.18);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 10px;
  padding: 14px 18px;

  border-radius: 12px;

  background: rgba(15, 124, 91, 0.08);
  border: 1px solid rgba(15, 124, 91, 0.2);

  color: #0f7c5b;
  font-weight: 600;
  text-align: center;
`;
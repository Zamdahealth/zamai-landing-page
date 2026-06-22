import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 24px;
  background: #f8f9f9;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

/* CONTAINER */
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 420px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Heading = styled.h2`
 
font-weight: 600;
font-style: Semi Bold;
font-size: 32px;
leading-trim: NONE;
line-height: 40px;
letter-spacing: -3%;

  color: #141414;

  @media (max-width: 768px) {
   
font-size: 26px;
text-align: center;

  }
`;

export const Description = styled.p`
  margin-top: 12px;

font-weight: 400;
font-style: Regular;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0.5%;

  color: #141414;

  @media (max-width: 768px) {
text-align: center;

    max-width: 100%;
  }
`;

export const InquiryList = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InquiryCard = styled.div<{ active?: boolean }>`
  height: 82px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  background: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  border: ${({ active }) =>
    active ? "1px solid #9ca3af" : "1px solid #ececec"};

  &:hover {
    border-color: #022c22;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: #fafafa;
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 4px 16px rgba(2, 44, 34, 0.12);
      background: #F1F5F5;
    `}
`;

export const InquiryIcon = styled.img`
  width: 42px;
  height: 42px;
`;

export const InquiryContent = styled.div``;

export const InquiryTitle = styled.h4`

font-weight: 600;
font-style: Semi Bold;
font-size: 22px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: -3%;

  color: #3B3B3B;
`;

export const InquiryText = styled.p`
  margin-top: 4px;
font-weight: 400;
font-style: Regular;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0.5%;

  color: #3B3B3B;
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const FormCard = styled.div`
  width: 100%;
  background: #FFFFFF;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const FormTitle = styled.h3`
  
font-weight: 600;
font-style: Semi Bold;
font-size: 28px;
leading-trim: NONE;
line-height: 36px;
letter-spacing: -3%;

  color: #141414;
`;

export const FormDescription = styled.p`
  margin-top: 8px;
font-weight: 400;
font-style: Regular;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0.5%;

  color: #141414;
`;

export const Form = styled.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  
font-weight: 500;
font-style: Medium;
font-size: 14px;
leading-trim: NONE;
line-height: 20px;
letter-spacing: 0.1%;

  color: #141414;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 14px;
  background: #F9F9FA;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #022c22;
    background: #f5f5f5;
  }

  &:focus {
    border-color: #022c22;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(2, 44, 34, 0.1);
  }
`;

export const PhoneField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #F9F9FA;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #022c22;
    background: #f5f5f5;
  }

  &:focus-within {
    border-color: #022c22;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(2, 44, 34, 0.1);
  }
`;

export const CountryCodeBox = styled.div`
  position: relative;
  width: 75px;
  height: 60%;
  border-radius: 6px;
  margin-left: 4px;
  background: #dee3e9;
  display: flex;
  align-items: center;

  border-right: 1px solid #e5e7eb;
`;

export const CountrySelect = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  padding: 0 28px 0 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const CountryDropdownIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  pointer-events: none;
`;

export const PhoneInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 14px;
  font-size: 14px;
  background: transparent;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 0 40px 0 14px;
  appearance: none;
  outline: none;
  font-size: 14px;
  background: #F9F9FA;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #022c22;
    background: #f5f5f5;
  }

  &:focus {
    border-color: #022c22;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(2, 44, 34, 0.1);
  }
`;

export const SelectIcon = styled.img`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  resize: none;
  outline: none;
  font-size: 14px;
  background: #F9F9FA;
  transition: all 0.2s ease;

  &:hover {
    border-color: #022c22;
    background: #f5f5f5;
  }

  &:focus {
    border-color: #022c22;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(2, 44, 34, 0.1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  background: #012621;
  color: #F9F9FA;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #023933;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(1, 38, 33, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

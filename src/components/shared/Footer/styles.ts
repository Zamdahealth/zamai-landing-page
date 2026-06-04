import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  height: 380px;
  background: #02241f;

  padding: 54px 64px;
  gap: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  padding: 44px 24px;

  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BrandColumn = styled.div`
  max-width: 250px;
`;

export const Logo = styled.img`
  width: 120px;
  object-fit: contain;
`;

export const Tagline = styled.p`
  margin-top: 20px;
  width: 227;
  height: 48;
  angle: 0 deg;
  opacity: 1;

  color: #ffffff;
  line-height: 24px;
  letter-spacing: 0.5%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const SocialIcon = styled.img`
  width: 47px;
  height: 47px;
  gap: 5px;
  angle: 0 deg;
  opacity: 1;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  color: #ffffff;

  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -3%;
  margin-bottom: 24px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5%;
  margin-bottom: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

export const ContactText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5%;

  margin-bottom: 16px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 48px 0 24px;

  background: rgba(255, 255, 255, 0.15);
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Copyright = styled.p`
  width: 318px;
  height: 20px;
  angle: 0 deg;
  opacity: 1;

  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25%;
`;

export const BottomLinks = styled.div`
  display: flex;
  gap: 32px;
  width: 318px;
  height: 20px;
  angle: 0 deg;
  opacity: 1;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

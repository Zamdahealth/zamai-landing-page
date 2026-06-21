import logo from "../../../assets/logo.png";
import instagram from "../../../assets/instagram.png";
import xIcon from "../../../assets/X.png";
import tiktok from "../../../assets/tiktok.png";

import {
  FooterSection,
  Container,
  TopSection,
  BottomSection,
  BrandColumn,
  Logo,
  Tagline,
  SocialIcons,
  SocialIcon,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  ContactText,
  Divider,
  Copyright,
  BottomLinks,
} from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <TopSection>
          <BrandColumn>
            <Logo src={logo} alt="Zamda AI" />

            <Tagline>
              The AI Health Assistant for
              <br />
              Africa and the World.
            </Tagline>

            <SocialIcons>
              <SocialIcon src={instagram} alt="Instagram" />
              <SocialIcon src={xIcon} alt="X" />
              <SocialIcon src={tiktok} alt="TikTok" />
            </SocialIcons>
          </BrandColumn>

          <FooterColumn>
  <ColumnTitle>Solutions</ColumnTitle>

  <FooterLink as={Link} to="/#for-pharmacies">
    For Pharmacies
  </FooterLink>

  <FooterLink as={Link} to="/#for-clinicians">
    For Doctors
  </FooterLink>

  <FooterLink as={Link} to="/#for-patients">
    For Patients
  </FooterLink>
</FooterColumn>

          <FooterColumn>
            <ColumnTitle>Developers</ColumnTitle>

            <FooterLink>API Documentation</FooterLink>
            <FooterLink>Quick Start Guide</FooterLink>
            <FooterLink>API Playground</FooterLink>
            <FooterLink>API Status</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>

            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Mission</FooterLink>
            <FooterLink>Careers</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contact Info</ColumnTitle>

            <ContactText>+234 8100521930</ContactText>

            <ContactText>
              admin@zamdahealth.com
            </ContactText>

            <ContactText>
              i268 Road 5, Ikota Shopping
              <br />
              Complex, VGC, Lagos
            </ContactText>
          </FooterColumn>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>
            ©2025 Zamda AI. All rights reserved
          </Copyright>

          <BottomLinks>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </BottomLinks>
        </BottomSection>
      </Container>
    </FooterSection>
  );
};

export default Footer;
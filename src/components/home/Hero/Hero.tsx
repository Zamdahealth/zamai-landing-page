import heroImage from "../../../assets/hero-image.png";

import {
  HeroContainer,
  HeroContent,
  LeftSection,
  RightSection,
  Heading,
  DesktopText,
  MobileText,
  Highlight,
  Description,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  ButtonIcon,
  HeroImage,
} from "./styles";

import apiIcon from "../../../assets/code.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftSection>
          <Heading>
            <>
              <DesktopText>
                The AI <Highlight>Health</Highlight>
                <br />
                Assistant for Africa
                <br />
                and the World
              </DesktopText>

              <MobileText>
                The AI <Highlight>Health</Highlight>
                Assistant
                <br />
                for Africa and the
                <br />
                World
              </MobileText>
            </>
          </Heading>

          <Description>
            Zam AI is the medical intelligence engine bringing AI-powered health
            guidance to patients, pharmacists, and doctors — and the API
            platform that lets developers embed that intelligence into any
            healthcare system, anywhere in the world.
          </Description>

          <ButtonContainer>
            <PrimaryButton>Get Early Access</PrimaryButton>

            <SecondaryButton>
              <ButtonIcon src={apiIcon} alt="API Icon" />
              View API Docs
            </SecondaryButton>
          </ButtonContainer>
        </LeftSection>

        <RightSection>
          <HeroImage src={heroImage} alt="AI Hero" />
        </RightSection>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

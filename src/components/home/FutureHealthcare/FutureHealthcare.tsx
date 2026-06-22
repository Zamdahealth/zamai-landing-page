import { Link } from "react-router-dom";
import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  Section,
  Container,
  Heading,
  Description,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  ButtonIcon,
} from "./styles";

const FutureHealthcare = () => {
  return (
    <RevealSection delay={100}>
      <Section>
        <Container>
        <Heading>
          The Future of Healthcare Starts Here.
        </Heading>

        <Description>
          Join thousands of pharmacists, doctors, patients, and
          developers already building with Zam AI.
        </Description>

        <ButtonContainer>
          <PrimaryButton as={Link} to="/waitlist">
            Get Early Access
          </PrimaryButton>

          <SecondaryButton>
            <ButtonIcon>{"</>"}</ButtonIcon>
            View API Docs
          </SecondaryButton>
        </ButtonContainer>
      </Container>
    </Section>
    </RevealSection>
  );
};

export default FutureHealthcare;
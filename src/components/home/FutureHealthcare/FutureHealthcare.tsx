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
          <PrimaryButton>
            Get Early Access
          </PrimaryButton>

          <SecondaryButton>
            <ButtonIcon>{"</>"}</ButtonIcon>
            View API Docs
          </SecondaryButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default FutureHealthcare;
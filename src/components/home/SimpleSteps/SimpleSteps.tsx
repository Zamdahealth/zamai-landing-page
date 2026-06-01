import chatIcon from "../../../assets/chat-icon.png";
import brainIcon from "../../../assets/brain-icon.png";
import shieldIcon from "../../../assets/shield-icon.png";

import {
  SectionContainer,
  SectionContent,
  Heading,
  MobileHeading,
  DesktopHeading,
  SubHeading,
  StepsGrid,
  StepCard,
  Icon,
  StepTitle,
  StepDescription,
  
} from "./styles";

const SimpleSteps = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <Heading>
          <DesktopHeading>
            Intelligent Healthcare in 3 Simple Steps
          </DesktopHeading>

          <MobileHeading>
            Intelligent Healthcare in 3
            <br />
            Simple Steps
          </MobileHeading>
        </Heading>

        <SubHeading>Designed for patients, built for scale.</SubHeading>

        <StepsGrid>
          <StepCard>
            <Icon src={chatIcon} alt="Chat Icon" />

            <StepTitle>Ask Zam AI</StepTitle>

            <StepDescription>
              Type or speak your health question in English, Pidgin, Hausa,
              Yoruba, or Igbo — or call the API from your platform.
            </StepDescription>
          </StepCard>

          <StepCard>
            <Icon src={brainIcon} alt="Brain Icon" />

            <StepTitle>AI Analyzes Instantly</StepTitle>

            <StepDescription>
              Zam AI searches trusted medical databases, drug records, and
              African clinical guidelines in real time.
            </StepDescription>
          </StepCard>

          <StepCard>
            <Icon src={shieldIcon} alt="Shield Icon" />

            <StepTitle>Get Safe, Clear Guidance</StepTitle>

            <StepDescription>
              Receive medically accurate, personalized recommendations delivered
              to your user — or directly to your system via API response.
            </StepDescription>
          </StepCard>
        </StepsGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default SimpleSteps;

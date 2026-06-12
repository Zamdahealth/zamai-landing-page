import heartbeatLine from "../../../assets/heartbeat-line.png";
import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  Section,
  Container,
  Heading,
  Description,
  AccentText,
  BackgroundLine,
} from "./styles";

const HearFromYou = () => {
  return (
    <RevealSection delay={120}>
      <Section>
        <Container>
          <Heading>
            We'd Love to <AccentText>Hear From You</AccentText>
          </Heading>

          <Description>
            Whether you're a pharmacist, doctor, patient, developer, investor,
            or partner — there's a team at Zam AI ready to help you.
          </Description>
        </Container>

        <BackgroundLine src={heartbeatLine} alt="Decorative heartbeat line" />
      </Section>
    </RevealSection>
  );
};

export default HearFromYou;

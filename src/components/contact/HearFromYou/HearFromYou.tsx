import heartbeatLine from "../../../assets/heartbeat-line.png";
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
    <Section>
  <Container>
    <Heading>
      We'd Love to <AccentText>Hear From You</AccentText>
    </Heading>

    <Description>
      Whether you're a pharmacist, doctor, patient, developer,
      
      investor, or partner — there's a team at Zam AI ready to help
     
      you.
    </Description>
  </Container>

  <BackgroundLine
    src={heartbeatLine}
    alt="Decorative heartbeat line"
  />
</Section>
  );
};

export default HearFromYou;
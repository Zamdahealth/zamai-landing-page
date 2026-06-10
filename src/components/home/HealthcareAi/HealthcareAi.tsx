import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  Section,
  Content,
  Left,
  Right,
  Heading,
  Description,
  Highlight,
  StatCard,
  StatNumber,
  StatText,
  Container,
} from "./styles";

const HealthcareAI = () => {
  return (
    <RevealSection delay={80}>
      <Section>
        <Container>

        <Content>
        {/* LEFT SIDE */}
        <Left>
          <Heading>
            Healthcare AI Built for <br />
            the Next Billion People
          </Heading>

          <Description>
            Most healthcare AI was trained on Western data, for Western patients,
            in Western hospitals.
          </Description>

          <Highlight>We built Zam AI differently.</Highlight>

          <Description>
            Zam AI is trained on real African health patterns, local drug
            availability, regional disease data, and the languages your patients
            actually speak.
          </Description>

          <Highlight>
            Because better healthcare shouldn't depend on where you were born.
          </Highlight>
        </Left>

        {/* RIGHT SIDE */}
        <Right>
          <StatCard>
            <StatNumber>1 in 3</StatNumber>
            <StatText>
              Africans has no access to a qualified doctor nearby.
            </StatText>
          </StatCard>

          <StatCard>
            <StatNumber>70%</StatNumber>
            <StatText>
              Of African pharmacies operate with zero clinical decision support.
            </StatText>
          </StatCard>

          <StatCard>
            <StatNumber>2,400+</StatNumber>
            <StatText>
              African languages and dialects that deserve healthcare access too.
            </StatText>
          </StatCard>
        </Right>
      </Content>
      </Container>
    </Section>
    </RevealSection>
  );
};

export default HealthcareAI;
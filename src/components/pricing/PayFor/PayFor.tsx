import heartbeatLine from "../../../assets/heartbeat-line.png";

import {
  Section,
  Container,
  Heading,
  Description,
  PricingWrapper,
  BackgroundLine,
  ToggleContainer,
  ActiveOption,
  InactiveOption,
  SaveBadge,
} from "./styles";

const PayFor = () => {
  return (
    <Section>
      <Container>
        <Heading>
          Pay for What You Actually Need
        </Heading>

        <Description>
          Whether you're a solo pharmacist, a growing clinic,
          or an enterprise health system — Zam AI has a plan
          designed for your scale.
        </Description>

        <PricingWrapper>
          <BackgroundLine
            src={heartbeatLine}
            alt="Heartbeat Line"
          />

          <ToggleContainer>
            <ActiveOption>
              Monthly
            </ActiveOption>

            <InactiveOption>
              Annual
              <SaveBadge>
                Save 20%
              </SaveBadge>
            </InactiveOption>
          </ToggleContainer>
        </PricingWrapper>
      </Container>
    </Section>
  );
};

export default PayFor;
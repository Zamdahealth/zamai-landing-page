import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  FeaturesContainer,
  FeaturesContent,
  Title,
  Subtitle,
  Grid,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
} from "./styles";

import pharmacyIcon from "../../../assets/pharmacy.png";
import doctorIcon from "../../../assets/stethoscope.png";
import patientIcon from "../../../assets/pill.png";
import developerIcon from "../../../assets/code_2.png";

const PharmacyFeatures = () => {
  return (
    <RevealSection delay={120}>
      <FeaturesContainer>
        <FeaturesContent>
        <Title>Built for Everyone in Healthcare</Title>

        <Subtitle>
          Whether you run a pharmacy, see patients daily, want to manage your
          own health, or are building the next healthcare platform — Zam AI
          works for you.
        </Subtitle>

        <Grid>
          <Card>
            <IconWrapper src={pharmacyIcon} />

            <CardTitle>For Pharmacies</CardTitle>
            <CardText>
              Catch dangerous drug interactions before they happen. Get smart
              reorder suggestions, expiry alerts, and business insights — all
              powered by Zam AI.
            </CardText>
          </Card>

          <Card>
            <IconWrapper src={doctorIcon} />

            <CardTitle>For Doctors & Clinicians</CardTitle>
            <CardText>
              AI-powered symptom analysis, prescription optimization, and
              treatment guidelines. Spend less time on paperwork and more time
              with your patients.
            </CardText>
          </Card>

          <Card>
            <IconWrapper src={patientIcon} />

            <CardTitle>For Patients & Families</CardTitle>
            <CardText>
              Check symptoms, understand prescriptions, set medication reminders,
              and get 24/7 health guidance — in your own language.
            </CardText>
          </Card>

          <Card>
            <IconWrapper src={developerIcon} />

            <CardTitle>For Developers & Health Tech Teams</CardTitle>
            <CardText>
              Embed medical intelligence directly into your app, platform, or
              hospital system using the Zam AI API. Fast. Reliable.
              African-health-aware.
            </CardText>
          </Card>
        </Grid>
      </FeaturesContent>
    </FeaturesContainer>
    </RevealSection>
  );
};

export default PharmacyFeatures;
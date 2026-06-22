import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <RevealSection delay={120}>
      <FeaturesContainer ref={sectionRef}>
        <FeaturesContent>
          <Title>Built for Everyone in Healthcare</Title>

          <Subtitle>
            Whether you run a pharmacy, see patients daily, want to manage your
            own health, or are building the next healthcare platform — Zam AI
            works for you.
          </Subtitle>

          <Grid>
            <Card $visible={isVisible} $delay={0}>
              <IconWrapper src={pharmacyIcon} />
              <CardTitle>For Pharmacies</CardTitle>
              <CardText>
                Catch dangerous drug interactions before they happen. Get smart
                reorder suggestions, expiry alerts, and business insights — all
                powered by Zam AI.
              </CardText>
            </Card>

            <Card $visible={isVisible} $delay={0.15}>
              <IconWrapper src={doctorIcon} />
              <CardTitle>For Doctors & Clinicians</CardTitle>
              <CardText>
                AI-powered symptom analysis, prescription optimization, and
                treatment guidelines. Spend less time on paperwork and more time
                with your patients.
              </CardText>
            </Card>

            <Card $visible={isVisible} $delay={0.3}>
              <IconWrapper src={patientIcon} />
              <CardTitle>For Patients & Families</CardTitle>
              <CardText>
                Check symptoms, understand prescriptions, set medication reminders,
                and get 24/7 health guidance — in your own language.
              </CardText>
            </Card>

            <Card $visible={isVisible} $delay={0.45}>
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
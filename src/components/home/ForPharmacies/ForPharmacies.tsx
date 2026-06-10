import pharmacyImage from "../../../assets/pharmacy-dashboard.png";

import drugInteractionIcon from "../../../assets/drug-interaction.png";
import alternativeDrugIcon from "../../../assets/alternative-drug.png";
import dosageIcon from "../../../assets/dosage.png";
import reorderIcon from "../../../assets/reorder.png";
import expiryIcon from "../../../assets/expiry.png";
import salesIcon from "../../../assets/sales.png";
import profitabilityIcon from "../../../assets/profitability.png";

import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  SectionContainer,
  SectionContent,
  LeftSection,
  Label,
  Heading,
  Description,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  RightSection,
  PharmacyImage,
  MobileHeading,
  DesktopHeading,
  MobileBreak,
} from "./styles";

const features = [
  {
    icon: drugInteractionIcon,
    title: "Drug Interaction Checker",
    description: "Real-time alerts before you dispense.",
  },
  {
    icon: alternativeDrugIcon,
    title: "Alternative Drug Suggestions",
    description: "Find in-stock substitutes instantly.",
  },
  {
    icon: dosageIcon,
    title: "Dosage Verification",
    description: "Flag unsafe entries before they reach patients.",
  },
  {
    icon: reorderIcon,
    title: "Smart Reorder Suggestions",
    description: "Never run out of your top sellers.",
  },
  {
    icon: expiryIcon,
    title: "Expiry Risk Alerts",
    description: "Reduce waste and protect your bottom line.",
  },
  {
    icon: salesIcon,
    title: "Predictive Sales Forecasting",
    description: "Predict demand spikes by season and region.",
  },
  {
    icon: profitabilityIcon,
    title: "Profitability Insights",
    description: "See which products earn you the most.",
  },
];

const ForPharmacies = () => {
  return (
    <RevealSection delay={180} direction="left">
      <SectionContainer>
        <SectionContent>
        <LeftSection>
          <Label>For Pharmacies</Label>

          <Heading>
            <DesktopHeading>
              The Smartest Tool Your
              <br />
              Pharmacy Never Had
            </DesktopHeading>

            <MobileHeading>
              The Smartest Tool Your
              <br />
              Pharmacy Never Had
            </MobileHeading>
          </Heading>

          <Description>
            Protect patients. Grow revenue. Run a
            <MobileBreak />
             smarter pharmacy.
          </Description>

          <FeaturesList>
            {features.map((feature) => (
              <FeatureItem key={feature.title}>
                <FeatureIcon src={feature.icon} alt={feature.title} />

                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>

                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeaturesList>
        </LeftSection>

        <RightSection>
          <PharmacyImage src={pharmacyImage} alt="Pharmacy Dashboard" />
        </RightSection>
      </SectionContent>
    </SectionContainer>
    </RevealSection>
  );
};

export default ForPharmacies;

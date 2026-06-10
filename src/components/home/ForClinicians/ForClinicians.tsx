import cliniciansImage from "../../../assets/clinicians-dashboard.png";

import symptomIcon from "../../../assets/symptom-analysis.png";
import prescriptionIcon from "../../../assets/prescription-optimization.png";
import safetyIcon from "../../../assets/drug-safety.png";
import guidelineIcon from "../../../assets/guideline.png";
import followupIcon from "../../../assets/followup.png";
import labIcon from "../../../assets/lab-results.png";

import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  SectionContainer,
  SectionContent,
  LeftSection,
  RightSection,
  Label,
  Heading,
  Description,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  CliniciansImage,
  DesktopHeading,
  MobileHeading,
  MobileBreak,
} from "./styles";

const features = [
  {
    icon: symptomIcon,
    title: "Symptom Analysis Engine",
    description: "Differential diagnosis support in seconds.",
  },
  {
    icon: prescriptionIcon,
    title: "AI Prescription Optimization",
    description: "Review drug choices against patient history.",
  },
  {
    icon: safetyIcon,
    title: "Drug Safety Validation",
    description: "Catch interactions and contraindications.",
  },
  {
    icon: guidelineIcon,
    title: "Treatment Guideline Integration",
    description: "Access WHO and local clinical protocols instantly.",
  },
  {
    icon: followupIcon,
    title: "Patient Follow-Up Scheduling",
    description: "Never lose track of a patient between visits.",
  },
  {
    icon: labIcon,
    title: "Lab Result Interpretation",
    description: "Plain-language summaries for faster decisions.",
  },
];

const ForClinicians = () => {
  return (
    <RevealSection delay={180} direction="right">
      <SectionContainer>
        <SectionContent>
        <LeftSection>
          <CliniciansImage
            src={cliniciansImage}
            alt="For Clinicians"
          />
        </LeftSection>

        <RightSection>
          <Label>For Clinicians</Label>

          <Heading>
            <DesktopHeading>
              AI That Works the Way
              <br />
              You Think
            </DesktopHeading>

            <MobileHeading>
              AI That Works the Way
              
              <br />
              You Think
            </MobileHeading>
          </Heading>

          <Description>
            Clinical intelligence that fits into your 
            <MobileBreak />
            workflow — not against it.
          </Description>

          <FeaturesList>
            {features.map((feature) => (
              <FeatureItem key={feature.title}>
                <FeatureIcon
                  src={feature.icon}
                  alt={feature.title}
                />

                <FeatureContent>
                  <FeatureTitle>
                    {feature.title}
                  </FeatureTitle>

                  <FeatureDescription>
                    {feature.description}
                  </FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeaturesList>
        </RightSection>
      </SectionContent>
    </SectionContainer>
    </RevealSection>
  );
};

export default ForClinicians;
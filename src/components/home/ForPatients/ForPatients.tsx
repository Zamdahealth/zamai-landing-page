import { useEffect, useRef, useState } from "react";
import RevealSection from "../../shared/RevealSection/RevealSection";
import {
  Section,
  Wrapper,
  Header,
  Badge,
  Heading,
  Description,
  Grid,
  Card,
  Icon,
  CardTitle,
  CardText,
} from "./styles";

import searchIcon from "../../../assets/search.png";
import pillIcon from "../../../assets/pill.png";
import prescriptionIcon from "../../../assets/prescription.png";
import alarmIcon from "../../../assets/alarm.png";
import warningIcon from "../../../assets/warning.png";
import globeIcon from "../../../assets/globe.png";
import { MobileBreak } from "../ForClinicians/styles";

const cards = [
  {
    icon: searchIcon,
    title: "Symptom Checker",
    text: "Describe how you feel. Get clear, safe guidance on what to do next.",
  },
  {
    icon: pillIcon,
    title: "Medication Guide",
    text: "Understand exactly how to take your drugs, including timing and food interactions.",
  },
  {
    icon: prescriptionIcon,
    title: "Prescription Reader",
    text: "Upload your prescription. AI explains it in plain language you can understand.",
  },
  {
    icon: alarmIcon,
    title: "Refill Reminders",
    text: "Never miss a dose or run out of medication again.",
  },
  {
    icon: warningIcon,
    title: "Health Risk Alerts",
    text: "Know when to see a doctor before it’s too late.",
  },
  {
    icon: globeIcon,
    title: "Speaks Your Language",
    text: "Available in English, Pidgin, Hausa, Yoruba, and Igbo.",
  },
];

const ForPatients = () => {
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
    <RevealSection delay={160}>
      <Section id="for-patients" ref={sectionRef}>
        <Wrapper>
          <Header>
            <Badge>For Patients</Badge>

            <Heading>
              Your Personal Health Companion,
              <br />
              Always in Your Pocket
            </Heading>

            <Description>
              Clinical intelligence that fits into your <MobileBreak />
              workflow — not against it.
            </Description>
          </Header>

          <Grid>
            {cards.map((card, index) => {
              const delay = index * 0.15;
              const direction = index % 2 === 0 ? "left" : "right";

              return (
                <Card
                  key={card.title}
                  $visible={isVisible}
                  $delay={delay}
                  $direction={direction}
                >
                  <Icon src={card.icon} />
                  <div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardText>{card.text}</CardText>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </Wrapper>
      </Section>
    </RevealSection>
  );
};

export default ForPatients;
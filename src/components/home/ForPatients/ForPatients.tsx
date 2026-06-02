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
  return (
    <Section>
      <Wrapper>
        {/* TOP SECTION */}
        <Header>
          <Badge>For Patients</Badge>

          <Heading>
            Your Personal Health Companion,
            <br />
            Always in Your Pocket
          </Heading>

          <Description>
            Clinical intelligence that fits into your 
            <MobileBreak />
            workflow — not against it.
            
          </Description>
        </Header>

        {/* GRID SECTION */}
        <Grid>
          {cards.map((card) => (
            <Card>
              <Icon src={card.icon} />
              <div>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </div>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default ForPatients;

import liveChatIcon from "../../../assets/live-chat.png";
import whatsappIcon from "../../../assets/whatsapp.png";
import socialIcon from "../../../assets/social-media.png";
import RevealSection from "../../shared/RevealSection/RevealSection";

import {
  Section,
  Container,
  Heading,
  Description,
  CardsContainer,
  Card,
  Icon,
  CardTitle,
  CardText,
  CardLink,
} from "./styles";

const channels = [
  {
    icon: liveChatIcon,
    title: "Live Chat",
    text: `Chat with our support team in real time. Available Mon–Fri, 8AM–6PM WAT.`,
    link: "Start a Chat →",
  },
  {
    icon: whatsappIcon,
    title: "WhatsApp",
    text: `Message us on WhatsApp for quick responses in English or Pidgin.`,
    link: "Open WhatsApp →",
  },
  {
    icon: socialIcon,
    title: "Social Media",
    text: `Follow us on Twitter/X and LinkedIn for updates, news, and announcements.`,
    link: "Follow us",
  },
];

const ReachUs = () => {
  return (
    <RevealSection delay={200}>
      <Section>
        <Container>
        <Heading>Other Ways to Reach Us</Heading>

        <Description>
          Pick the channel that works best for you.
        </Description>

        <CardsContainer>
          {channels.map((item) => (
            <Card key={item.title}>
              <Icon src={item.icon} alt={item.title} />

              <CardTitle>{item.title}</CardTitle>

              <CardText>{item.text}</CardText>

              <CardLink>{item.link}</CardLink>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </Section>
    </RevealSection>
  );
};

export default ReachUs;
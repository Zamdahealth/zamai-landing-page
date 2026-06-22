import { useState } from "react";

import plusIcon from "../../../assets/down_line.png";
import minusIcon from "../../../assets/arrow-up.png";
import RevealSection from "../../shared/RevealSection/RevealSection";

import {
  Section,
  Container,
  Heading,
  Description,
  FaqList,
  FaqItem,
  QuestionRow,
  Question,
  Icon,
  Answer,
  AnswerText,
} from "./styles";

const faqData = [
  {
    question: "Can I book a Demo for Pharmacy?",
    answer:
      "Yes. Our team can walk you through the platform and show how Zam AI can fit into your pharmacy workflow.",
  },
  {
    question: "How does Zam AI handle patient data?",
    answer:
      "Patient information is processed securely using industry-standard encryption and privacy practices.",
  },
  {
    question: "How do I get API Access for my Healthcare platform?",
    answer:
      "Select 'Technical / API Support' or 'Partnership & Business' as your inquiry type and describe your platform. Our developer team will reach out with API credentials, sandbox access, and onboarding documentation.",
  },
  {
    question:
      "Is Zam AI available in languages other than English?",
    answer:
      "Yes. Zam AI supports English, Pidgin, Hausa, Yoruba, and Igbo.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <RevealSection delay={220}>
      <Section>
        <Container>
          <Heading>
            Frequently Asked Questions
          </Heading>

          <Description>
            Quick answers before you reach out.
          </Description>

          <FaqList>
            {faqData.map((faq, index) => (
              <FaqItem key={faq.question}>
              <QuestionRow
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? -1 : index
                  )
                }
              >
                <Question>
                  {faq.question}
                </Question>

                <Icon
                  src={
                    activeIndex === index
                      ? minusIcon
                      : plusIcon
                  }
                  alt="toggle"
                />
              </QuestionRow>

              <Answer isOpen={activeIndex === index}>
                <AnswerText>
                  {faq.answer}
                </AnswerText>
              </Answer>
            </FaqItem>
          ))}
        </FaqList>
        </Container>
      </Section>
    </RevealSection>
  );
};

export default Faqs;
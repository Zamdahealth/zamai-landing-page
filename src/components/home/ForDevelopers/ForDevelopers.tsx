import codePreview from "../../../assets/code-preview.png";

import {
  Section,
  Content,
  LeftColumn,
  RightColumn,
  Badge,
  Heading,
  Description,
  ApiCard,
  ApiTitle,
  ApiDescription,
  Endpoint,
  CodePreview,
  Button,
} from "./styles";

const apiCards = [
  {
    title: "Drug Intelligence API",
    description:
      "Query drug interactions, dosages, contraindications, and alternatives for any drug combination.",
    endpoint: "POST /v1/drugs/check",
  },
  {
    title: "Symptom Analysis API",
    description:
      "Submit symptoms and patient context. Receive structured differential diagnosis suggestions and triage recommendations.",
    endpoint: "POST /v1/symptoms/analyze",
  },
  {
    title: "Multilingual Health Response API",
    description:
      "Request health guidance responses in English, Pidgin, Hausa, Yoruba, or Igbo — for any patient-facing integration.",
    endpoint: "POST /v1/responses/language",
  },
  {
    title: "Outbreak Detection API",
    description:
      "Access regional disease pattern signals and seasonal illness predictions to power public health tools.",
    endpoint: "GET /v1/intelligence/outbreaks",
  },
];

const ForDevelopers = () => {
  return (
    <Section>
      <Badge>For Developers</Badge>

      <Heading>
        Embed Medical Intelligence Into
        <br />
        Anything You Build
      </Heading>

      <Description>
        The Zam AI API gives your platform access to drug databases, interaction
        checkers, symptom analysis, multilingual health responses, and
        predictive health intelligence — all through clean REST endpoints.
      </Description>

      <Content>
        <LeftColumn>
          {apiCards.map((card) => (
            <ApiCard key={card.title}>
              <ApiTitle>{card.title}</ApiTitle>

              <ApiDescription>{card.description}</ApiDescription>

              <Endpoint>{card.endpoint}</Endpoint>
            </ApiCard>
          ))}
        </LeftColumn>

        <RightColumn>
          <CodePreview>
            <img src={codePreview} alt="Code Preview" />
          </CodePreview>

          <Button variant="outline">Read the Docs</Button>

          <Button variant="filled">Get your API Key</Button>
        </RightColumn>
      </Content>
    </Section>
  );
};

export default ForDevelopers;

import dropdownIcon from "../../../assets/dropdown.png";
import downlineIcon from "../../../assets/down_line.png";
import generalInquiryIcon from "../../../assets/general-inquiry.png";
import technicalSupportIcon from "../../../assets/technical-support.png";
import partnershipIcon from "../../../assets/partnership.png";

import {
  Section,
  Container,
  LeftColumn,
  RightColumn,
  Heading,
  Description,
  InquiryList,
  InquiryCard,
  InquiryIcon,
  InquiryContent,
  InquiryTitle,
  InquiryText,
  FormCard,
  FormTitle,
  FormDescription,
  Form,
  FormRow,
  InputGroup,
  Label,
  Input,
  Select,
  SelectWrapper,
  SelectIcon,
  PhoneField,
  CountryCodeBox,
  CountrySelect,
  CountryDropdownIcon,
  PhoneInput,
  TextArea,
  SubmitButton,
} from "./styles";

const inquiryOptions = [
  {
    icon: generalInquiryIcon,
    title: "General Inquiry",
    description: "Questions about Zam AI products & features",
  },
  {
    icon: technicalSupportIcon,
    title: "Technical / API Support",
    description: "Integration help, bugs, or API questions",
  },
  {
    icon: partnershipIcon,
    title: "Partnership & Business",
    description: "Hospitals, health startups, or government",
  },
];

const MessageUs = () => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <Heading>How Can We Help?</Heading>

          <Description>
            Choose the type of inquiry that best describes your need. Our team
            will route your message to the right expert and get back to you fast.
          </Description>

          <InquiryList>
            {inquiryOptions.map((item, index) => (
              <InquiryCard key={item.title} active={index === 0}>
                <InquiryIcon src={item.icon} alt={item.title} />

                <InquiryContent>
                  <InquiryTitle>{item.title}</InquiryTitle>
                  <InquiryText>{item.description}</InquiryText>
                </InquiryContent>
              </InquiryCard>
            ))}
          </InquiryList>
        </LeftColumn>

        <RightColumn>
          <FormCard>
            <FormTitle>Send Us a Message</FormTitle>

            <FormDescription>
              General Inquiry — we'll get back to you within 24 hours.
            </FormDescription>

            <Form>
              <InputGroup>
                <Label>Full Name*</Label>
                <Input placeholder="Enter your full name" />
              </InputGroup>

              <FormRow>
                <InputGroup>
                  <Label>Email*</Label>
                  <Input placeholder="example@gmail.com" />
                </InputGroup>

                <InputGroup>
                  <Label>Phone Number*</Label>

                  <PhoneField>
                    <CountryCodeBox>
                      <CountrySelect defaultValue="+234">
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        <option value="+233">+233</option>
                      </CountrySelect>

                      <CountryDropdownIcon src={dropdownIcon} />
                    </CountryCodeBox>

                    <PhoneInput placeholder="Phone Number" />
                  </PhoneField>
                </InputGroup>
              </FormRow>

              <InputGroup>
                <Label>Company Name</Label>
                <Input placeholder="Enter company name" />
              </InputGroup>

              <FormRow>
                <InputGroup>
                  <Label>I am a*</Label>
                  <SelectWrapper>
                    <Select>
                      <option>Select your role</option>
                      <option>Pharmacist</option>
                    </Select>
                    <SelectIcon src={downlineIcon} />
                  </SelectWrapper>
                </InputGroup>

                <InputGroup>
                  <Label>Country</Label>
                  <SelectWrapper>
                    <Select>
                      <option>Select country</option>
                      <option>Nigeria </option>
                      <option>United Kingdom </option>
                      <option>United States </option>
                    </Select>
                    <SelectIcon src={downlineIcon} />
                  </SelectWrapper>
                </InputGroup>
              </FormRow>

              <InputGroup>
                <Label>Inquiry Type*</Label>
                <SelectWrapper>
                  <Select>
                    <option>General Inquiry</option>
                    <option>Technical / API Support</option>
                    <option>Partnership & Business</option>
                  </Select>
                  <SelectIcon src={downlineIcon} />
                </SelectWrapper>
              </InputGroup>

              <InputGroup>
                <Label>Message*</Label>
                <TextArea placeholder="Tell us how we can help you..." />
              </InputGroup>

              <SubmitButton>Send Message</SubmitButton>
            </Form>
          </FormCard>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default MessageUs;
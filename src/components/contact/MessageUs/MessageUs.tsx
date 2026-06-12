import { useState } from "react";
import { toast } from "react-toastify";

import dropdownIcon from "../../../assets/dropdown.png";
import downlineIcon from "../../../assets/down_line.png";
import generalInquiryIcon from "../../../assets/general-inquiry.png";
import technicalSupportIcon from "../../../assets/technical-support.png";
import partnershipIcon from "../../../assets/partnership.png";

import RevealSection from "../../shared/RevealSection/RevealSection";

import { sendContactMessage } from "../../../services/contactApi";

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
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+234",
    companyName: "",
    role: "",
    country: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage(form);

      toast.success("Message sent successfully!");
      setForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        countryCode: "+234",
        companyName: "",
        role: "",
        country: "",
        inquiryType: "General Inquiry",
        message: "",
      });
    } catch (error: any) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE DATA:", error?.response?.data);
  console.log("STATUS:", error?.response?.status);

  toast.error("Failed to send message.");
} finally {
  setLoading(false);
}}

  return (
    <RevealSection delay={180}>
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

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label>Full Name*</Label>
                  <Input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </InputGroup>

                <FormRow>
                  <InputGroup>
                    <Label>Email*</Label>
                    <Input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Phone Number*</Label>

                    <PhoneField>
                      <CountryCodeBox>
                        <CountrySelect
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                        >
                          <option value="+234">+234</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+91">+91</option>
                        </CountrySelect>

                        <CountryDropdownIcon src={dropdownIcon} />
                      </CountryCodeBox>

                      <PhoneInput
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                      />
                    </PhoneField>
                  </InputGroup>
                </FormRow>

                <InputGroup>
                  <Label>Company Name</Label>
                  <Input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                  />
                </InputGroup>

                <FormRow>
                  <InputGroup>
                    <Label>I am a*</Label>
                    <SelectWrapper>
                      <Select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                      >
                        <option value="">Select your role</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Developer">Developer</option>
                      </Select>

                      <SelectIcon src={downlineIcon} />
                    </SelectWrapper>
                  </InputGroup>

                  <InputGroup>
                    <Label>Country</Label>
                    <SelectWrapper>
                      <Select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                      >
                        <option value="">Select country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">United States</option>
                      </Select>

                      <SelectIcon src={downlineIcon} />
                    </SelectWrapper>
                  </InputGroup>
                </FormRow>

                <InputGroup>
                  <Label>Inquiry Type*</Label>
                  <SelectWrapper>
                    <Select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                    </Select>

                    <SelectIcon src={downlineIcon} />
                  </SelectWrapper>
                </InputGroup>

                <InputGroup>
                  <Label>Message*</Label>
                  <TextArea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </InputGroup>

                <SubmitButton disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </SubmitButton>
              </Form>
            </FormCard>
          </RightColumn>
        </Container>
      </Section>
    </RevealSection>
  );
};

export default MessageUs;
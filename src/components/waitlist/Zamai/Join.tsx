import { useState } from "react";
import { toast } from "react-toastify";

import { joinWaitlist } from "../../../services/waitlistApi";

import {
  Section,
  Container,
  Content,
  Title,
  Subtitle,
  FormCard,
  Form,
  FormRow,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
} from "./styles";

const Join = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      await joinWaitlist(form);

      toast.success(
        "You're on the waitlist! We'll notify you soon."
      );

      setSubmitted(true);

      setForm({
        fullName: "",
        email: "",
        organization: "",
        notes: "",
      });
    } catch (error: any) {
      console.log("WAITLIST ERROR:", error);
      console.log("RESPONSE DATA:", error?.response?.data);
      console.log("STATUS:", error?.response?.status);

      toast.error(
        "Unable to submit the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <Content>
          <Title>Join the Zam AI Waitlist</Title>

          <Subtitle>
            Be the first to know when our AI-powered product launches.
            Fill in your details and we'll notify you as soon as the
            waitlist opens.
          </Subtitle>

          <FormCard>
            <Form onSubmit={handleSubmit}>
              {/* Full Name + Email */}
              <FormRow>
                <InputGroup>
                  <Label>Full Name*</Label>

                  <Input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Email Address*</Label>

                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </InputGroup>
              </FormRow>

              {/* Organization */}
              <FormRow>
                <InputGroup>
                  <Label>Organization</Label>

                  <Input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Company, clinic or team"
                  />
                </InputGroup>
              </FormRow>

              {/* Notes */}
              <FormRow>
                <InputGroup>
                  <Label>Why are you interested?</Label>

                  <TextArea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Tell us what you hope to achieve with Zam AI"
                  />
                </InputGroup>
              </FormRow>

              <SubmitButton
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : "Join Waitlist"}
              </SubmitButton>

              {submitted && (
                <SuccessMessage>
                  Thank you! We'll notify you as soon as
                  the AI launches.
                </SuccessMessage>
              )}
            </Form>
          </FormCard>
        </Content>
      </Container>
    </Section>
  );
};

export default Join;
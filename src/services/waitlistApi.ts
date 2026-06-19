import axios from "axios";

const API_URL = "https://alpha.zamdahealth.com/v1/contact";

export const joinWaitlist = async (data: {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
}) => {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || "",
    company: data.company || "",
    message: `[Zamai Website Waitlist Form] ${data.notes?.trim() || "No message provided."}`,
  };

  console.log("WAITLIST PAYLOAD BEING SENT:", payload);

  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

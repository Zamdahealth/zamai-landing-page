import axios from "axios";

const API_URL = "https://alpha.zamdahealth.com/v1/contact";

export const joinWaitlist = async (data: {
  fullName: string;
  email: string;
  companyName?: string;
  message?: string;
}) => {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    company: data.companyName || "",
    message: data.message || "",
  };

  console.log("WAITLIST PAYLOAD BEING SENT:", payload);

  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

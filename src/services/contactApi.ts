import axios from "axios";

const API_URL = "https://alpha.zamdahealth.com/v1/contact";

export const sendContactMessage = async (data: any) => {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    phone: `${data.countryCode}${data.phoneNumber}`,
    company: data.companyName,
    // role: data.role,
    // country: data.country,
    // inquiryType: data.inquiryType,
    message: data.message,
  };

  console.log("PAYLOAD BEING SENT:", payload);

  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
import axios from "axios";

const API_URL = "https://alpha.zamdahealth.com/v1/contact";

export const sendContactMessage = async (data: any) => {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    phone: `${data.countryCode}${data.phoneNumber}`,
    company: data.companyName || "",
    message: `[Zamai Website Contact Form] Inquiry Type: ${data.inquiryType}
Role: ${data.role || "N/A"}
Country: ${data.country || "N/A"}

${data.message}`,
  };

  console.log("PAYLOAD BEING SENT:", payload);

  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
import Faqs from "../../components/contact/Faqs/Faqs";
import HearFromYou from "../../components/contact/HearFromYou/HearFromYou";
// import MessageUs from "../../components/contact/MessageUs/MessageUs";
import ReachUs from "../../components/contact/ReachUs/ReachUs";

function Contact() {
  return (
    <>
     <HearFromYou />
     {/* <MessageUs /> */}
     <ReachUs />
     <Faqs />
    </>
  );
}

export default Contact;
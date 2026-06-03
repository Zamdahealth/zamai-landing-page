import ForClinicians from "./components/home/ForClinicians/ForClinicians";
import ForDevelopers from "./components/home/ForDevelopers/ForDevelopers";
import ForPatients from "./components/home/ForPatients/ForPatients";
import ForPharmacies from "./components/home/ForPharmacies/ForPharmacies";
import HealthcareAI from "./components/home/HealthcareAi/HealthcareAi";
import Hero from "./components/home/Hero/Hero";
import PharmacyFeatures from "./components/home/PharmacyFeatures/PharmacyFeatures";
import SimpleSteps from "./components/home/SimpleSteps/SimpleSteps";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <PharmacyFeatures />
      <SimpleSteps />
      <ForPharmacies />
      <ForClinicians />
      <ForDevelopers />
      <ForPatients />
      <HealthcareAI />
    </>
  );
}

export default App;
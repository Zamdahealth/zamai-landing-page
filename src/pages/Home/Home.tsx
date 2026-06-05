import ForClinicians from "../../components/home/ForClinicians/ForClinicians";
import ForDevelopers from "../../components/home/ForDevelopers/ForDevelopers";
import ForPatients from "../../components/home/ForPatients/ForPatients";
import ForPharmacies from "../../components/home/ForPharmacies/ForPharmacies";
import FutureHealthcare from "../../components/home/FutureHealthcare/FutureHealthcare";
import HealthcareAI from "../../components/home/HealthcareAi/HealthcareAi";
import Hero from "../../components/home/Hero/Hero";
import PharmacyFeatures from "../../components/home/PharmacyFeatures/PharmacyFeatures";
import SimpleSteps from "../../components/home/SimpleSteps/SimpleSteps";

function Home() {
  return (
    <>
      <Hero />
      <PharmacyFeatures />
      <SimpleSteps />
      <ForPharmacies />
      <ForClinicians />
      <ForDevelopers />
      <ForPatients />
      <HealthcareAI />
      <FutureHealthcare />
    </>
  );
}

export default Home;
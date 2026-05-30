import Hero from "./components/home/Hero/Hero";
import PharmacyFeatures from "./components/home/PharmacyFeatures/PharmacyFeatures";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PharmacyFeatures />
    </>
  );
}

export default App;
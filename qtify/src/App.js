import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";

export const config = {
  endpoint: "https://qtify-backend-labs.crio.do/albums/top"
};

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;

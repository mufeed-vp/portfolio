import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Mufeed V P",
    location: "Kochi, India",
    currentLocation: "Dubai",
    email: "mufeedpeedikayil@gmail.com",
    availability: "Open for work",
    contactNumber: "+971 555292844",
    brand:
      "I'm a passionate Full Stack Developer with a knack for the MERN stack, Firebase, FastAPI, and Next.js. I thrive on self-motivation, and my commitment to work ethic is unwavering. As a collaborative team player with an open mind, I embrace challenges and seize opportunities to craft exceptional digital experiences. My journey is defined by a dedication to clean and efficient code. Thank you for being a part of my portfolio exploration. Your visit is deeply appreciated and fuels my drive to continue creating meaningful solutions. Let's build something remarkable together!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;

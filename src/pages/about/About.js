import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability, contactNumber, currentLocation }) => {
  return (
    <section className="about">
      <PageHeader title="About me" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} contactNumber={contactNumber} currentLocation={currentLocation}  />
    </section>
  );
};

export default About;

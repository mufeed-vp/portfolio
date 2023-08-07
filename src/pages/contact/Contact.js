import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location, contactNumber, currentLocation }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          {/* <div className="col-12 col-lg-6">
            <Form />
          </div> */}
          <div className="col-12 col-lg-12">
            <ContactInfo name={name} location={location} email={email} contactNumber={contactNumber} currentLocation={currentLocation} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;

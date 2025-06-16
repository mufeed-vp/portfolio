import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styleComponents/ContactInfo.css";

const ContactInfo = ({ name, email, location, contactNumber, currentLocation }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_3ws9vih",      // Replace with your EmailJS service ID
      "template_u2fjkqk",     // Replace with your EmailJS template ID
      {
        name: "Portfolio Contact Form",
        from: contactEmail,
        message: contactMessage,
        time: new Date().toLocaleString(),
        // to_email: "mufeedpeedikayil@gmail.com",
      },
      "MTt9tmd_UupTqWyU0"       // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        setSubmitted(true);
        setContactEmail("");
        setContactMessage("");
        toast.success("Message sent successfully!");
        toast.success("Thank you! We'll contact you soon.");
      },
      (error) => {
        toast.error("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <>
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Contact Information</h4>
      <p className="infoDescription">
        Open for opportunities. Let's connect and build something awesome together!
      </p>
      <div className="info-row">
        <div className="info-block">
          <span className="info-label"> <i className="icon fa-solid fa-user" style={{ marginRight: "6px" }}></i>{" "} Name:</span>
          <span className="info-value" >{name}</span>
        </div>
        <div className="info-block">
          <span className="info-label"> <i className="icon fa-solid fa-location-pin" style={{ marginRight: "6px" }}></i>{" "} Location:</span>
          <span className="info-value">{location}</span>
        </div>
      </div>
      <div className="info-row">
        <div className="info-block">
          <span className="info-label"> <i className="icon fa-solid fa-mobile" style={{ marginRight: "6px" }}></i>{" "} Contact Number:</span>
          <span className="info-value">{contactNumber}</span>
        </div>
        <div className="info-block">
          <span className="info-label"> <i className="icon fa-solid fa-envelope" style={{ marginRight: "6px" }}></i>{" "} Email:</span>
          <span className="info-value">
            <a className="info-value" href={`mailto:${email}`}>{email}</a>
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="contact-email">Your Email:</label>
        <input
          type="email"
          id="contact-email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="contact-message">Message:</label>
        <textarea
          id="contact-message"
          value={contactMessage}
          onChange={(e) => setContactMessage(e.target.value)}
          placeholder="Type your message"
          required
          rows={4}
        />
        <button type="submit">Submit</button>
        {/* {submitted && (
          <span className="success-message">
            Thank you! We'll contact you soon.
          </span>
        )} */}
      </form>
    </motion.div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

// const ContactInfo = ({ name, email, location, contactNumber, currentLocation }) => {
//   const [ref, inView] = useInView({
//     threshold: 0,
//     triggerOnce: true,
//   });
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactMessage, setContactMessage] = useState(""); // New state for message
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would add your email sending logic, e.g., using an API or email service
//     setSubmitted(true);
//     setContactEmail("");
//     setContactMessage("");
//   };
//   return (
//     <motion.div
//       className="contactInfo"
//       ref={ref}
//       initial={{ x: "10vw", opacity: 0 }}
//       animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       <h4 className="contentTitle">Contact Information</h4>
//       <p className="infoDescription">Open for opportunities. Let's connect and build something awesome together! </p>
//       <ul className="listInfo">
//         <li>
//           <div className="personalContactInfo">
//             <span className="infoIcon">
//               <i className="icon fa-solid fa-user"></i>{" "}
//             </span>
//             <div className="mediaWrap">
//               <h6 className="infoType">Name</h6>
//               <span className="infoValue">{name}</span>
//             </div>
//           </div>
//         </li>
//         {/* <li>
//           <div className="personalContactInfo">
//             <span className="infoIcon">
//               <i className="icon fa-solid fa-location-pin "></i>{" "}
//             </span>
//             <div className="mediaWrap">
//               <h6 className="infoType">Location</h6>
//               <span className="infoValue">{location}</span>
//             </div>
//           </div>
//         </li> */}
//         <li>
//           <div className="personalContactInfo">
//             <span className="infoIcon">
//               <i className="icon fa-solid fa-location-pin "></i>{" "}
//             </span>
//             <div className="mediaWrap">
//               <h6 className="infoType">Location</h6>
//               <span className="infoValue">{currentLocation}</span>
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="personalContactInfo">
//             <span className="infoIcon">
//               <i className="icon fa-solid fa-mobile "></i>{" "}
//             </span>
//             <div className="mediaWrap">
//               <h6 className="infoType">Contact number</h6>
//               <span className="infoValue">{contactNumber}</span>
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="personalContactInfo">
//             <span className="infoIcon">
//               <i className="icon fa-solid fa-envelope "></i>{" "}
//             </span>
//             <div className="mediaWrap">
//               <h6 className="infoType">Email</h6>
//               <span className="infoValue">
//                 <a href={`mailto:${email}`}>{email}</a>
//               </span>
//             </div>
//           </div>
//         </li>
//       </ul>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <label htmlFor="contact-email">Your Email:</label>
//         <input
//           type="email"
//           id="contact-email"
//           value={contactEmail}
//           onChange={(e) => setContactEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <label htmlFor="contact-message">Message:</label>
//         <textarea
//           id="contact-message"
//           value={contactMessage}
//           onChange={(e) => setContactMessage(e.target.value)}
//           placeholder="Type your message"
//           required
//           rows={4}
//         />
//         <button type="submit">Submit</button>
//         {submitted && (
//           <span className="success-message">
//             Thank you! We'll contact you soon.
//           </span>
//         )}
//       </form>
//     </motion.div>
//   );
// };

export default ContactInfo;

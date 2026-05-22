import { useState } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "",
    hearAbout: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleCheckbox = (e) => {
  const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hearAbout: [...formData.hearAbout, value],
      });
   }
    else {
    setFormData({
      ...formData,
      hearAbout:
      formData.hearAbout.filter((item) => item !== value)
    });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

   // Replace with your endpoint
   // await fetch(...)

    setSubmitted(true);
  };

  return(
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Have Questions About Planetery Science?</h2>
        <p>
          Intrested in learning more about space, astronomy, or how planetery data is collected and analyzed?
          Reach out, and we'd get back to you.
       </p>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label> Full Name<span>*</span> </label>
            <input
            type="text"
            name="fullName"
            placeholder="Full name"
            required value={formData.fullName}
            onChange={handleChange}/>
          </div>
          {/*Email*/}
          <div className="form-group">
            <label>Email<span>*</span></label>
            <input
            type="email"
            name="email"
            placeholder="example@example.com"
            required value={formData.email}
            onChange={handleChange}/>
          </div>
          {/*City*/}
          <div className="form-group">
            <label>City<span>*</span></label>
            <select name="city" required value={formData.city} onChange={handleChange}>
              <option value="">Choose City</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="port-harcourt">Port-Harcourt</option>
              <option value="calabar">Calabar</option>
              <option value="owerri">Owerri</option>
              <option value="oguta">Oguta</option>
              <option value="ibadan">Ibadan</option>
              <option value="Akure">Akure</option>
              <option value="uyo">Uyo</option>
              <option value="kano">Kano</option>
              <option value="yola">Yola</option>
              <option value="asaba">Asaba</option>
              <option value="onitsha">Onitsha</option>
              <option value="awka">Awka</option>
              <option value="benin">Benin-City</option>
              <option value="osogbo">Osogbo</option>
              <option value="kebbi">Kebbi</option>
              <option value="minna">Minna</option>
            </select>
          </div>
          {/*Phone*/}
          <div className="form-group">
            <label>Phone Number <span>*</span></label>
            <input
            type="tel"
            name="phone"
            placeholder="Please enter a valid phone number."
            required pattern="[0-9]+" value={formData.phone}
            onChange={handleChange}/>
          </div>

          {/*Message*/}
          <div className="form-group full-width">
            <label>Message<span>*</span></label>
            <textarea
            name="message"
            placeholder="Enter your message"
            maxLength="100"
            required value={formData.message}
            onChange={handleChange}/>
            <small>{formData.message.length}/100 characters</small>
          </div>

          {/*Contact Method*/}
          <div className="right-column">
          <div className="form-group">
            <label>How should we contact you?</label>
            <div className="radio-group">
              <label>
                <input
                type="radio"
                name="contactMethod"
                value="Phone"
                onChange={handleChange}/>
                Phone
              </label>
              <label>
                <input
                type="radio"
                name="contactMethod"
                value="Email"
                onChange={handleChange}/>
                Email
              </label>
              <label>
                <input
                type="radio"
                name="contactMethod"
                value="Both"
                onChange={handleChange}/>
                Both
              </label>
            </div>
          </div>
          {/*Hear About*/}
          <div className="form-group">
            <label>How did you hear about us?</label>
            <div className="checkbox-group">
              <label>
                <input
                type="checkbox"
                value="Friend"
                onChange={handleChange}/>
                Friend
              </label>
              <label>
                <input
                type="checkbox"
                value="TS Academy"
                onChange={handleChange}/>
                TS Academy
              </label>
              <label>
                <input
                type="checkbox"
                value="Others"
                onChange={handleChange}/>
                Others
              </label>
            </div>
          </div>
          </div>
        </div>
        <button type="submit" className="submit-btn"> Submit </button>

        {submitted && (
          <p className="success message">Form submitted succesfully!</p>
        )}
      </form>
    </div>
  </section>
);
}
export default ContactForm;
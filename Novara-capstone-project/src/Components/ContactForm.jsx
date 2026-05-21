function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Message submitted successfully!');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
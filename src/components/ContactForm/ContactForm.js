import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
  });
  const [formError, setFormError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { subject, message, email } = formData;

    if (!subject.trim()) {
      setFormError("Please enter a subject.");
      return;
    }

    if (!email.trim()) {
      setFormError("Please enter an email address.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    const mailto = "mailto:poole.reid@gmail.com";
    const body = `Subject: ${subject}\n\nMessage:\n${message}`;

    const url = `${mailto}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(url);

    setFormData({
      subject: "",
      message: "",
      email: "",
    });
    setFormError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;

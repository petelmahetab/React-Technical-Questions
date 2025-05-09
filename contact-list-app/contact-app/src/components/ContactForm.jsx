import React, { useEffect, useRef, useContext, useState } from "react";
import { Context } from "../context/ContactContext";
import ErrorHandling from "../hooks/ErrorHandling";

const ContactForm = () => {
  // Create state
  const { context } = useContext(Context);
  const ref = useRef(null);
  const [error, validate] = ErrorHandling();
  
  const [data, setData] = useState({ name: "", phone: "", email: "" });

  // Focus on first input when component mounts...
  useEffect(() => {
    ref.current.focus();
  }, []);

  // Function for handling input changes...
  function handleInput(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // Function for handling form submission..
  function handlingSubmission(e) {
    e.preventDefault();
    if (validate(data)) {
      context(data);
      setData({ name: "", phone: "", email: "" });
    }
  }

  return (
    <form onSubmit={handlingSubmission}>
      <input
        type="text"
        name="name"
        ref={ref}
        value={data.name}
        onChange={handleInput}
        placeholder="Enter your name"
      />
      {error.name && <p>{error.name}</p>}

      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleInput}
        placeholder="Enter your phone"
      />
      {error.phone && <p>{error.phone}</p>}

      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleInput}
        placeholder="Enter your email"
      />
      {error.email && <p>{error.email}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      profession: profession,
      budget: budget,
      message: message,
    };

    emailjs
      .send(
        "service_uolgjkf",        // SERVICE ID
        "template_6rwf74a",       // TEMPLATE ID
        templateParams,
        "0mWuughGAit8RKeLy"       // PUBLIC KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully! I will contact you soon.");
          setName("");
          setEmail("");
          setPhone("");
          setProfession("");
          setBudget("");
          setMessage("");
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0d081f] p-6 rounded-xl w-full max-w-md space-y-4 border border-gray-700"
      >
        <h3 className="text-white text-xl text-center font-semibold">
          Portfolio Project Inquiry 🚀
        </h3>

        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <input
          type="tel"
          placeholder="Your Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <input
          type="text"
          placeholder="Your Profession (e.g. Web Developer)"
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <select
          required
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        >
          <option value="">Select Budget Range</option>
          <option value="$50 - $100">$50 - $100</option>
          <option value="$100 - $200">$100 - $200</option>
          <option value="$200+">$200+</option>
        </select>

        <textarea
          rows="4"
          placeholder="Tell me about your portfolio (skills, projects, style)"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold"
        >
          Send Request
        </button>

        <p className="text-gray-400 text-xs text-center">
          Fiverr & Upwork friendly • Email will be sent directly to me
        </p>
      </form>
    </section>
  );
};

export default Contact;

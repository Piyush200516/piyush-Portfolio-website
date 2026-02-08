import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, my name is ${name}.
Phone: ${phone}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/919981111939?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0d081f] p-6 rounded-xl w-full max-w-md space-y-4 border border-gray-700"
      >
        <h3 className="text-white text-xl text-center font-semibold">
          Connect With Me 🚀
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
          type="tel"
          placeholder="Your Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

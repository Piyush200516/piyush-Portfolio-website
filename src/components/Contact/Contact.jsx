import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!form.name || !form.message) {
      toast.error("Please fill required fields");
      return;
    }

    const whatsappURL = `https://wa.me/919981111939?text=${encodeURIComponent(
      `Portfolio Inquiry 🚀

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Budget: ${form.budget}
Project Type: ${form.project}

Message:
${form.message}`
    )}`;

    toast.success("Opening WhatsApp...");

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1000);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
        }

        .contact-wrapper {
          min-height: 100vh;
          padding: 60px 20px;
          background: radial-gradient(circle at top, #1a0033, #05000f);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-container {
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        .contact-card {
          padding: 32px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 0 40px rgba(138,43,226,0.4);
        }

        .contact-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(90deg, #6ee7ff, #ff4da6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          color: #aaa;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .contact-card input,
        .contact-card textarea,
        .contact-card select {
          width: 100%;
          padding: 14px;
          margin-bottom: 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          color: #1e0505;
          outline: none;
          font-size: 14px;
        }

        .contact-card textarea {
          min-height: 120px;
        }

        .contact-card input::placeholder,
        .contact-card textarea::placeholder {
          color: #bbb;
        }

        .contact-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          background: linear-gradient(135deg, #8a2be2, #ff4da6);
          transition: 0.3s;
        }

        .contact-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px #ff4da6;
        }

        .contact-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow-card {
          width: 100%;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 50px rgba(255, 77, 166, 0.4);
          color: #eb7171;
        }

        .glow-card h3 {
          margin-bottom: 10px;
        }

        .glow-card p {
          color: #aaa;
          font-size: 14px;
        }

        .info {
          margin-top: 14px;
          font-size: 15px;
          color: #ddd;
        }

        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #888;
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-container">

          {/* LEFT FORM */}
          <form className="contact-card" onSubmit={sendMessage}>
            <div className="contact-title">
              Portfolio Project Inquiry 🚀
            </div>

            <div className="subtitle">
              Interested in working together? Let’s connect!
            </div>

            <input name="name" placeholder="Your Name" onChange={handleChange} />
            <input name="email" placeholder="Your Email" onChange={handleChange} />
            <input name="phone" placeholder="Your Phone" onChange={handleChange} />

            <select name="budget" onChange={handleChange}>
              <option value="">Select Budget</option>
              <option>₹1,000 – ₹5,000</option>
              <option>₹5,000 – ₹15,000</option>
              <option>₹15,000 – ₹30,000</option>
              <option>₹30,000+</option>
            </select>

            <input
              name="project"
              placeholder="Project Type (Website, App, UI etc.)"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell me about your project…"
              onChange={handleChange}
            ></textarea>

            <button className="contact-btn">Send Request</button>

            <div className="footer">
              Fiverr & Upwork friendly • Goes directly to WhatsApp
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <div className="glow-card">
              <h3>Let's Connect 🚀</h3>
              <p>I usually reply within 10–30 minutes</p>

              <div className="info">📧 piyushmishra21052003@gmail.com</div>
              <div className="info">📞 +91 99811 11939</div>
              <div className="info">📍 Indore, India</div>

              <div className="footer">
                Available for freelance projects 💼
              </div>
            </div>
          </div>

        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
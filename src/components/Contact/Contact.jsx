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

    toast.success("Opening WhatsApp…");

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1000);
  };

  return (
    <>
      <style>{`
        /* ===== FINAL RESPONSIVE FIX ===== */

        .contact-wrapper {
          width: 100%;
          padding: 64px 20px;
          background: radial-gradient(circle at top, #1a0033, #05000f);
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .contact-wrapper {
            padding: 48px 16px;
          }
        }

        @media (max-width: 640px) {
          .contact-wrapper {
            padding: 40px 14px;
          }
        }

        .contact-card {
          width: 100%;
          max-width: 420px;
          padding: 28px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }

        .contact-title {
          text-align: center;
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .contact-card input,
        .contact-card textarea,
        .contact-card select {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(229, 99, 99, 0.2);
          color: #fff;
          font-size: 14px;
          outline: none;
        }

        .contact-card textarea {
          min-height: 110px;
          resize: none;
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
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          background: linear-gradient(135deg, #8a2be2, #ff4da6);
        }

        .contact-footer {
          margin-top: 14px;
          font-size: 12px;
          text-align: center;
          color: #aaa;
        }
      `}</style>

      <div className="contact-wrapper">
        <form className="contact-card" onSubmit={sendMessage}>
          <div className="contact-title">
            Portfolio Project Inquiry 🚀
          </div>

          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Your Phone" onChange={handleChange} />

          <select name="budget" onChange={handleChange}>
            <option value="">Select Budget</option>
            <option>$50 – $100</option>
            <option>$100 – $300</option>
            <option>$300 – $500</option>
            <option>$500+</option>
          </select>

          <input
            type="text"
            name="project"
            placeholder="Project Type (Website, App, UI etc.)"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell me about your project…"
            onChange={handleChange}
          ></textarea>

          <button className="contact-btn" type="submit">
            Send Request
          </button>

          <div className="contact-footer">
            Fiverr & Upwork friendly • Message goes directly to WhatsApp
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
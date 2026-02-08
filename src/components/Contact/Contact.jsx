import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

emailjs.init("Rz7W9pVF0HdDryNNL");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            theme: "dark",
          });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message ❌", {
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 flex justify-center">
      <ToastContainer />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#0d081f] p-6 rounded-xl w-full max-w-md space-y-4 border border-gray-700"
      >
        <h3 className="text-white text-xl text-center font-semibold">
          Connect With Me 🚀
        </h3>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          required
          className="w-full p-3 bg-[#131025] text-white rounded-md border border-gray-600"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

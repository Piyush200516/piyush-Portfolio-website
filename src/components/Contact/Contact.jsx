import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

emailjs.init("Rz7W9pVF0HdDryNNL");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      to: "piyushmishra21052003@gmail.com",
    };

    emailjs
      .send(
        "service_axbtt7a",
        "template_1ziboq3",
        templateParams,
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

        <input
          type="hidden"
          name="to_email"
          value="piyushmishra21052003@gmail.com"
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

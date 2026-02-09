import { useEffect, useState } from "react";
import profileImage from "../../assets/profile2.png";
import resumePDF from "../../assets/Resume Piyush.pdf";

const About = () => {
  // 🔹 Typing Effect Logic
  const words = ["Fullstack Developer", "Coder"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Piyush Mishra
          </h1>

          {/* 🔥 Typing Effect Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            I am a{" "}
            <span className="text-[#8245ec]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed">
            I am Piyush Mishra, a passionate Frontend Developer specializing in React and JavaScript. I build responsive and user-friendly web applications.
          </p>

          <a
            href={resumePDF}
            download="Resume Piyush.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full">
            <img
              src={profileImage}
              alt="Piyush Mishra"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

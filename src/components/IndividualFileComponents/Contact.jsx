import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-bg-accent text-text">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 tracking-wide text-center">
        Let's Connect
      </h1>

      {/* Contact Card */}
      <div className="bg-bg rounded-2xl shadow-lg p-8 w-[360px] border border-white/5 text-center">
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Whether you have a question, want to collaborate, or just want to say hi — 
          feel free to reach out. I’m always open to chatting about new ideas or projects.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-lg text-text/80" />
            <a
              href="mailto:gaelguzman.dev@example.com"
              className="hover:underline text-text/90"
            >
              gaelguzman.dev@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-lg text-text/80" />
            <a
              href="https://linkedin.com/in/gaelgg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-text/90"
            >
              linkedin.com/in/gaelgg
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaGithub className="text-lg text-text/80" />
            <a
              href="https://github.com/clickbaithate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-text/90"
            >
              github.com/clickbaithate
            </a>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-500 mt-8 text-center">
        © {new Date().getFullYear()} Gael Guzman. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;

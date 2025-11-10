import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiPython, SiDjango, SiMongodb, SiPostgresql } from "react-icons/si";

const ReadMe = ({ project }) => {

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] font-mono border overflow-hidden bg-bg-accent text-text border-border">
      {/* ─── Top Bar (Meta Info) ───────────────────────────── */}
      <div className="flex justify-between items-center px-4 py-2 border-b text-xs bg-bg border-border">
        <div className="flex gap-4">
          <span className="text-text">Project:</span>
          <span className="text-text-accent font-medium">{project.title}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text">Status:</span>
          <span className="text-text-accent-2 font-medium">Active</span>
        </div>
      </div>

      {/* ─── Scrollable Content ─────────────────────────────── */}
      <div className="overflow-y-auto p-6 space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-text">{project.title}</h1>
        <p className="text-text-muted italic">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-accent hover:underline text-sm"
        >
          GitHub Repo →
        </a>

        {/* Technologies */}
        <div>
          <h2 className="text-lg font-semibold text-text mb-2">🧠 Tech Stack</h2>
          <ul className="flex flex-wrap gap-4">
            {project.stack.map((tech) => {
              const Icon = tech.icon;
              return (
                <li key={tech.name} className="flex items-center gap-1 text-sm">
                  <Icon className={tech.color} size={18} />
                  <span className={`${tech.color}`}>{tech.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sections */}
        {[
          ["💡 Motivation", project.motivation],
          ["🧭 Overview", project.overview],
          ["⚙️ Key Features", project.features],
          ["🚧 Challenges & Learnings", project.challenges],
          ["🔮 Future Plans", project.plans],
        ].map(([title, content], idx) => (
          <section key={idx}>
            <h2 className="text-lg font-semibold text-text mb-2">{title}</h2>
            {Array.isArray(content) ? (
              <ul className="list-disc list-inside text-text space-y-1">
                {content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed text-text">{content}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ReadMe;

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const WebSocket = ({ project }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (!project?.events) return;

    const interval = setInterval(() => {
      const randomEvent =
        project.events[Math.floor(Math.random() * project.events.length)];
      setLogs((prev) => [
        ...prev.slice(-4),
        `[${new Date().toLocaleTimeString()}] ${randomEvent}`,
      ]);
    }, 1800);

    return () => clearInterval(interval);
  }, [project]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] text-text border border-border overflow-hidden">
      {/* Title Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-bg border-b border-border text-xs">
        <span className="text-text">⚡ {project?.title || "WebSocket Layer"}</span>
        <span className="text-text-accent-2 italic">Live Connection Feed</span>
      </div>

      {/* Animated Pulse Background */}
      <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-bg-accent)] via-[var(--theme-bg-accent)] to-[var(--theme-bg)]" />
        <div className="absolute w-72 h-72 rounded-full bg-[var(--theme-accent)]/10 animate-ping" />
        <div className="absolute w-52 h-52 rounded-full bg-[var(--theme-accent)]/20 blur-2xl" />

        <div className="z-10 text-center">
          <h2 className="text-xl font-bold text-text-accent mb-2">
            {project?.title || "WebSocket Active"}
          </h2>
          <p className="text-text text-sm mb-6">
            {project?.overview ||
              "Real-time updates flowing across all clients."}
          </p>
          {project?.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bg border border-border px-4 py-2 rounded-lg hover:bg-bg/75 transition text-sm"
            >
              <FaGithub /> View Repository on GitHub
            </a>
          )}
        </div>

        {/* Live Log Terminal */}
        <div className="absolute bottom-4 w-[90%] max-w-2xl bg-bg-accent border border-border rounded-md p-3 text-xs font-mono text-text-accent">
          {logs.map((line, i) => (
            <div key={i} className="truncate">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebSocket;

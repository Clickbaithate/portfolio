import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";

const Deployment = ({ project }) => {
  const [uptime, setUptime] = useState(project.initialUptime || 99.99);
  const [logs, setLogs] = useState(project.initialLogs || []);
  const logRef = useRef(null);

  // Fake uptime drift
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((u) => {
        // Randomly increase or decrease by up to 0.5
        const change = (Math.random() - 1) * 1; // -0.5 to +0.5
        let newUptime = u + change;
        // Clamp the value between 85 and 99
        if (newUptime > 99) newUptime = 99;
        if (newUptime < 85) newUptime = 85;
        return newUptime;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Add new logs randomly from project.logPool
  useEffect(() => {
    const interval = setInterval(() => {
      if (!project.logPool || project.logPool.length === 0) return;
      const newLog = project.logPool[Math.floor(Math.random() * project.logPool.length)];
      setLogs((prev) => [...prev.slice(-15), newLog]);
    }, 2500);
    return () => clearInterval(interval);
  }, [project.logPool]);

  // Auto-scroll console to bottom
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] bg-bg-accent text-text font-mono border border-border overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-bg border-b border-border text-xs">
        <span className="text-text">🚀 {project.title} Deployment</span>
        <span className="text-text-accent-2 italic">Live Ops Dashboard</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center">
        {/* Services */}
        <div className="w-full max-w-3xl space-y-4">
          {project.services?.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-bg border border-border rounded-lg p-4 shadow-md hover:bg-bg/75 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full ${s.color} animate-pulse`} />
                {s.icon}
                <div>
                  <h3 className="text-sm font-semibold">
                    {s.name} <span className="text-text">• {s.platform}</span>
                  </h3>
                  <p className="text-xs text-text-muted">{s.desc}</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-xs">
                <span className="text-text font-medium">{s.status}</span>
                <span className="text-text-muted">{s.latency}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="mt-8 text-xs flex items-center gap-4 text-text">
          <span>
            Uptime: <span className="text-text-accent font-semibold">{uptime.toFixed(2)}%</span>
          </span>
          <span>|</span>
          <span>Last Deployed: {project.lastDeployed}</span>
          <span>|</span>
          <span>Next Check: 30s</span>
        </div>

        {/* Animated Terminal Section */}
        <div className="mt-6 w-full max-w-3xl bg-bg border border-border rounded-lg shadow-inner">
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-bg border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
            <span className="ml-3 text-text text-xs">{project.id}-deployment-console</span>
          </div>

          {/* Terminal body */}
          <div
            ref={logRef}
            className="p-3 text-xs text-gray-300 font-mono h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
          >
            {logs.map((log, i) => (
              <p key={i} className="text-text-accent-2 animate-fadeIn">
                {log}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center items-center gap-4 px-4 py-2 bg-bg border-t border-border text-xs text-text">
        <FaGithub className="text-text" />
        <span>CI Synced with GitHub</span>
      </div>
    </div>
  );
};

export default Deployment;

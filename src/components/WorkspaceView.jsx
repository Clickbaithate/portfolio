const WorkspaceView = ({ currentFile }) => {
  if (!currentFile) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center text-gray-600">
        <p>No file open.</p>
      </div>
    );
  }

  // Example renderings for some files
  if (currentFile === "about.html")
    return <div className="p-4">👋 About Me page with HTML-style layout.</div>;
  if (currentFile === "github.md")
    return <div className="p-4">📦 GitHub info in markdown format.</div>;
  if (currentFile === "contact.py")
    return <div className="p-4">📞 Contact info (Python script style).</div>;
  if (currentFile === "hobbies.js")
    return <div className="p-4">🎮 My hobbies listed as JS array.</div>;

  // Project folder files
  return (
    <div className="p-4">
      <h2 className="font-semibold">{currentFile}</h2>
      <p>📁 Content for this project file.</p>
    </div>
  );
};

export default WorkspaceView;

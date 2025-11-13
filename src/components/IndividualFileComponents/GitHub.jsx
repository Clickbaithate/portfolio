import { useEffect, useState } from "react";

const GitHub = () => {
  const [user, setUser] = useState(null);
  const username = "clickbaithate";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setUser)
      .catch(console.error);

    // Disable scrolling
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!user)
    return (
      <div className="h-screen w-full bg-bg-accent text-text flex flex-col items-center justify-center overflow-hidden">
        Loading GitHub profile...
      </div>
    );

  return (
    <div className="h-screen w-full bg-bg-accent text-text flex flex-col items-center justify-center overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-4 scale-90">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl" />
          <img
            src={user.avatar_url}
            alt="avatar"
            className="relative w-24 h-24 rounded-full border-4 border-blue-500/40 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mt-3">{user.name}</h1>
        <p className="text-gray-400 text-sm">@{user.login}</p>

        {user.bio && (
          <p className="text-gray-300 text-center mt-2 text-sm max-w-sm leading-snug">
            {user.bio}
          </p>
        )}

        <div className="flex gap-6 mt-3 text-xs text-gray-400">
          <span>📁 {user.public_repos} Repos</span>
          <span>👥 {user.followers} Followers</span>
          <span>⭐ {user.following} Following</span>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all rounded-full font-semibold text-xs shadow-md"
        >
          Visit GitHub →
        </a>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl w-full justify-center items-center place-items-center scale-90">
        <div className="rounded-xl shadow-xl bg-bg p-2 w-86 flex justify-center items-center overflow-hidden">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_title=true&hide_rank=true`}
            alt="GitHub Stats"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="rounded-xl shadow-xl bg-bg p-2 w-96 flex justify-center items-center overflow-hidden">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_title=true`}
            alt="Top Languages"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="mt-5 max-w-3xl w-full text-center scale-90">
        <h2 className="text-xl font-semibold mb-2">GitHub Contributions</h2>
        <div className="backdrop-blur-md bg-white/5 p-3 rounded-xl shadow-lg border border-gray-800 w-[700px] mx-auto">
          <img
            src={`https://ghchart.rshah.org/00FF7F/${username}`}
            alt="GitHub Contribution Chart"
            className="w-full rounded-md"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Each green square represents a day you contributed 🌱
        </p>
      </div>
    </div>
  );
};

export default GitHub;

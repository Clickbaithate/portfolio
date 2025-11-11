import { useState, useEffect } from "react";
import profilePic from "../../assets/pfp.jpg";

const titles = [
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
  "Gamer",
  "Biker",
  "Creative Thinker",
];

const hobbies = [
  { icon: "🌌", name: "Astronomy" },
  { icon: "✈️", name: "Traveling" },
  { icon: "🎮", name: "Gaming" },
  { icon: "👨‍🍳", name: "Cooking" },
  { icon: "📚", name: "Reading" },
  { icon: "🎸", name: "Guitar" },
  { icon: "⚽", name: "Soccer" },
  { icon: "🏍️", name: "Motorcycles" },
  { icon: "💻", name: "Tech" },
  { icon: "📖", name: "Comics" },
];

const AboutMe = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!deleting && letterIndex <= currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, letterIndex));
        setLetterIndex(letterIndex + 1);
      }, 120);
    } else if (deleting && letterIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, letterIndex));
        setLetterIndex(letterIndex - 1);
      }, 60);
    } else if (!deleting && letterIndex > currentTitle.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && letterIndex < 0) {
      setDeleting(false);
      setTitleIndex((titleIndex + 1) % titles.length);
      setLetterIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, deleting, titleIndex]);

  return (
    <section className="bg-bg w-full h-[99%] flex border-l-1 border-border overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col items-center justify-center p-12 gap-8">
        <img
          src={profilePic}
          alt="Gael"
          className="w-48 h-48 rounded-full border-4 border-text-accent object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold text-text text-center">HI, I'M GAEL</h1>
        <h2 className="text-2xl text-text-accent font-semibold h-8 text-center">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-text-muted text-center max-w-md">
          I graduated from <span className="font-semibold text-text">UTRGV with high honors</span> in Computer Science.
          I'm passionate about technology, building creative projects, and exploring innovative solutions.
          I also love connecting with people who share the same curiosity for tech and life.
        </p>
        {/* Fun Fact — Notepad UI */}
        <div className="relative w-[340px] bg-bg-accent/10 border border-text-accent rounded-xl shadow-lg overflow-hidden font-mono text-sm">
          {/* Mac-style header bar */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-accent border-b border-text-accent/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-text-muted text-xs">funfact_notsofunfact.txt</span>
          </div>

          {/* Notepad lines */}
          <div className="relative px-5 py-4 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:100%_1.75rem]">
            <p className="text-text-muted leading-relaxed whitespace-pre-line">
              My brain runs in <span className="text-text-accent font-semibold">low graphics mode</span>.
              {"\n"}I have <span className="text-text">aphantasia</span> — I can’t visualize images in my head.
              {"\n"}All imagination renders in text only..
            </p>
          </div>

          {/* Footer label */}
          <div className="absolute bottom-1 right-3 text-[10px] text-text-muted italic">
            autosaved · no imagination detected
          </div>
        </div>
      </div>

      {/* Right Side: Orbiting Hobbies */}
      <div className="w-1/2 flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-text-accent mb-8 z-10">Hobbies & Interests</h2>

        <div className="relative w-[420px] h-[420px] flex items-center justify-center">
          {/* Center Circle */}
          <div className="absolute w-24 h-24 text-6xl bg-bg-accent rounded-full flex items-center justify-center text-text font-bold shadow-lg z-20">
            ☀️
          </div>

          {/* Each Hobby */}
          {hobbies.map((hobby, i) => {
            const angle = (i * 360) / hobbies.length;
            const orbitSpeed = 18; // seconds per full rotation

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                  transformOrigin: "center center",
                  animation: `orbit-${i} ${orbitSpeed}s linear infinite`,
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-bg-accent w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg hover:scale-125 hover:z-50 transition-all duration-300">
                    {hobby.icon}
                  </div>
                  <span className="text-text-muted mt-2 text-sm font-semibold text-center w-24">
                    {hobby.name}
                  </span>
                </div>

                {/* Dynamic keyframe for each hobby */}
                <style>
                  {`
                    @keyframes orbit-${i} {
                      from { transform: rotate(${angle}deg) translateX(180px) rotate(-${angle}deg); }
                      to { transform: rotate(${angle + 360}deg) translateX(180px) rotate(-${angle + 360}deg); }
                    }
                  `}
                </style>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

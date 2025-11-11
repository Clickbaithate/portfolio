import Workspace from "./Workspace";
import Deployment from "./Deployment";
import ReadMe from "./ReadMe";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCloudUploadAlt, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiPython, SiDjango, SiMongodb, SiPostgresql, SiVercel, SiRender, SiSupabase } from "react-icons/si";
import Architecture from "./Architecture";

import temp from "../assets/temp.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import Backend from "./Backend";
import Frontend from "./Frontend";
import WebSocket from "./WebSocket";
import AboutMe from "./IndividualFileComponents/AboutMe";

const WorkspaceView = ({ currentProject, currentFile }) => {
  if (!currentProject) {
    return (
      <Workspace />
    );
  }

  const projects = [
    {
      id: "tacmap",
      title: "Tac Map",
      description: "A real-time tactical whiteboard for gamers to plan strategies together.",
      image: one,
      github: "https://github.com/yourusername/tacmap",
      stack: [
        { name: "JavaScript", color: "text-yellow-400", icon: IoLogoJavascript },
        { name: "React", color: "text-cyan-400", icon: FaReact },
        { name: "Node.js", color: "text-green-400", icon: FaNodeJs },
      ],
      motivation:
        "I wanted to create a tool that captures the teamwork and strategy of online games. Many teams rely on screenshots or messy notes — Tac Map gives them a clean, real-time way to visualize tactics before matches.",
      overview:
        "Tac Map is a collaborative whiteboard that lets players upload maps, draw plans, and coordinate live. Every change is synced instantly via WebSockets, making it feel like you’re all in the same room.",
      features: [
        "🗺️ Upload custom game maps",
        "✏️ Draw and annotate with teammates in real-time",
        "📍 Drag-and-drop tactical icons",
        "🕒 Built-in match timer and round planner",
      ],
      challenges:
        "Synchronizing map updates between multiple clients required efficient real-time communication. Using WebSockets with Redis Pub/Sub, I ensured consistent state sharing and learned to optimize React rendering for live collaboration.",
      plans:
        "Next steps include authentication, persistent sessions, and integrated team voice support for smoother coordination.",
      frontend: [
        { string: "const [elements, setElements] = useState([]);", color: "text-yellow-400" },
        { string: "const undo = () => setElements(prev => prev.slice(0, -1));", color: "text-cyan-400" },
        { string: "const handleMouseDown = (e) => setIsDrawing(true);", color: "text-green-400" },
        { string: "const handleMouseMove = (e) => { if (isDrawing) draw(e); };", color: "text-blue-400" },
        { string: "const handleMouseUp = () => setIsDrawing(false);", color: "text-pink-400" },
      ],
      backend: [
        { string: 'const io = new Server(server, { cors: { origin: "*" } });', color: "text-yellow-400" },
        { string: 'io.on("connection", (socket) => { ... });', color: "text-cyan-400" },
        { string: 'socket.on("userJoined", ({ roomId }) => { ... });', color: "text-green-400" },
        { string: 'app.get("/", (req, res) => res.send("Server running"));', color: "text-blue-400" },
        { string: 'server.listen(5000, () => console.log("Server on 5000"));', color: "text-pink-400" },
      ],
      events: [
        "Client connected [ID: 42a1]",
        "Broadcasting update → tactical room #1",
        "Ping → Pong (latency 92ms)",
        "Client disconnected [ID: 42a1]",
        "Syncing live map state...",
        "New client joined [ID: 7f93]",
      ],
      initialUptime: 99.97,
      initialLogs: ["[system] initializing deployment monitor..."],
      logPool: [
        "[vercel] incremental build completed",
        "[render] scaling instance to handle 2x load",
        "[supabase] backup snapshot saved",
        "[websocket] ping → pong latency 93ms",
        "[monitor] uptime check passed ✅",
      ],
      lastDeployed: "2h ago",
      services: [
        { name: "Frontend", platform: "Vercel", desc: "Next.js app auto-deployed", status: "✅ Live", latency: "182ms", color: "bg-blue-400", icon: <SiVercel className="text-gray-300" /> },
        { name: "Backend", platform: "Render", desc: "Node.js WebSocket API", status: "🟢 Healthy", latency: "207ms", color: "bg-green-400", icon: <SiRender className="text-blue-300" /> },
        { name: "Database", platform: "Supabase", desc: "Postgres + Auth instance", status: "🟢 Connected", latency: "153ms", color: "bg-emerald-400", icon: <SiSupabase className="text-green-300" /> },
        { name: "WebSocket", platform: "Node", desc: "Real-time tactical sync", status: "⚡ Active", latency: "89ms", color: "bg-yellow-400", icon: <FaCloudUploadAlt className="text-yellow-300" /> },
      ],
    },
    {
      id: "miniangel",
      title: "MiniAngel Tracker",
      description: "A collector’s web app for tracking Sonny Angel and blind-box collections.",
      image: two,
      github: "https://github.com/yourusername/miniangel",
      stack: [
        { name: "Python", color: "text-blue-400", icon: SiPython },
        { name: "Django", color: "text-green-400", icon: SiDjango },
        { name: "PostgreSQL", color: "text-indigo-400", icon: SiPostgresql },
      ],
      motivation:
        "As a collector, I wanted a central place to manage duplicates, wishlist items, and release series — something beyond spreadsheets.",
      overview:
        "MiniAngel helps collectors organize their figures, track which they own, and see estimated resale prices. The app syncs collection stats and rarity data via background tasks.",
      features: [
        "📦 Track owned & wishlist figures",
        "💸 Automatic price updates",
        "📊 Collection stats dashboard",
        "🔍 Search across series & tags",
      ],
      challenges:
        "Efficiently normalizing data from multiple APIs and keeping models synced while ensuring query performance was the biggest challenge.",
      plans:
        "Adding community trades and live rarity market tracking in the next version.",
      frontend: [
        { string: "const [isLiked, setIsLiked] = useState(false);", color: "text-yellow-400" },
        { string: "const handleLike = async () => { ... };", color: "text-cyan-400" },
        { string: "<FontAwesomeIcon icon={faHeart} onClick={handleLike} />", color: "text-pink-400" },
        { string: "if (loading) return <div>Loading...</div>;", color: "text-gray-400" },
        { string: "export default SonnyCard;", color: "text-green-400" },
      ],
      backend: [
        { string: "const { v4: uuidv4 } = require('uuid');", color: "text-yellow-400" },
        { string: "const supabase = getSupabase(accessToken);", color: "text-cyan-400" },
        { string: "await supabase.storage.from('diary_images').upload(...);", color: "text-green-400" },
        { string: "await supabase.from('entries').upsert([...]);", color: "text-blue-400" },
        { string: "return res.json({ message: 'Image uploaded' });", color: "text-pink-400" },
      ],
      events: [
        "Fetching collection data from API...",
        "Synced 23 new figures with wishlist",
        "Detected duplicate entry: 'Animal Series 4 - Koala'",
        "Background task → price refresh complete",
        "User uploaded image for 'Marine Series 3'",
        "Cache cleared: updated collection stats",
      ],
      initialUptime: 99.92,
      initialLogs: ["[system] initializing collection monitor..."],
      logPool: [
        "[supabase] backup snapshot saved",
        "[background-task] sync complete",
        "[cache] cleared collection stats",
        "[api] fetched latest figures",
        "[monitor] uptime check passed ✅",
      ],
      lastDeployed: "3h ago",
      services: [
        { name: "Frontend", platform: "Django", desc: "Web app frontend", status: "✅ Live", latency: "192ms", color: "bg-blue-400", icon: <SiDjango className="text-green-500" /> },
        { name: "Backend", platform: "Supabase", desc: "Python API & tasks", status: "🟢 Healthy", latency: "210ms", color: "bg-green-400", icon: <SiPython className="text-yellow-500" /> },
        { name: "Database", platform: "PostgreSQL", desc: "Collection DB", status: "🟢 Connected", latency: "158ms", color: "bg-emerald-400", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Background Task", platform: "Celery", desc: "Async data processing", status: "⚡ Active", latency: "99ms", color: "bg-yellow-400", icon: <FaCloudUploadAlt className="text-yellow-300" /> },
      ],
    },
    {
      id: "cinevault",
      title: "CineVault",
      description: "A movie-tracking and recommendation platform powered by collaborative filtering.",
      image: three,
      github: "https://github.com/yourusername/cinevault",
      stack: [
        { name: "JavaScript", color: "text-yellow-400", icon: IoLogoJavascript },
        { name: "React", color: "text-cyan-400", icon: FaReact },
        { name: "MongoDB", color: "text-green-500", icon: SiMongodb },
      ],
      motivation:
        "I wanted to explore recommender systems and create a way for users to discover new films through similarity analysis.",
      overview:
        "CineVault allows users to rate films, build watchlists, and get suggestions using collaborative filtering and user profile vectors.",
      features: [
        "🎥 Personalized movie recommendations",
        "⭐ Watchlist & favorites tracking",
        "🧮 Machine learning-powered similarity search",
        "🌓 Light/dark UI modes",
      ],
      challenges:
        "Designing a performant recommendation engine with minimal cold-start issues while keeping MongoDB queries fast.",
      plans:
        "Next version will add social recommendations and group watch session scheduling.",
      frontend: [
        { string: "const [movie, setMovie] = useState(null);", color: "text-yellow-400" },
        { string: "useEffect(() => fetchMovie(), []);", color: "text-cyan-400" },
        { string: "<img src={movie.poster} alt={movie.title} />", color: "text-pink-400" },
        { string: "navigate(`/movie/${id}`);", color: "text-green-400" },
        { string: "export default MovieCard;", color: "text-gray-400" },
      ],
      backend: [
        { string: "const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);", color: "text-yellow-400" },
        { string: "io.on('connection', (socket) => { ... });", color: "text-cyan-400" },
        { string: "socket.on('sendMessage', async (msg) => { ... });", color: "text-green-400" },
        { string: "await supabase.from('Messages').insert([...]);", color: "text-blue-400" },
        { string: "server.listen(port, () => console.log('Running'));", color: "text-pink-400" },
      ],
      events: [
        "User rated 'Interstellar' ⭐⭐⭐⭐⭐",
        "Generated recommendations → 10 similar titles",
        "Watchlist updated: + 'Blade Runner 2049'",
        "Collaborative filtering model retrained (12k users)",
        "Fetched 50 trending movies from TMDB API",
        "Session expired → user re-authenticated",
      ],
      initialUptime: 99.95,
      initialLogs: ["[system] initializing recommendation monitor..."],
      logPool: [
        "[model] retraining started",
        "[api] fetched latest movie ratings",
        "[recommendation] generated 10 suggestions",
        "[cache] cleared watchlist stats",
        "[monitor] uptime check passed ✅",
      ],
      lastDeployed: "1h ago",
      services: [
        { name: "Frontend", platform: "React", desc: "Web app frontend", status: "✅ Live", latency: "175ms", color: "bg-blue-400", icon: <FaReact className="text-blue-300" /> },
        { name: "Backend", platform: "Node.js", desc: "API & real-time processing", status: "🟢 Healthy", latency: "205ms", color: "bg-green-400", icon: <IoLogoJavascript className="text-yellow-300" /> },
        { name: "Database", platform: "MongoDB", desc: "Movies & users DB", status: "🟢 Connected", latency: "160ms", color: "bg-emerald-400", icon: <SiMongodb className="text-green-300" /> },
        { name: "Recommendation Engine", platform: "Python ML", desc: "Collaborative filtering", status: "⚡ Active", latency: "95ms", color: "bg-yellow-400", icon: <SiPython className="text-yellow-500" /> },
      ],
    },
  ];

  const project = projects.find((p) => p.id === currentProject.name);

  // Example renderings for some files
  if (currentProject.name === "about.html") return <AboutMe/>;
  if (currentProject.name === "github.md") return <div className="p-4">📦 GitHub info in markdown format.</div>;
  if (currentProject.name === "contact.py") return <div className="p-4">📞 Contact info (Python script style).</div>;
  if (currentProject.name === "hobbies.js") return <div className="p-4">🎮 My hobbies listed as JS array.</div>;

  if (currentFile === "readme") return <ReadMe project={project} />
  else if (currentFile === "architecture") return <Architecture image={project.image} />
  else if (currentFile === "backend") return <Backend lines={project.backend} />
  else if (currentFile === "frontend") return <Frontend lines={project.frontend} />
  else if (currentFile === "websocket") return <WebSocket project={project} />
  else return <Deployment project={project} />
  
};

export default WorkspaceView;

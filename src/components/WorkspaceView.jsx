import Workspace from "./Workspace";
import Deployment from "./Deployment";
import ReadMe from "./ReadMe";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCloudUploadAlt, FaReact } from "react-icons/fa";
import { FaJava, FaNodeJs, FaDatabase } from "react-icons/fa6";
import { SiPython, SiDjango, SiMongodb, SiPostgresql, SiVercel, SiRender, SiSupabase, SiAndroid, SiSqlite, SiFlutter, SiExpress } from "react-icons/si";
import Architecture from "./Architecture";

import angelDiary from "../assets/angelDiary.mov";
import angelFriend from "../assets/angelFriend.mov";
import angelPost from "../assets/angelPost.mov";
import angelSearch from "../assets/angelSearch.mov";

import androidBudget from "../assets/android-budget.webm";
import androidDelete from "../assets/android-delete.mp4";
import androidEdit from "../assets/android-edit.webm";
import androidHistory from "../assets/android-history.mp4";
import androidHome from "../assets/android-home.png";
import androidRecentTransactions from "../assets/android-recent-transaction.png";
import androidTransaction from "../assets/android-transactions.mp4";
import androidStats from "../assets/android-transactions.mp4";

import flutterFolder from "../assets/flutter-folder.mp4";
import flutterLiked from "../assets/flutter-liked.mp4";
import flutterSearch from "../assets/flutter-search.mp4";

import reactDiscover from "../assets/react-discover.png";
import reactHome from "../assets/react-home.png";
import reactMovie from "../assets/react-movie.png";

import tacHome from "../assets/tacHome.png";
import tacHost from "../assets/tacHost.png";
import tacViewer from "../assets/tacViewer.png";

import Backend from "./Backend";
import Frontend from "./Frontend";
import WebSocket from "./WebSocket";
import AboutMe from "./IndividualFileComponents/AboutMe";
import GitHub from "./IndividualFileComponents/GitHub";
import Contact from "./IndividualFileComponents/Contact";
import Hobbies from "./IndividualFileComponents/Hobbies";

const WorkspaceView = ({ currentProject, currentFile }) => {
  if (!currentProject) {
    return (
      <Workspace />
    );
  }

  const projects = [
    {
      id: "pennypal",
      title: "PennyPal",
      description: "A simple Android budgeting app to track expenses, manage budgets, and view spending summaries.",
      images: [androidHome, androidBudget, androidDelete, androidEdit, androidHistory, androidTransaction, androidRecentTransactions, androidStats],
      github: "https://github.com/yourusername/pennypal",
      stack: [
        { name: "Java", color: "text-yellow-400", icon: FaJava },
        { name: "Android Studio", color: "text-green-400", icon: SiAndroid },
        { name: "SQLite", color: "text-blue-400", icon: SiSqlite },
      ],
      motivation:
        "I wanted a lightweight budgeting tool that didn't rely on cloud syncing or external accounts — something fast, offline, and simple.",
      overview:
        "PennyPal allows users to set/reset their budget, add/edit/delete transactions, and view stats on spending categories. The entire app works offline using SQLite.",
      features: [
        "💰 Set, edit, or reset your monthly budget",
        "🧾 Add, edit, and delete transactions",
        "📊 Spending stats by category",
        "📱 Clean offline-first mobile experience",
      ],
      challenges:
        "Designing efficient SQLite queries for filtering and aggregating spending data, while keeping UI smooth and avoiding blocking the main thread.",
      plans:
        "Adding cloud sync, exporting data to CSV, and integrating push reminders for upcoming bills.",
      frontend: [
        { string: "public void addTransaction(Transaction t) { ... }", color: "text-yellow-400" },
        { string: "btnResetBudget.setOnClickListener(v -> reset());", color: "text-cyan-400" },
        { string: "recyclerView.setAdapter(transactionAdapter);", color: "text-green-400" },
        { string: "if (cursor.moveToFirst()) { ... }", color: "text-blue-400" },
        { string: "Toast.makeText(this, \"Saved\", Toast.LENGTH_SHORT).show();", color: "text-pink-400" },
      ],
      backend: [
        { string: "SQLiteDatabase db = this.getWritableDatabase();", color: "text-yellow-400" },
        { string: "db.insert(\"transactions\", null, values);", color: "text-cyan-400" },
        { string: "db.rawQuery(\"SELECT * FROM transactions\", null);", color: "text-green-400" },
        { string: "db.update(\"budget\", values, null, null);", color: "text-blue-400" },
        { string: "db.delete(\"transactions\", \"id=?\", new String[]{id});", color: "text-pink-400" },
      ],
      events: [
        "User added new transaction: $12.50 → Food",
        "Monthly budget reset to $1,200",
        "Deleted transaction ID 32",
        "Generated spending stats (6 categories)",
        "Cache cleared → UI refresh",
        "Export request initiated...",
      ],
      initialUptime: 99.9,
      initialLogs: ["[system] initializing budget engine..."],
      logPool: [
        "[sqlite] vacuum completed",
        "[ui] recyclerView refresh",
        "[stats] category aggregation finished",
        "[monitor] uptime check passed ✅",
        "[sync] preparing data snapshot",
      ],
      lastDeployed: "5h ago",
      services: [
        { name: "Mobile App", platform: "Android", desc: "Java + SQLite offline app", status: "📱 Stable", latency: "—", color: "bg-green-400", icon: <SiAndroid className="text-green-300" /> },
        { name: "Local DB", platform: "SQLite", desc: "Embedded storage", status: "🟢 Active", latency: "1ms", color: "bg-blue-400", icon: <SiSqlite className="text-blue-500" /> },
        { name: "Analytics", platform: "Local", desc: "On-device stats processing", status: "⚡ Fast", latency: "3ms", color: "bg-yellow-400", icon: <FaDatabase className="text-yellow-300" /> },
      ],
    },
    {
      id: "funkovault",
      title: "FunkoVault",
      description: "A mobile app for Funko collectors to search, track, organize, and manage their collections.",
      images: [flutterLiked, flutterFolder, flutterSearch],
      github: "https://github.com/yourusername/funkovault",
      stack: [
        { name: "Flutter", color: "text-cyan-400", icon: SiFlutter },
        { name: "SQLite", color: "text-blue-400", icon: SiSqlite },
        { name: "Node.js", color: "text-green-400", icon: FaNodeJs },
        { name: "Express", color: "text-yellow-400", icon: SiExpress },
      ],
      motivation:
        "Collecting Funkos is fun, but tracking duplicates, wishlist items, and values quickly gets messy without a proper tool.",
      overview:
        "FunkoVault lets users browse thousands of figures, save favorites, track collections, and fetch paginated search results via a Node.js Express backend.",
      features: [
        "🔍 Paginated Funko search",
        "📦 Track owned & wishlist items",
        "🗂️ Organize figures by tags & series",
        "📱 Offline support via SQLite",
      ],
      challenges:
        "Building paginated queries that stay fast even with large datasets, and syncing Flutter UI with offline SQLite storage.",
      plans:
        "Adding barcode scanning, push notifications for price drops, and cloud sync between devices.",
      frontend: [
        { string: "final db = await openDatabase('funkos.db');", color: "text-yellow-400" },
        { string: "setState(() => favorites.add(item));", color: "text-cyan-400" },
        { string: "ListView.builder(itemCount: items.length ...)", color: "text-green-400" },
        { string: "Navigator.push(context, route);", color: "text-blue-400" },
        { string: "FutureBuilder(future: fetch(), builder: ...)", color: "text-pink-400" },
      ],
      backend: [
        { string: "app.get('/funkos', async (req, res) => { ... });", color: "text-yellow-400" },
        { string: "const limit = parseInt(req.query.limit);", color: "text-cyan-400" },
        { string: "const data = await db.find().skip(skip).limit(limit);", color: "text-green-400" },
        { string: "res.json({ results, nextPage });", color: "text-blue-400" },
        { string: "app.listen(4000, () => console.log('API running'));", color: "text-pink-400" },
      ],
      events: [
        "Fetched 20 Funkos (Page 3)",
        "Added 'Batman #01' to collection",
        "Synced SQLite local cache",
        "Wishlist updated: + 2 items",
        "Paginated request → 120ms",
        "Cache rebuild complete",
      ],
      initialUptime: 99.89,
      initialLogs: ["[system] initializing funkovault monitor..."],
      logPool: [
        "[api] paginated query executed",
        "[cache] sqlite sync complete",
        "[monitor] uptime check passed ✅",
        "[backend] rate limit window reset",
        "[search] indexing completed",
      ],
      lastDeployed: "4h ago",
      services: [
        { name: "Frontend", platform: "Flutter", desc: "Cross-platform mobile app", status: "📱 Live", latency: "—", color: "bg-blue-400", icon: <SiFlutter className="text-blue-300" /> },
        { name: "Backend", platform: "Node.js", desc: "Search API", status: "🟢 Healthy", latency: "210ms", color: "bg-green-400", icon: <FaNodeJs className="text-green-300" /> },
        { name: "Database", platform: "SQLite", desc: "Local storage", status: "🟢 Connected", latency: "1ms", color: "bg-emerald-400", icon: <SiSqlite className="text-blue-700" /> },
        { name: "Search Engine", platform: "Express", desc: "Paginated endpoints", status: "⚡ Active", latency: "85ms", color: "bg-yellow-400", icon: <SiExpress className="text-gray-200" /> },
      ],
    },
    {
      id: "cinevault",
      title: "CineVault",
      description: "A movie-tracking and recommendation platform powered by collaborative filtering.",
      images: [reactHome, reactDiscover, reactMovie],
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
    {
      id: "miniangel",
      title: "MiniAngel Tracker",
      description: "A collector’s web app for tracking Sonny Angel and blind-box collections.",
      images: [angelDiary, angelSearch, angelFriend, angelPost],
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
      id: "tacmap",
      title: "Tac Map",
      description: "A real-time tactical whiteboard for gamers to plan strategies together.",
      images: [tacHome, tacHost, tacViewer],
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
    }
  ];

  const project = projects.find((p) => p.id === currentProject.name);

  // Example renderings for some files
  if (currentProject.name === "about.html") return <AboutMe/>;
  if (currentProject.name === "github.md") return <GitHub/>;
  if (currentProject.name === "contact.py") return <Contact/>
  if (currentProject.name === "hobbies.js") return <Hobbies/>

  if (currentFile === "readme") return <ReadMe project={project} />
  else if (currentFile === "architecture") return <Architecture images={project.images} />
  else if (currentFile === "backend") return <Backend lines={project.backend} />
  else if (currentFile === "frontend") return <Frontend lines={project.frontend} />
  else if (currentFile === "websocket") return <WebSocket project={project} />
  else return <Deployment project={project} />
  
};

export default WorkspaceView;

import Workspace from "./Workspace";
import Deployment from "./Deployment";
import ReadMe from "./ReadMe";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCloudUploadAlt, FaReact } from "react-icons/fa";
import { FaJava, FaNodeJs, FaDatabase, FaPaintbrush } from "react-icons/fa6";
import { SiPython, SiDjango, SiMongodb, SiPostgresql, SiVercel, SiRender, SiSupabase, SiAndroid, SiSqlite, SiFlutter, SiExpress, SiGithub, SiGooglecolab, SiJira, SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiFigma, SiGit, SiCanvas, SiSocketdotio } from "react-icons/si";
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
import { BiHeart } from "react-icons/bi";

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
      github: "https://github.com/Clickbaithate/BudgetApp",
      stack: [
        { name: "Java", color: "text-yellow-400", icon: FaJava },
        { name: "Android Studio", color: "text-green-400", icon: SiAndroid },
        { name: "SQLite", color: "text-blue-400", icon: SiSqlite },
      ],
      motivation: "I wanted a lightweight budgeting tool that didn't rely on cloud syncing or external accounts — something fast, offline, and simple.",
      overview: "PennyPal allows users to set/reset their budget, add/edit/delete transactions, and view stats on spending categories. The entire app works offline using SQLite.",
      features: [
        "💰 Set, edit, or reset your monthly budget",
        "🧾 Add, edit, and delete transactions",
        "📊 Spending stats by category",
        "📱 Clean offline-first mobile experience",
      ],
      challenges: "Designing efficient SQLite queries for filtering and aggregating spending data, while keeping UI simple and application running smoothly.",
      plans: "Exporting data to CSV, and the ability to have multiple budgets.",
      frontend: [
        { string: "public class AddTransactionScreen extends AppCompatActivity {", color: "text-blue-400" },
        { string: "   int tempMonth, tempDay, tempYear;", color: "text-emerald-400" },
        {},
        { string: "   protected void onCreate(Bundle b) {", color: "text-amber-300" },
        { string: "      setContentView(R.layout.activity_add_transaction);", color: "text-fuchsia-300" },
        { string: "      TextView type = findViewById(R.id.transactionTypeInput);", color: "text-fuchsia-400" },
        { string: "      TextView amt = findViewById(R.id.transactionAmountInput);", color: "text-fuchsia-300" },
        { string: "      TextView date = findViewById(R.id.transactionDateInput);", color: "text-fuchsia-400" },
        { string: "      MyDatabaseHelper myDB = new MyDatabaseHelper(this);", color: "text-fuchsia-300" },
        { string: "      type.addTextChangedListener(simple(() -> checkInputFields()));", color: "text-fuchsia-400" },
        { string: "      amt.addTextChangedListener(simple(() -> checkInputFields()));", color: "text-fuchsia-300" },
        { string: "      date.setOnClickListener(v -> showPicker(date));", color: "text-fuchsia-400" },
        { string: "      findViewById(R.id.saveButtonAddTransaction).setOnClickListener(v -> save(myDB, amt, type));", color: "text-fuchsia-300" },
        { string: "   }", color: "text-amber-300" },
        {},
        { string: "   void showPicker(TextView d) {", color: "text-amber-300" },
        { string: "      new DatePickerDialog(this,(v,yr,mo,da)->{ tempYear=yr; tempMonth=mo+1; tempDay=da; d.setText((mo+1)+\"/\"+da+\"/\"+yr); },2024,0,1).show();", color: "text-fuchsia-300" },
        { string: "   }", color: "text-amber-300" },
        {},
        { string: "   void save(MyDatabaseHelper db, TextView amt, TextView type) {", color: "text-amber-300" },
        { string: "      db.addTransaction(Double.parseDouble(amt.getText().toString()), type.getText().toString(), tempMonth, tempDay, tempYear);", color: "text-fuchsia-300" },
        { string: "      Toast.makeText(this, \"Saved\", Toast.LENGTH_SHORT).show();", color: "text-fuchsia-400" },
        { string: "   }", color: "text-amber-300" },
        { string: "}", color: "text-blue-400" }
      ],
      backend: [
        { string: "public class MyDatabaseHelper extends SQLiteOpenHelper {", color: "text-blue-400" },
        { string: "   private static final String TABLE_NAME = \"my_budget\";", color: "text-emerald-400" },
        {},
        { string: "   public void deleteData(SQLiteDatabase db) {", color: "text-amber-300" },
        { string: "      db.execSQL(\"DELETE FROM \" + TABLE_NAME);", color: "text-fuchsia-300" },
        { string: "      db.delete(\"SQLITE_SEQUENCE\", \"NAME = ?\", new String[]{TABLE_NAME});", color: "text-fuchsia-400" },
        { string: "   }", color: "text-amber-300" },
        {},
        { string: "   Cursor readAllData() {", color: "text-amber-300" },
        { string: "      String q = \"SELECT * FROM \" + TABLE_NAME;", color: "text-fuchsia-300" },
        { string: "      return getReadableDatabase().rawQuery(q, null);", color: "text-fuchsia-400" },
        { string: "   }", color: "text-amber-300" },
        {},
        { string: "   void addTransaction(double amount, String name, int m, int d, int y) {", color: "text-amber-300" },
        { string: "      ContentValues cv = new ContentValues();", color: "text-fuchsia-300" },
        { string: "      cv.put(COLUMN_AMOUNT, amount);", color: "text-fuchsia-400" },
        { string: "      cv.put(COLUMN_NAME, name);", color: "text-fuchsia-300" },
        { string: "      cv.put(COLUMN_MONTH, m); cv.put(COLUMN_DAY, d); cv.put(COLUMN_YEAR, y);", color: "text-fuchsia-400" },
        { string: "      getWritableDatabase().insert(TABLE_NAME, null, cv);", color: "text-fuchsia-300" },
        { string: "   }", color: "text-amber-300" },
        { string: "}", color: "text-blue-400" }
      ],
      events: [
        "Inserted transaction into budget table",
        "Updated current balance display",
        "Loaded 12 items from database",
        "Applied red color for negative value",
        "Refreshed RecyclerView adapter",
        "Parsed amount from input field",
        "Date selected from DatePicker",
        "Committed SQL insert operation",
        "Recalculated monthly total",
        "Toast displayed: 'Transaction Saved'"
      ],
      initialUptime: 99.9,
      initialLogs: ["[system] initializing budget engine..."],
      logPool: [
        "[sqlite] opened writable database",
        "[sqlite] executed INSERT on my_budget",
        "[sqlite] cursor loaded 14 rows",
        "[ui] TextView updated → current balance",
        "[ui] DatePicker dialog shown",
        "[ui] saveButton enabled",
        "[adapter] dataset changed → notifyDataSetChanged()",
        "[db-helper] onUpgrade triggered",
        "[transaction] parsed user input → $23.40",
        "[toast] 'Transaction saved' displayed",
      ],
      lastDeployed: "5h ago",
      services: [
        { name: "Mobile App", platform: "Android Studio", desc: "Budget App", status: "📱 Stable", latency: "—", color: "bg-green-400", icon: <SiAndroid className="text-green-300" /> },
        { name: "Database", platform: "SQLite", desc: "Local storage", status: "🟢 Active", latency: "1ms", color: "bg-blue-400", icon: <SiSqlite className="text-blue-500" /> },
        { name: "Language", platform: "Java", desc: "Core business logic", status: "⚡ Fast", latency: "2ms", color: "bg-red-400", icon: <FaJava className="text-red-300" /> },
        { name: "Version Control", platform: "GitHub", desc: "Repo & Collaboration", status: "🟢 Active", latency: "—", color: "bg-gray-400", icon: <SiGithub className="text-gray-200" /> }
      ],
    },
    {
      id: "funkovault",
      title: "FunkoVault",
      description: "A mobile app for Funko collectors to search, track, organize, and manage their collections.",
      images: [flutterLiked, flutterFolder, flutterSearch],
      github: "https://github.com/Clickbaithate/funko_vault",
      stack: [
        { name: "Flutter", color: "text-cyan-400", icon: SiFlutter },
        { name: "SQLite", color: "text-blue-400", icon: SiSqlite },
        { name: "Node.js", color: "text-green-400", icon: FaNodeJs },
        { name: "Express", color: "text-yellow-400", icon: SiExpress },
      ],
      motivation: "Collecting Funkos is exciting, but keeping track of your wishlist, collection, and values quickly becomes overwhelming without a proper tool.",
      overview: "FunkoVault lets users browse thousands of figures, save favorites, track collections, and fetch paginated search results via a Node.js Express backend.",
      features: [
        "🔍 Quick Funko search",
        "📦 Track owned & wishlist items",
        "🗂️ Keep your collection neatly categorized your way",
        "📱 Offline support, no account needed",
      ],
      challenges: "One major challenge was maintaining clean and consistent state management as the app scaled.",
      plans: "Adding barcode scanning, pulling prices from multiple sources, and implementing a solid state management setup.",
      frontend: [
        { string: "class _HomePageState extends ConsumerState<HomePage> {", color: "text-blue-400" },
        { string: "   final _scroll = ScrollController();", color: "text-emerald-400" },
        { string: "   bool loading = true;", color: "text-emerald-300" },
        { string: "   bool contentVisible = false;", color: "text-emerald-400" },
        {},
        { string: "   Widget build(BuildContext context) {", color: "text-amber-300" },
        { string: "      final data = ref.watch(homeFunkoListProvider);", color: "text-fuchsia-400" },
        { string: "      return Scaffold(", color: "text-fuchsia-300" },
        { string: "         appBar: AppBar(title: Text('iFunko')),", color: "text-fuchsia-400" },
        { string: "         body: _body(data),", color: "text-fuchsia-300" },
        { string: "      );", color: "text-fuchsia-400" },
        { string: "   }", color: "text-amber-300" },
        {},
        { string: "   Widget _body(asyncData) {", color: "text-amber-300" },
        { string: "      return asyncData.when(", color: "text-fuchsia-400" },
        { string: "         data: (list) => GridView.builder(", color: "text-fuchsia-300" },
        { string: "            controller: _scroll,", color: "text-fuchsia-400" },
        { string: "            itemCount: list.length,", color: "text-fuchsia-300" },
        { string: "            itemBuilder: (c, i) => FunkoCard(funko: list[i]),", color: "text-fuchsia-400" },
        { string: "         ),", color: "text-fuchsia-300" },
        { string: "         loading: () => Center(child: CircularProgressIndicator()),", color: "text-fuchsia-400" },
        { string: "         error: (e, s) => Center(child: Text('Error!'))", color: "text-fuchsia-300" },
        { string: "      );", color: "text-fuchsia-400" },
        { string: "   }", color: "text-amber-300" },

        { string: "}", color: "text-blue-400" }
      ],
      backend: [
        { string: "class DatabaseService {", color: "text-blue-400" },
        { string: "   Future<Database> getDatabase() async {", color: "text-amber-300" },
        { string: "      final path = join(await getDatabasesPath(), 'FunkoPops.db');", color: "text-amber-400" },
        { string: "      return await openDatabase(path, version: 1, onCreate: _createTables);", color: "text-amber-300" },
        { string: "   }", color: "text-amber-400" },
        {},
        { string: "   Future<void> _createTables(Database db, int v) async {", color: "text-pink-400" },
        { string: "      await db.execute('CREATE TABLE liked (Id INTEGER, Name TEXT, Image TEXT UNIQUE);');", color: "text-pink-300" },
        { string: "      await db.execute('CREATE TABLE folders (Id INTEGER, Name TEXT UNIQUE);');", color: "text-pink-400" },
        { string: "      await db.execute('CREATE TABLE folder_items (Id INTEGER, FolderName TEXT, Image TEXT UNIQUE);');", color: "text-pink-300" },
        { string: "   }", color: "text-pink-400" },
        {},
        { string: "   Future<List<Funko>> getLikedFunkos() async {", color: "text-emerald-400" },
        { string: "      final rows = await (await database).query('liked');", color: "text-emerald-300" },
        { string: "      return rows.map((e) => Funko(id: e['Id'], name: e['Name'], image: e['Image'])).toList();", color: "text-emerald-400" },
        { string: "   }", color: "text-emerald-300" },
        {},
        { string: "   Future<void> addToFolder(String folder, Funko f) async {", color: "text-cyan-400" },
        { string: "      final db = await database;", color: "text-cyan-300" },
        { string: "      await db.insert('folder_items', { 'FolderName': folder, 'Image': f.image });", color: "text-cyan-400" },
        { string: "   }", color: "text-cyan-300" },
        { string: "}", color: "text-blue-400" }
      ],
      events: [
        "Fetched 20 Funkos (Page 3)",
        "Added 'Batman #01' to collection",
        "Synced SQLite local cache",
        "Wishlist updated: + 2 items",
        "Paginated request → 120ms",
        "Cache rebuild complete",
        "Removed 'Iron Man #05' from collection",
        "Folder 'Favorites' created",
        "FunkoCard rendered: 12 items",
        "Offline mode enabled for browsing",
        "Database migration applied successfully"
      ],
      initialUptime: 99.89,
      initialLogs: ["[system] initializing funkovault monitor..."],
      logPool: [
        "[flutter] GridView rebuilt with 24 items",
        "[flutter] ScrollController reached max extent",
        "[flutter] setState triggered → UI updated",
        "[node] /funkos endpoint responded 200 OK",
        "[node] User authentication token refreshed",
        "[express] Middleware validation passed",
        "[express] Request body parsed successfully",
        "[sqlite] Local DB transaction committed",
        "[sqlite] Query executed → 12 rows returned",
        "[flutter] FunkoCard tapped → detail page opened"
      ],
      lastDeployed: "4h ago",
      services: [
        { name: "Frontend", platform: "Flutter", desc: "Cross-platform mobile app", status: "📱 Live", latency: "—", color: "bg-blue-400", icon: <SiFlutter className="text-blue-300" /> },
        { name: "Backend", platform: "Node.js", desc: "Custom API", status: "🟢 Healthy", latency: "210ms", color: "bg-green-400", icon: <FaNodeJs className="text-green-300" /> },
        { name: "Search Engine", platform: "Express", desc: "Paginated endpoints", status: "⚡ Active", latency: "85ms", color: "bg-yellow-400", icon: <SiExpress className="text-gray-200" /> },
        { name: "Database", platform: "SQLite", desc: "Local storage", status: "🟢 Connected", latency: "1ms", color: "bg-emerald-400", icon: <SiSqlite className="text-blue-700" /> },
      ],
    },
    {
      id: "cinevault",
      title: "CineVault",
      description: "A platform for tracking movies and generating recommendations using collaborative filtering.",
      images: [reactHome, reactDiscover, reactMovie],
      github: "https://github.com/Clickbaithate/senior-project",
      stack: [
        { name: "JavaScript", color: "text-yellow-400", icon: IoLogoJavascript },
        { name: "React", color: "text-cyan-400", icon: FaReact },
        { name: "Supabase", color: "text-green-500", icon: SiSupabase },
        { name: "Python", color: "text-amber-400", icon: SiPython }, 
        { name: "Google Colab", color: "text-orange-400", icon: SiGooglecolab }, 
      ],
      motivation: "I wanted to explore recommender systems and create a way for users to discover new films.",
      overview: "CineVault allows users to rate films, build watchlists, and get suggestions using collaborative filtering and user profile vectors.",
      features: [
        "🎥 Personalized movie recommendations",
        "⭐ Watchlist & favorites tracking",
        "🧮 Machine learning-powered similarity search",
        "🌓 Light/dark UI modes",
      ],
      challenges: "Designing a performant recommendation engine with minimal cold-start issues while keeping recommendation generation time low.",
      plans: "Migrating backend to a dedicated server, and enhancing security.",
      frontend: [
        { string: "const DiscoverPage = () => {", color: "text-yellow-400" },
        { string: "   const [user, setUser] = useState(null);", color: "text-yellow-300" },
        { string: "   const [trendingMovies, setTrendingMovies] = useState();", color: "text-yellow-400" },
        { string: "   const [popularMovies, setPopularMovies] = useState();", color: "text-yellow-300" },
        {},
        { string: "   useEffect(() => { if(scrollRef.current) scrollRef.current.scrollTo({top:0, behavior:'smooth'}); }, []);", color: "text-cyan-400" },
        { string: "   const fetchProfile = async () => {", color: "text-cyan-300" },
        { string: "      const { data: { session } } = await supabase.auth.getSession();", color: "text-cyan-400" },
        { string: "      if(session) { setUser(session.user); setTrendingMovies(await fetchTrending()); setPopularMovies(await fetchPopular()); }", color: "text-cyan-300" },
        { string: "   };", color: "text-cyan-400" },
        {},
        { string: "   useEffect(() => { fetchProfile(); }, []);", color: "text-pink-400" },
        { string: "   const fetchTrending = async () => { return supabase.from('Movies').select().in('movie_id', movieIds); };", color: "text-pink-300" },
        { string: "   const fetchPopular = async () => { return supabase.from('Movies').select().in('movie_id', popularIds); };", color: "text-pink-400" },
        {},
        { string: "   return (", color: "text-green-400" },
        { string: "      <div className='ml-[100px] min-h-screen'>", color: "text-green-400" },
        { string: "         <SearchBar placeholder='SEARCH...' />", color: "text-green-300" },
        { string: "         <DiscoverCarousel movies={trendingMovies} />", color: "text-green-400" },
        { string: "         {trendingMovies ? <HorizontalList movies={trendingMovies} /> : <DotLottieReact src='loading.json' loop autoplay />}", color: "text-green-300" },
        { string: "      </div>", color: "text-green-400" },
        { string: "   );", color: "text-green-300" },
        { string: "};", color: "text-yellow-400" },
        {},
        { string: "export default DiscoverPage;", color: "text-gray-400" },
      ],
      backend: [
        { string: "const LoginPage = ({ onProfileComplete }) => {", color: "text-blue-400" },
        { string: "   const [email, setEmail] = useState('');", color: "text-yellow-400" },
        { string: "   const [password, setPassword] = useState('');", color: "text-yellow-300" },
        { string: "   const [error, setError] = useState(null);", color: "text-yellow-400" },
        { string: "   const navigate = useNavigate();", color: "text-yellow-300" },
        { string: "", color: "text-gray-400" },
        { string: "   useEffect(() => { document.body.style.overflow='hidden'; return ()=>{document.body.style.overflow='';}; }, []);", color: "text-green-400" },
        { string: "", color: "text-gray-400" },
        { string: "   const handleSubmit = async (e) => {", color: "text-pink-400" },
        { string: "      e.preventDefault();", color: "text-pink-300" },
        { string: "      try {", color: "text-pink-400" },
        { string: "         const { data, error } = await supabase.auth.signInWithPassword({ email, password });", color: "text-pink-300" },
        { string: "         if (error) throw error;", color: "text-pink-400" },
        { string: "         if (data.user && !data.user.email_confirmed_at) navigate('/emailConfirmationPage');", color: "text-pink-300" },
        { string: "         else { onProfileComplete(); navigate('/homePage'); }", color: "text-pink-400" },
        { string: "      } catch (err) {", color: "text-pink-300" },
        { string: "         setError(`Error: ${err.message}`);", color: "text-pink-400" },
        { string: "      }", color: "text-pink-300" },
        { string: "   };", color: "text-pink-400" },
        { string: "", color: "text-gray-400" },
        { string: "   return <div className='bg-gray-100'>/* Login UI JSX here */</div>;", color: "text-cyan-400" },
        { string: "};", color: "text-blue-400" },
        {},
        { string: "export default LoginPage;", color: "text-gray-400" }
      ],
      events: [
        "User rated 'Interstellar' ⭐⭐⭐⭐⭐",
        "Generated recommendations → 10 similar titles",
        "Watchlist updated: + 'Blade Runner 2049'",
        "Collaborative filtering model retrained (12k users)",
        "Fetched 50 trending movies from TMDB API",
        "Session expired → user re-authenticated",
        "New review submitted: 'Inception' – insightful and detailed",
        "Top 5 movies for you recalculated based on recent ratings",
        "Movie metadata updated: 'The Matrix' → director, cast, genres",
        "Notification sent: 'Your weekly watchlist summary'",
        "Real-time analytics updated → 3,200 active sessions tracked"
      ],
      initialUptime: 99.95,
      initialLogs: ["[system] initializing recommendation monitor..."],
      logPool: [
        "[React] component LoginPage rendered",
        "[React] state updated → userEmail set",
        "[Supabase] fetched user profile data",
        "[Supabase] inserted new movie rating",
        "[Supabase] subscription to realtime updates established",
        "[Python] collaborative filtering retraining started",
        "[Python] processed 12k user ratings",
        "[Python] recommendation model saved to disk",
        "[Colab] notebook executed → data preprocessing complete",
        "[Colab] plotted user rating distribution graph"
      ],
      lastDeployed: "1h ago",
      services: [
        { name: "Frontend", platform: "React", desc: "Web app frontend", status: "✅ Live", latency: "175ms", color: "bg-blue-400", icon: <FaReact className="text-blue-300" /> },
        { name: "Database", platform: "Supabase", desc: "Movies DB & User Authentication", status: "🟢 Connected", latency: "160ms", color: "bg-emerald-400", icon: <SiMongodb className="text-green-300" /> },
        { name: "Recommendation Engine", platform: "Python ML", desc: "Collaborative filtering", status: "⚡ Active", latency: "95ms", color: "bg-yellow-400", icon: <SiPython className="text-yellow-500" /> },
        { name: "Issue Tracking", platform: "Jira", desc: "Tracking Tasks", status: "⏳ In Progress", latency: "0ms", color: "bg-blue-300", icon: <SiJira className="text-blue-300" /> }
      ],
    },
    {
      id: "miniangel",
      title: "MiniAngel Tracker",
      description: "A collector’s web app for tracking Sonny Angel's while also including social features.",
      images: [angelDiary, angelSearch, angelFriend, angelPost],
      github: "https://github.com/Clickbaithate/MiniAngel",
      stack: [
        { name: "React", color: "text-blue-300", icon: SiReact },
        { name: "JavaScript", color: "text-yellow-300", icon: SiJavascript },
        { name: "TailwindCSS", color: "text-blue-500", icon: SiTailwindcss },
        { name: "Figma", color: "text-red-300", icon: SiFigma },
        { name: "Git", color: "text-purple-300", icon: SiGit },
        { name: "GitHub", color: "text-gray-300", icon: SiGithub },
        { name: "NodeJS", color: "text-green-300", icon: SiNodedotjs },
        { name: "Express", color: "text-green-300", icon: SiExpress },
        { name: "Supabase", color: "text-green-400", icon: SiSupabase },
        { name: "PostgreSQL", color: "text-indigo-400", icon: SiPostgresql },
      ],
      motivation: "Designed to give the client the collecting features she wanted after feeling the official app didn’t meet her needs.",
      overview: "A social collecting app to search, track, and share Sonny Angel collections with friends.",
      features: [
        "🔍 Search figures, series, and tags",
        "📦 Track owned & wishlist collectibles",
        "📸 Upload diary photos & posts",
        "👥 Follow friends and view their collections"
      ],
      challenges: "Ensuring strong user authentication and protecting sensitive collection data became the core challenge.",
      plans: "Launch mobile app (iOS + Android)",
      frontend: [
        { string: "const HomePage = () => {", color: "text-blue-400" },
        { string: "  const [entries, setEntries] = useState([]);", color: "text-blue-300" },
        { string: "  const [user, setUser] = useState(null);", color: "text-blue-300" },
        { string: "  const [isLoading, setIsLoading] = useState(true);", color: "text-blue-300" },
        {},
        { string: "  const loadData = async () => {", color: "text-purple-400" },
        { string: "    const u = await getUser();", color: "text-purple-300" },
        { string: "    const list = await fetchAllDiary(u);", color: "text-purple-300" },
        { string: "    setEntries(list.sort((a,b)=>new Date(b.date)-new Date(a.date)));", color: "text-purple-300" },
        { string: "    setUser(u);", color: "text-purple-300" },
        { string: "    setIsLoading(false);", color: "text-purple-300" },
        { string: "  };", color: "text-purple-400" },
        {},
        { string: "  useEffect(()=>{ setIsLoading(true); loadData(); },[]);", color: "text-blue-300" },
        {},
        { string: "  const renderUI = () => {", color: "text-green-400" },
        { string: "    const props = { entries, user, isLoading };", color: "text-green-300" },
        { string: "    const mobile = useMediaQuery({ maxWidth:1024 });", color: "text-green-300" },
        { string: "    return mobile ? <DiaryPageMobile {...props}/> : <DiaryPageDesktop {...props}/>;", color: "text-green-300" },
        { string: "  };", color: "text-green-400" },
        {},
        { string: "  return renderUI();", color: "text-blue-300" },
        { string: "};", color: "text-blue-400" },
        {},
        { string: "export default HomePage;", color: "text-gray-400" },
      ],
      backend: [
        { string: "const app = require('express')();", color: "text-red-400" },
        { string: "app.use(cors()); app.use(json()); app.use(rateLimiter);", color: "text-red-300" },
        { string: "app.post('/addDiary', upload.single('image'), addDiary);", color: "text-red-300" },
        {},
        { string: "const addDiary = async (req,res)=>{", color: "text-purple-400" },
        { string: "  const token = req.headers.authorization;", color: "text-purple-300" },
        { string: "  const img = req.file; if(!img||!token) return res.status(400);", color: "text-purple-200" },
        { string: "  const supa = getSupabase(token);", color: "text-purple-300" },
        {},
        { string: "  const { data:user } = await supa.auth.getUser(token);", color: "text-purple-200" },
        { string: "  const file = uuidv4();", color: "text-purple-300" },
        { string: "  await supa.storage.from('diary_images').upload(`${user.id}/${file}`,img.buffer);", color: "text-purple-200" },
        { string: "  await supa.from('entries').upsert({ entry_id:file, user_id:user.id, title:req.query.title });", color: "text-purple-300" },
        {},
        { string: "  return res.json({ ok:true, id:file });", color: "text-purple-200" },
        { string: "};", color: "text-purple-400" },
        {},
        { string: "app.get('/vault', (req,res)=>fetchVault(req,res));", color: "text-green-400" },
        { string: "app.post('/addFriend',(req,res)=>addFriend(req,res));", color: "text-green-300" },
        { string: "app.delete('/deleteEntry',(req,res)=>deleteEntry(req,res));", color: "text-green-300" },
        { string: "app.get('/recent', (req,res)=>fetchRecentlyCollected(req,res));", color: "text-green-300" },
        {},
        { string: "app.listen(3000,()=>console.log('API live'));", color: "text-gray-400" },
        { string: "module.exports = app;", color: "text-gray-400" },
      ],
      events: [
        "Fetching collection data from API...",
        "Synced 23 new figures with wishlist",
        "Detected duplicate entry: 'Animal Series 4 - Koala'",
        "Background task → price refresh complete",
        "User uploaded image for 'Marine Series 3'",
        "Cache cleared: updated collection stats",
        "Barcode matched: 'Fruit Series 2 - Peach'",
        "Updated price sources: StockX • eBay • HobbyLink",
        "State manager diff applied → 7 fields updated",
        "Local dataset optimized: 42 stale items removed",
      ],
      initialUptime: 99.92,
      initialLogs: ["[system] initializing collection monitor..."],
      logPool: [
        "[react] state hydrated from local cache",
        "[supabase] backup snapshot saved",
        "[node] background sync queue processed",
        "[api] fetched latest figures",
        "[react-query] stale data revalidated",
        "[supabase] session token refreshed",
        "[cache] cleared collection stats",
        "[node-cron] midnight task executed",
        "[websocket] live update broadcasted",
        "[monitor] uptime check passed ✅",
      ],
      lastDeployed: "3h ago",
      services: [
        { name: "Frontend", platform: "ReactJS", desc: "Web app frontend", status: "✅ Live", latency: "192ms", color: "bg-blue-400", icon: <SiReact className="text-blue-300" /> },
        { name: "Backend", platform: "NodeJS", desc: "API Endpoints", status: "🟢 Healthy", latency: "210ms", color: "bg-green-400", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Database", platform: "PostgreSQL", desc: "Collection DB", status: "🟢 Connected", latency: "158ms", color: "bg-blue-700", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "User Authentication", platform: "Supabase", desc: "Secure User Authentication & Storage", status: "🟢 Connected", latency: "32ms", color: "bg-emerald-300", icon: <SiSupabase className="text-green-300" /> }
      ],
    },
    {
      id: "tacmap",
      title: "Tac Map",
      description: "A real-time tactical whiteboard for gamers to plan strategies together.",
      images: [tacHome, tacHost, tacViewer],
      github: "https://github.com/Clickbaithate/TacMap",
      stack: [
        { name: "JavaScript", color: "text-yellow-400", icon: IoLogoJavascript },
        { name: "React", color: "text-cyan-400", icon: FaReact },
        { name: "RoughJS", color: "text-red-200", icon: BiHeart },
        { name: "NodeJS", color: "text-green-400", icon: FaNodeJs },
        { name: "Socket.IO", color: "text-teal-200", icon: SiSocketdotio },
      ],
      motivation:
        "I wanted to create a tool that captures the teamwork and strategy of online games. Many teams rely on screenshots or messy notes — Tac Map gives them a clean, real-time way to visualize tactics before matches.",
      overview:
        "Tac Map is a collaborative whiteboard where players upload maps, draw plans, and coordinate live, with changes synced instantly via WebSockets.",
      features: [
        "🗺️ Upload custom game maps",
        "✏️ Draw and annotate with teammates in real-time",
        "💬 Real-time chat with teammates",
        "🔒 Private rooms for team strategy",
      ],
      challenges: "Updating the canvas in real-time for multiple users was challenging.",
      plans: "Next steps include custom drag-and-drop icons.",
      frontend: [
        { string: "const RoomPage = ({ user, socket }) => {", color: "text-blue-400" },
        { string: "   const [tool, setTool] = useState('pencil');", color: "text-yellow-400" },
        { string: "   const [messages, setMessages] = useState([]);", color: "text-cyan-400" },
        { string: "   const [color, setColor] = useState('#000000');", color: "text-yellow-400" },
        { string: "   const canvasRef = useRef(null);", color: "text-cyan-400" },
        { string: "   const [userCount, setUserCount] = useState(0);", color: "text-yellow-400" },
        { string: "   useEffect(() => { socket.on('userCountUpdate', ({count}) => setUserCount(count)); }, [socket]);", color: "text-cyan-400" },
        {},
        { string: "   useLayoutEffect(() => {", color: "text-pink-400" },
        { string: "      const canvas = canvasRef.current;", color: "text-pink-200" },
        { string: "      const ctx = canvas.getContext('2d');", color: "text-pink-400" },
        { string: "      elements.forEach(el => { if(el.type==='pencil') ctx.strokeStyle=color; });", color: "text-pink-200" },
        { string: "   }, [elements, color]);", color: "text-pink-400" },
        {},
        { string: "   return (", color: "text-green-400" },
        { string: "      <div className='w-full h-screen'>", color: "text-green-200" },
        { string: "         <Title userCount={userCount} />", color: "text-green-400" },
        { string: "         <Toolbar tool={tool} setTool={setTool} color={color} setColor={setColor} />", color: "text-green-200" },
        { string: "         <canvas ref={canvasRef} onPointerDown={handleMouseDown} onPointerMove={handleMouseMove} onPointerUp={handleMouseUp} />", color: "text-green-400" },
        { string: "         <div>{messages.map((m,i)=><p key={i}>{m.name}: {m.message}</p>)}</div>", color: "text-green-200" },
        { string: "      </div>", color: "text-green-400" },
        { string: "   );", color: "text-green-200" },
        { string: "};", color: "text-blue-400" },
        {},
        { string: "export default RoomPage;", color: "text-gray-400" },
      ],
      backend: [
        { string: "const express = require('express');", color: "text-yellow-400" },
        { string: "const app = express();", color: "text-yellow-400" },
        { string: "const server = require('http').createServer(app);", color: "text-yellow-400" },
        { string: "const { Server } = require('socket.io');", color: "text-yellow-400" },
        { string: "const io = new Server(server, { cors: { origin: '*', methods: ['GET','POST'] } });", color: "text-yellow-400" },
        {},
        { string: "const rooms = {};", color: "text-cyan-400" },
        {},
        { string: "io.on('connection', (socket) => {", color: "text-blue-400" },
        { string: "   socket.on('userJoined', (data, ack) => {", color: "text-blue-400" },
        { string: "      const roomId = data.roomId;", color: "text-cyan-400" },
        { string: "      const userName = data.name;", color: "text-cyan-400" },
        { string: "      socket.join(roomId);", color: "text-cyan-400" },
        { string: "      if (!rooms[roomId]) rooms[roomId] = { img: null, users: new Set(), messages: [] };", color: "text-cyan-400" },
        { string: "      rooms[roomId].users.add(socket.id);", color: "text-cyan-400" },
        { string: "      io.to(roomId).emit('userCountUpdate', { roomId, count: rooms[roomId].users.size, name: userName });", color: "text-cyan-400" },
        { string: "      if (rooms[roomId].img) socket.emit('whiteboardDataResponse', { img: rooms[roomId].img, roomId });", color: "text-cyan-400" },
        { string: "   });", color: "text-blue-400" },
        { string: "});", color: "text-blue-400" },
        {},
        { string: "app.get('/', (req, res) => res.send('Test!'));", color: "text-pink-400" },
        { string: "const port = process.env.PORT || 5000;", color: "text-pink-400" },
        { string: "server.listen(port, () => console.log(`Server is running on port ${port}`));", color: "text-pink-400" },
      ],
      events: [
        "Client connected [ID: 42a1]",
        "Broadcasting update → tactical room #1",
        "Ping → Pong (latency 92ms)",
        "Client disconnected [ID: 42a1]",
        "Syncing live map state...",
        "New client joined [ID: 7f93]",
        "Received drawing data from [ID: 7f93]",
        "Undo action triggered by [ID: 2b4e]",
        "Chat message → 'Attack now!' from [ID: 9c12]",
        "Client reconnected [ID: 42a1]",
      ],
      initialUptime: 99.97,
      initialLogs: ["[system] initializing deployment monitor..."],
      logPool: [
        "[vercel] incremental build completed",
        "[render] scaling instance to handle 2x load",
        "[supabase] backup snapshot saved",
        "[websocket] ping → pong latency 93ms",
        "[monitor] uptime check passed ✅",
        "[react] component HomePage mounted",
        "[socket.io] client connected [ID: a3f1]",
        "[roughjs] new path added to canvas",
        "[supabase] new record inserted into 'funkos' table",
        "[render] instance CPU usage at 72%",
      ],
      lastDeployed: "2h ago",
      services: [
        { name: "Frontend", platform: "React", desc: "Deployed via Vercel", status: "✅ Live", latency: "182ms", color: "bg-blue-400", icon: <SiReact className="text-blue-300" /> },
        { name: "Backend", platform: "Node.js", desc: "WebSocket API on Render", status: "🟢 Healthy", latency: "207ms", color: "bg-green-400", icon: <SiNodedotjs className="text-green-300" /> },
        { name: "Drawing Engine", platform: "RoughJS", desc: "Canvas sketching & shapes", status: "⚡ Active", latency: "75ms", color: "bg-pink-400", icon: <FaPaintbrush className="text-pink-300" /> },
        { name: "Realtime Sync", platform: "Socket.IO", desc: "Live updates & chat", status: "⚡ Active", latency: "89ms", color: "bg-yellow-400", icon: <FaCloudUploadAlt className="text-yellow-300" /> },
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

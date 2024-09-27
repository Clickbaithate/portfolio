
const timelineData = [
  {
    year: "2022",
    title: "C++",
    description: "Started learning the fundamentals of programming and developing simple programs with C++, using simple concepts like for loops and classes.",
  },
  {
    year: "2022",
    title: "Java",
    description: "Started learning the fundamentals of OOP and developing more complex programs with Java, using concepts like polymorphism and inheritance.",
  },
  {
    year: "2022",
    title: "Android Studio",
    description: "Developed several android applications with Android Studio and Java, with my most complex project being a budget management app.",
  },
  {
    year: "2022",
    title: "SQLite",
    description: "Utilized SQLite within my Android Studio projects for data management by creating basic tables and facilitating straightforward data retrieval.",
  },
  {
    year: "2022",
    title: "Git & GitHub",
    description: "Began utilizing Git and GitHub to collaborate with classmates and maintain version control in my projects.",
  },
  {
    year: "2023",
    title: "Python",
    description: "Utilized Python to learn data structures and algorithms, implementing data structures like Directed Acyclic Graphs.",
  },
  {
    year: "2023",
    title: "Flutter",
    description: "Developed multiple cross-platform applications using Flutter and Dart, with the most complex project being an app that allows you to browse and track your own personal Funko Pop Figures.",
  },
  {
    year: "2023",
    title: "Figma",
    description: "Designed user interfaces and user experiences using Figma, collaborating with team members to create high-fidelity prototypes and wireframes that facilitate seamless interaction and usability testing.",
  },
  {
    year: "2023",
    title: "Ruby on Rails",
    description: "Developed various projects using Ruby on Rails, applying fundamental software engineering concepts such as unit and integration testing, continuous integration (CI), and Agile methodologies.",
  },
  {
    year: "2023",
    title: "JIRA",
    description: "Utilized JIRA for project management and issue tracking, facilitating team collaboration and ensuring efficient workflow through Agile methodologies.",
  },
  {
    year: "2024",
    title: "React.js",
    description: "Built dynamic and responsive user interfaces using React.js, implementing component-based architecture and state management for seamless user experiences.",
  },
  {
    year: "2024",
    title: "Node.js & Express.js",
    description: "Developed web applications using Node.js and Express.js, implementing RESTful APIs, managing server-side logic, and ensuring efficient data handling for optimal performance.",
  },
  {
    year: "2024",
    title: "Tailwind CSS",
    description: "Utilized Tailwind CSS to design and develop custom, responsive layouts, allowing for rapid prototyping and consistent styling across web applications while maintaining flexibility in design"
  },
  {
    year: "2024",
    title: "Supabase & PostgreSQL",
    description: "Utilized Supabase as a backend solution powered by PostgreSQL, facilitating seamless authentication, real-time data management, and efficient relational database operations to enhance application performance",
  },
  {
    year: "2024",
    title: "Vercel",
    description: "Deployed web applications on Vercel for easy hosting and automatic scaling, enabling fast and efficient updates"
  }
];

const timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-[100px] pb-5">
      {timelineData.map((item, index) => (
        <li key={index} className={index == 14 ? "ms-4" : "mb-10  ms-4"}>
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">{item.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default timeline;

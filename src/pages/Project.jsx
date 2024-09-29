import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Carousel2 from "../components/vertical-carousel";
import Carousel3 from "../components/horizontal-carousel";

const Project = () => {

  const { index } = useParams();

  const highlightWords = [
    "React.js", 
    "Tailwind-CSS", 
    "Supabase", 
    "Node.js", 
    "Express.js", 
    "Jest", 
    "Figma", 
    "Jira", 
    "Python.", 
    "matrix-factorization", 
    "recommender-system",
    "Flutter",
    "Dart.",
    "Riverpod", 
    "SQLite",
    "pagination",
    "API",
    "Android",
    "Studio",
    "encapsulation",
    "inheritance.",
    "GitHub",
    "Java",
    "UI",
    "web",
    "application",
    "unique",
    "features.",
    "track",
    "4,",
    "team",
    "recommender",
    "system",
    "matrix",
    "factorization"
  ];  
  
  const projects = [
    { 
      id: 0, 
      image: "https://via.placeholder.com/600", 
      title: 'React Project', 
      tagline: "Web App Developed with React.js, Supabase, and Node.js", 
      description: [
        { message: "In a team of 4, we developed a web application that would allow movie enthusiasts to have a place to track their digital movie journey. We noticed that already established movie trackers didn't have that cozy UI feel that movie apps like Disney+ or Netflix have. That was when we decided to develop our own version of a movie tracker app while adding our own unique features." },
        { message: "We started by designing a UI with Figma then we broke down all the features and tasks we would have to get done and arragned it into one week sprints for a total of 16 springs, all documented through our Jira where we could keep track of the progress of our project." },
        { message: "On the frontend, we utilized Tailwind-CSS alongside React.js to create responsive and eye-catching UI." },
        { message: "On the backend, we utilized Supabase for our user authentication and to host our database. Supabase offered great options like already established API endpoints to our database. We handled all that logic in our Node.js backend server to simplify the communications between the frontend and supabase." },
        { message: "One major feature of our project, was a recommender system that would create recommendations based on what you or your friends have watched. The recommender system followed matrix factorization using Python." },
      ],
      technologies: [
        { image: "https://www.rapiddg.com/sites/default/files/imce-files/react.png", title: "React.js" },
        { image: "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp", title: "Tailwind CSS" },
        { image: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", title: "Supabase" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png", title: "PostgreSQL" },
        { image: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png", title: "Node.js" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", title: "Python" },
        { image: "https://www.svgrepo.com/show/327408/logo-vercel.svg", title: "Vercel"},
        { image: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png", title: "Express.js"},
        { image: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png", title: "Jest"},
        { image: "https://cdn-icons-png.flaticon.com/512/25/25231.png", title: "GitHub"},
        { image: "https://www.cdnlogo.com/logos/j/41/jira.svg", title: "Jira"},
        { image: "https://static.vecteezy.com/system/resources/previews/042/165/840/original/figma-3d-logo-white-background-free-png.png", title: "Figma"},
      ]
    },
    { 
      id: 1, 
      image: "https://via.placeholder.com/600", 
      title: 'iFunko', 
      tagline: "Cross-Platform App Developed with Flutter, Riverpod, and SQLite", 
      description: [
        { message: "I started developing this app because a few years back, the official Funko Pop app was incredibly laggy, but I think it has improved by now haha." },
        { message: "I decided to branch my technology stack and started developing the app with Flutter and Dart." },
        { message: "I found an online dataset with all the Funko Pop data, I then hosted a Node.js server where I created my own API endpoints that would feed me that data when I called it from the Flutter application. I used pagination on my Node.js endpoints to feed me the data in a way that wouldn't completely lag the device. " },
        { message: "I then used Riverpod for my state management, and I used SQLite to save important data like what Funkos were liked or added to a certain folder. " },
        { message: "Overall, this project was extremely fun to develop, I learned a lot and while incredibly frustrating at times (it took some time to get used to all the indentation haha), I definitely enjoyed the journey." },
      ], 
      technologies: [
        { image: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png", title: "Flutter" },
        { image: "https://www.cnet.com/a/img/resize/b40e196dcdfe40b6167bf4619f5c3d2db2cc02da/hub/2011/11/23/9edaf184-f0f0-11e2-8c7c-d4ae52e62bcc/Dart_logo.png?auto=webp&fit=crop&height=1200&width=1200", title: "Dart" },
        { image: "https://miro.medium.com/v2/resize:fit:512/0*uafSKJ7Rhq2aRqRT", title: "SQLite" },
        { image: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png", title: "Node.js" },
        { image: "https://riverpod.dev/img/logo.png", title: "Riverpod" },
        { image: "https://framerusercontent.com/images/GNSzEovtdsVMPtzb9RaUL0QDlZM.svg", title: "Lottie" },
      ]
    },
    { 
      id: 2, 
      image: "https://via.placeholder.com/600", 
      title: 'PennyPal', 
      tagline: "Android App Developed with Android Studio and Java", 
      description: [
        { message: "This was my first major project, it was an end-of-semester project where we were given 4 weeks to learn Android Studio. We had just learned a lot of OOP concepts like encapsulation and inheritance. " },
        { message: "I worked in a team of 3, where we first drew up the designs in Figma. We then created a remote repo on GitHub to start collaborating together and develop the project." },
        { message: "We used Android Studio and Java to develop the UI of the application while we also used SQLite to store all the data we needed like user transactions, and budget. " },
        { message: "" },
        { message: "" },
        { message: "" },
        { message: "" },
        { message: "" },
        { message: "" },
      ], 
      technologies: [
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png", title: "Android Studio" },
        { image: "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-yxty4s2p.png", title: "Java" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png", title: "SQLite" },
        { image: "https://static.vecteezy.com/system/resources/previews/042/165/840/original/figma-3d-logo-white-background-free-png.png", title: "Figma" },
        { image: "https://cdn-icons-png.flaticon.com/512/25/25231.png", title: "GitHub" },
        { image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4", title: "Git" },
      ]
    },
  ];

  const project = projects[index];

  return (
    <div className="bg-[url('assets/background.svg')] bg-cover min-h-screen">
    <div className="max-w-7xl mx-auto p-4">
      {/* Navbar with back button */}
      <nav className="flex justify-start">
        <Link to="/">
          <IoMdArrowRoundBack className="text-white mt-5 rounded-full w-10 h-10 transition-all ease-in-out duration-500 transform hover:scale-150" />
        </Link>
      </nav>

      {/* Project details */}
      <div className="my-8">
        <h1 className="text-white text-5xl font-bold md:text-5xl text-xl mb-5">{project.title}</h1>
        <p className="text-white text-lg font-bold md:text-lg text-sm mb-10">{project.tagline}</p>

        {/* Centered Image */}
        <div className="flex justify-center mb-6">
          {index == 0 ? <Carousel3 index={parseInt(index)} /> : <Carousel2 index={parseInt(index)} />}
        </div>

        {/* Overview section */}
        <h2 className="text-white text-3xl font-bold md:text-3xl text-lg mb-2">Overview</h2>
        <p className="text-white text-lg mb-6 mr-20">
          
          {project.description.map((desc,index) => (
            <div className="mb-2">
              {desc.message.split(" ").map((word, i) => (
                highlightWords.includes(word)
                ?
                <span className="text-red-500 " > {word} </span>
                :
                <span className="inline" > {word} </span>
              ))}
            </div>
          ))}
        </p>

        {/* List of technology cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.technologies.map((tech, idx) => (
            <div key={idx} className={`border border-gray-500 shadow p-4 rounded-lg bg-gray-500 w-80 hover:shadow-lg ${index == 0 ? "hover:shadow-blue-400/70" : (index == 1 ? "hover:shadow-blue-900/70" : "hover:shadow-green-500/70")}`}>
              <img src={tech.image} alt={tech.title} className="w-20 h-20 mx-auto mb-2" />
              <h3 className="text-xl text-center font-medium">{tech.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Project;

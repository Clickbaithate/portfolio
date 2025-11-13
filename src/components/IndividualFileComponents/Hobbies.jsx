import pfp from "../../assets/pfp.jpg";

const hobbies = [
  {
    img: pfp,
    name: "Astronomy",
    desc: "Stargazing is calming, especially watching the moon. I'm looking to buy a telescope in the near future, but my bank account might disagree.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Traveling",
    desc: "Love exploring new places, meeting people, and experiencing different cultures.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Gaming",
    desc: "Fun with friends, from cozy single-player adventures to tactical realism matches.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Cooking",
    desc: "I love cooking for those closest to me. 2nd best birria tacos in Texas.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Reading",
    desc: "Surprisingly clears the mind very well. I used to love fiction but now it's most non-fiction with some folklore.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Guitar",
    desc: "The 12-string sounds so much better than the 6-string. I used to play until blistering and then some more.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Soccer",
    desc: "Could've gone pro if not for the knee injury. I swear I used to fly when being goalie.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Motorcycles",
    desc: "Genuinely feels like you're soaring through the sky. The adrenaline is addicting, but even the peaceful rides feel heavenly.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Tech",
    desc: "Building tools, creating ideas, and watching the future take shape.",
    image: pfp,
  },
  {
    img: pfp,
    name: "Comics",
    desc: "Spider-Man 2099 has been the favorite ever since mistaking his comic for Ultimate Spider-Man as a kid.",
    image: pfp,
  },
];

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen w-full bg-bg text-text overflow-hidden px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Hobbies & Interests</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {hobbies.map((hobby, i) => (
          <div
            key={i}
            className="relative w-52 h-72 group [perspective:1000px]"
          >
            {/* Card Inner */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 bg-bg-accent rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center shadow-lg backface-hidden">
                <img src={hobby.img} alt={hobby.name} className="w-36 h-36 mb-2 object-cover rounded-full" />
                <p className="font-medium">{hobby.name}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-bg space-y-6 rounded-2xl border border-white/10 p-2 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden overflow-auto">
                <img src={hobby.image} className="w-24 h-24 rounded-full object-cover" />
                <p className="text-xs text-gray-400 leading-snug mb-2">{hobby.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;

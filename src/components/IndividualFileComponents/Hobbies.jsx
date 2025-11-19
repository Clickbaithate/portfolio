import pfp from "../../assets/pfp.jpg";
import astronomy from "../../assets/hobbies/astronomy.jpg";
import astronomy2 from "../../assets/hobbies/astronomy2.jpg";
import traveling from "../../assets/hobbies/traveling.jpg";
import traveling2 from "../../assets/hobbies/traveling2.jpg";
import gaming from "../../assets/hobbies/gaming.jpg";
import gaming2 from "../../assets/hobbies/gaming2.jpg";
import cooking from "../../assets/hobbies/cooking.jpg";
import cooking2 from "../../assets/hobbies/cooking2.jpg";
import reading from "../../assets/hobbies/reading.jpg";
import reading2 from "../../assets/hobbies/reading2.jpg";

import guitar from "../../assets/hobbies/guitar.jpg";
import guitar2 from "../../assets/hobbies/guitar2.jpg";

import soccer from "../../assets/hobbies/soccer.jpg";
import soccer2 from "../../assets/hobbies/soccer2.jpg";

import motorcycle from "../../assets/hobbies/motorcycle.jpg";
import motorcycle2 from "../../assets/hobbies/motorcycle2.jpg";

import tech from "../../assets/hobbies/tech.jpg";
import tech2 from "../../assets/hobbies/tech2.png";

import comics from "../../assets/hobbies/comics.jpg";
import comics2 from "../../assets/hobbies/comics2.jpg";

const hobbies = [
  {
    img: astronomy2,
    name: "🔭 Astronomy 🔭",
    desc: "Stargazing is calming, especially watching the moon. I'm looking to buy a telescope in the near future, but my bank account might disagree.",
    image: astronomy,
  },
  {
    img: traveling,
    name: "✈️ Traveling ✈️",
    desc: "Love exploring new places, meeting people, and experiencing different cultures.",
    image: traveling2,
  },
  {
    img: gaming,
    name: "🎮 Gaming 🎮",
    desc: "Fun with friends, from cozy single-player adventures to tactical realism matches.",
    image: gaming2,
  },
  {
    img: cooking,
    name: "🍳 Cooking 🍳",
    desc: "I love cooking for those closest to me. 2nd best birria tacos in Texas.",
    image: cooking2,
  },
  {
    img: reading,
    name: "📚 Reading 📚",
    desc: "Surprisingly clears the mind very well. I used to love fiction but now it's most non-fiction with some folklore.",
    image: reading2,
  },
  {
    img: guitar,
    name: "🎸 Guitar 🎸",
    desc: "The 12-string sounds so much better than the 6-string. I used to play until blistering and then some more.",
    image: guitar2,
  },
  {
    img: soccer2,
    name: "⚽ Soccer ⚽",
    desc: "Could've gone pro if not for the knee injury. I swear I used to fly when being goalie.",
    image: soccer,
  },
  {
    img: motorcycle,
    name: "🏍️ Motorcycles 🏍️",
    desc: "Genuinely feels like you're soaring through the sky. The adrenaline is addicting, but even the peaceful rides feel heavenly.",
    image: motorcycle2,
  },
  {
    img: tech,
    name: "💻 Tech 💻",
    desc: "Building tools, creating ideas, and watching the future take shape.",
    image: tech2,
  },
  {
    img: comics,
    name: "🕷️ Comics 🕷️",
    desc: "Spider-Man 2099 has been the favorite ever since mistaking his comic for Ultimate Spider-Man as a kid.",
    image: comics2,
  },
];

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen w-full bg-bg-accent text-text overflow-hidden px-6">
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
              <div className="absolute inset-0 bg-bg rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center shadow-lg backface-hidden">
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

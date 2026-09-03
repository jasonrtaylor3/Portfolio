import kyrieIrving from "../assets/favorites/kyrie-irving.jpg";
import russellWestbrook from "../assets/favorites/russell-westbrook.jpg";
import alvinKamara from "../assets/favorites/alvin-kamara.jpg";
import davanteAdams from "../assets/favorites/davante-adams.jpg";
import theAlchemist from "../assets/favorites/the-alchemist.jpg";
import darkMatter from "../assets/favorites/dark-matter.jpg";
import thePrestige from "../assets/favorites/the-prestige.jpg";
import interstellar from "../assets/favorites/interstellar.jpg";
import hunterXHunter from "../assets/favorites/hunter-x-hunter.png";
import attackOnTitan from "../assets/favorites/attack-on-titan.jpg";

export const favorites = [
  {
    label: "Athletes",
    items: [
      {
        name: "Kyrie Irving",
        blurb: "An artist who swapped his paintbrush for a ball.",
        image: kyrieIrving,
        credit: "Photo: Erik Drost (CC BY 2.0)",
      },
      {
        name: "Alvin Kamara",
        blurb: "They say that life is about balance.",
        image: alvinKamara,
        credit: "Photo: All-Pro Reels (CC BY-SA 2.0)",
      },
      {
        name: "Russell Westbrook",
        blurb: "Passion and loyalty, embodied.",
        image: russellWestbrook,
        credit: "Photo: Keith Allison (CC BY-SA 2.0)",
      },
      {
        name: "Davante Adams",
        blurb: "\"Siri, who has the best split release of all time?\"",
        image: davanteAdams,
        credit: "Photo: All-Pro Reels (CC BY-SA 2.0)",
      },
    ],
  },
  {
    label: "Books",
    items: [
      {
        name: "The Alchemist",
        blurb: "The journey is the reward.",
        image: theAlchemist,
      },
      {
        name: "Dark Matter",
        blurb: "\"For anyone who has wondered what their life might look like at the end of the road not taken.\"",
        image: darkMatter,
      },
    ],
  },
  {
    label: "Movies",
    items: [
      {
        name: "The Prestige",
        blurb: "It's all an illusion.",
        image: thePrestige,
      },
      {
        name: "Interstellar",
        blurb: "Love transcends physics.",
        image: interstellar,
      },
    ],
  },
  {
    label: "Anime",
    items: [
      {
        name: "Hunter x Hunter",
        blurb: "A beautiful friendship.",
        image: hunterXHunter,
      },
      {
        name: "Attack on Titan",
        blurb: "Chasing freedom.",
        image: attackOnTitan,
      },
    ],
  },
  {
    label: "Hobbies",
    items: [
      {
        kind: "video",
        name: "Hoops",
        video: "/videos/hoops.mp4",
        poster: "/videos/hoops-poster.jpg",
      },
      {
        kind: "video",
        name: "Gym",
        video: "/videos/gym.mp4",
        poster: "/videos/gym-poster.jpg",
      },
    ],
  },
] as const;

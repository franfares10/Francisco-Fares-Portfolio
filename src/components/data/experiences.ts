import exxonmobil from "@/assets/exxonmobil.png";
import coderhouse from "@/assets/coderhouse.png";
import uade from "@/assets/uade.png";
import rakkau from "@/assets/rakkau.png";
import cognitlabs from "@/assets/cognitlabs.png";

const experiencesData = [
    {
      name: "Software Developer",
      location: "ExxonMobil, AR",
      description:[
        "I´ve reduced a quarter part of team ticket queue through process automation 📈.",
        "I gave support to client applications with thousands of users.",
        "I’ve been part of the transformation of 2 applications, from a monolithic architecture to a microservices oriented architecture.",
        "Communication with clients from all over the world 🌍.",
      ],
      image: exxonmobil,
      date: "2020-2022",
      url: "https://corporate.exxonmobil.com/"
    },
    {
      name: "Systems Integration Engineer",
      location: "Rakkau, AR",
      description:[
        "I´ve been involved in the development of a Peruvian bank system, particularly in the IAM team 🔐.",
        "I led my team in a tranformation from cascade to an agile methodology.",
        "I designed and developed the integrations between BFFs orchestrators & tenant applications such us homebanking web and mobile.",
      ],
      image: rakkau,
      date: "May 2023 - Sept 2023",
      url:"https://www.rakkau.com/"
    },
    {
      name: "Back-End Tutor",
      location: "Coderhouse, AR",
      description:[
        "Ratings: 4,97/5 ⭐️.",
        "+100 projects reviewed 📝.",
        "~40 students guided 🧑‍🏫.",
      ],
      image: coderhouse,
      date: "2023 - present",
      url:"https://www.coderhouse.com/"
    },
    {
      name: "University Professor",
      location: "Universidad Argentina de la Empresa, AR",
      description:[
        "Responsible for the subject: 'APIs'.",
        "I´ve explained to +150 students how to create complex web applications with MERN & SERN stacks 🧑‍🏫.",
        "+100 projects reviewed 📝.",
      ],
      image: uade,
      date: "2023 - present",
      url:"https://www.uade.edu.ar/"
    },
    {
      name: "SSr Fullstack Developer",
      location: "CognitLabs, AR",
      description:[
        "In charge a logistics 🚚 system development project being responsable for designing and implementing the E2E solution.",
        "Side-participating in a blockchain 🔗 project being responsable of deployment tasks.",
        "Training of new employees.",
        "Ensure code quality through constanstly PRs reviews.",
        "Taking requirements based on customer needs."
      ],
      image: cognitlabs,
      date: "Sept 2023 - present",
      url:"https://cognitlabs.com/"
    },
  ];

  export default experiencesData;
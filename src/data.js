import House from "./assets/House.png";
import CodeX from "./assets/CodeX.png";
import Shoe from "./assets/Shoe.png";
import Ellen from "./assets/Ellen.png";
import shms from "./assets/shms.png";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
export const Education = [
  {
    id: 1,
    data: "2018-2022",
    college: "Lovely Professional University",
    title: "B.Tech [Electronics and Communication]",
    location: "Phagwara,Punjab,India",
    description: "Web-Development and Game-Development",
  },
  {
    id: 2,
    data: "2016-2018",
    title: "Intermediate",
    college: "Vani Junior College",
    location: "Venkatagirikota,Andhra Pradesh,India",
    description: "Mathematics, Physics and Chemistry",
  },
  {
    id: 3,
    data: "2015-2016",
    title: "High School",
    college: "Raga Sree Divya Gnanna Patasala",
    location: "Venkatagirikota,Andhra Pradesh,India",
    description: "Schooling",
  },
];
export const Projects = [
  {
    id: 1,
    title: "House-Auction-Place",
    imgSrc: House,
    techStack: "React-JS,HTML/CSS,Firebase",
    live: "https://house-auction-app.vercel.app/",
    github: "https://github.com/sanibalakrishna/House-Auction-App",
  },
  {
    id: 2,
    title: "CoderX",
    imgSrc: CodeX,
    techStack: "Next-JS,Tailwind,Rest API",
    live: "https://coder-x.vercel.app/",
    github: "https://github.com/sanibalakrishna/CoderX",
  },
  {
    id: 3,
    title: "Shoe Store",
    imgSrc: Shoe,
    techStack: "React-JS,Tailwind,Rest API",
    live: "https://shoestore-murex.vercel.app/",
    github: "https://github.com/sanibalakrishna/shoestore",
  },
  {
    id: 4,
    title: "TodoX",
    imgSrc: Ellen,
    techStack: "Next JS,HTML/CSS",
    live: "https://todo-chi-two.vercel.app",
    github: "https://github.com/sanibalakrishna/Todo",
  },
  {
    id: 5,
    title: "Ellen",
    imgSrc: Ellen,
    techStack: "Unity-3D,C#,Assets",
    live: "https://drive.google.com/drive/folders/1dQN37myGaa14shQwjnAjO0cZLi5x6K7x?usp=sharing",
    github:
      "https://drive.google.com/drive/folders/1dQN37myGaa14shQwjnAjO0cZLi5x6K7x?usp=sharing",
  },
  {
    id: 6,
    title: "Smart-Health-Monitoring-System",
    imgSrc: shms,
    techStack: "IoT,c++",
    live: "https://youtube.com/playlist?list=PLDgXOYvpMgidV5s1dKdGE_smJ17ZyThwI",
    github: "https://github.com/sanibalakrishna/Smart-Health-Monitoring-System",
  },
];
export const Socials = [
  {
    id: 1,
    // iconSrc:,
    name: "GitHub",
    link: "https://github.com/sanibalakrishna",
  },
  {
    id: 2,
    // iconSrc:( <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />),
    name: "YouTube",
    link: "https://youtube.com/playlist?list=PLDgXOYvpMgidV5s1dKdGE_smJ17ZyThwI",
  },
  {
    id: 3,
    // iconSrc: (
    //   <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    // ),
    name: "Twitter",
    link: "https://twitter.com/BalakrishnaSani",
  },
  {
    id: 4,
    // iconSrc: (
    //   <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    // ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sani-balakrishna/",
  },
  {
    id: 5,
    // iconSrc: (
    //   <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    // ),
    name: "Whatsapp",
    link: "#",
  },
];

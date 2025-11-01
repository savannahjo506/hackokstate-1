export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  instagram: string;
  website: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Colter Holmes",
    role: "Executive Director",
    bio: "Computer Engineering student and Microsoft Software Engineering intern dedicated to organizing Hack OKState and inspiring collaboration in tech.",
    image: "/team/colter.jpg",
    github: "https://github.com/retlocpeck",
    linkedin: "https://linkedin.com/in/colterholmes",
    instagram: "https://instagram.com/imcolter",
    website: "https://heardle.live"
  },
  {
    name: "Ricardo Mulino",
    role: "Executive Co-Director",
    bio: "Computer Science student, ex-Google intern, President of ACM OSU chapter dedicated to bolstering interest in coding and overall computing at Oklahoma State.",
    image: "/team/ricardo.jpg",
    github: "",
    linkedin: "https://www.linkedin.com/in/ricardomulino",
    instagram: "",
    website: ""
  },
  {
    name: "Alex Carter",
    role: "Finance Director",
    bio: "I am an Electrical Engineering student interested in power and energy. I am the treasurer in IEEE and I am a big fan of automation, computer science, and artificial intelligence. I have a collection of playing cards from different places, love the outdoors, and creative writing!",
    image: "/team/alex.jpg",
    github: "",
    linkedin: "",
    instagram: "",
    website: ""
  },
  {
    name: "Katy Wagner",
    role: "Logistics Director",
    bio: "Electrical and Computer engineering student with an interest in cybersecurity and a 1st degree black belt in Taekwondo.",
    image: "/team/katy.jpg",
    github: "",
    linkedin: "https://www.linkedin.com/in/katrina-wagner-820619248",
    instagram: "",
    website: ""
  },
  {
    name: "Jase Scott",
    role: "Outreach Director",
    bio: "Computer Science Undergrad, Fullstack Programmer, OSU VR/AR Researcher, ACM Community Outreach Officer, Video Game Development Club Officer.",
    image: "/team/jase.jpg",
    github: "https://github.com/JScott3234",
    linkedin: "https://www.linkedin.com/in/jase-scott-a76980309",
    instagram: "",
    website: "https://jscott3234.github.io/"
  }
];
import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activeProject: {}
})


export const AppData = {
  tower: {
    name: "Tower",
    description: "A full-stack application designed to help users post, find, and sign up for events in an easy to use and appealing interface. Focus on an appealing UI and UX makes navigation of the site intuitive, responsive, and enjoyable",
    technologiesUsed: ["Vue.js", "Vue-Router", "Auth0", "Node.js", "Mongoose", "MongoDB"],
    img: "https://i.imgur.com/Z7gmLtr.png",
    repoLink: "https://github.com/CALEBELLIOTT/tower",
    liveLink: "https://tower-codeworks.herokuapp.com/?#/"
  },
  onTracker: {
    name: "On-Tracker",
    description: "A full-stack application built over the course of two weeks in a group of five developers. On-Tracker serves as a tool for contractors to keep track of project locations, project details, and employees while keeping the client in the loop of project progress",
    technologiesUsed: ["Vue.js", "Node.js", "Mongoose", "MongoDB", "MapBox", "Google Maps Api"],
    img: "https://i.imgur.com/QCTzvZe.png",
    repoLink: "https://github.com/CALEBELLIOTT/on-tracker",
    liveLink: "https://ontracker-capstone.herokuapp.com/#/"
  },
  keepr: {
    name: "Keepr",
    description: "A full-stack application which functions similarly to Pintrist. Users are able to post 'Keeps' which they can store in 'Vaults'. Vaults can be public and private and other users can save your keeps to their vaults if they so choose.",
    technologiesUsed: ["Vue.js", ".net", "C#", "Auth0", "Vue-Router", "MySQL"],
    img: "https://i.imgur.com/sgm7vVT.png",
    repoLink: "https://github.com/CALEBELLIOTT/Keepr",
    liveLink: "https://keeprheroku.herokuapp.com/#/"
  }
}

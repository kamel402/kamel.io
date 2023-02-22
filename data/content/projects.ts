import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "DETAILS",
    desc: "Data mining platform for e-commerce.",
    img: "/static/projects/details.png",
    link: "https://kamel402.github.io/details/",
    github: "https://github.com/kamel402/details",
    tags: ["Python", "JS", "FastAPI", "ReactJS"],
  },
  {
    id: 1,
    title: "commerce",
    desc: "An eBay-like e-commerce auction application.",
    img: "/static/projects/commerce.png",
    link: "https://github.com/kamel402/commerce",
    github: "https://github.com/kamel402/commerce",
    tags: ["Django", "Docker", "Redis", "Postgres", "CSS"],
  },
  {
    id: 2,
    title: "crowd-counting",
    desc: "Pytorch implementation of CSRNet paper.",
    img: "/static/projects/crowd-counting.png",
    link: "https://github.com/kamel402/crowd-counting",
    github: "https://github.com/kamel402/crowd-counting",
    tags: ["Python", "PyTorch", "Matlab", "OpenCV"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
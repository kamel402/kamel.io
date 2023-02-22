import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "commerce",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/commerce.png",
    link: "https://github.com/kamel402/commerce",
    github: "https://github.com/kamel402/commerce",
    tags: ["Django", "Docker", "Redis", "Postgres", "CSS"],
  },
  {
    id: 1,
    title: "crowd-counting",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
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
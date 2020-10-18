import React from "react";
import ProjectList from "../ProjectList";

const ProjectCard = (props) => {
  // array of projects and their data here
  //  Could not figure out how to make background images work.
  const projects = [
    {
      title: "Password Generator",
      href: "https://ekim0480.github.io/homework-03/",
      repoUrl: "https://github.com/ekim0480/homework-03",
      backgroundImage: "../../images/pwgenbg.jpg",
    },
    {
      title: "JavaScript Quiz",
      href: "https://ekim0480.github.io/homework-04/",
      repoUrl: "https://github.com/ekim0480/homework-04",
    },
    {
      title: "Workday Scheduler",
      href: "https://ekim0480.github.io/homework-05/",
      repoUrl: "https://github.com/ekim0480/homework-05",
    },
    {
      title: "Weather Dashboard",
      href: "https://ekim0480.github.io/homework-06/",
      repoUrl: "https://github.com/ekim0480/homework-06",
    },
    {
      title: "Dinner Decider",
      href: "https://ekim0480.github.io/DinnerDecider/",
      repoUrl: "https://github.com/ekim0480/DinnerDecider",
    },
    {
      title: "The NXT1",
      href: "https://kurtrocioeddieapp.herokuapp.com/",
      repoUrl: "https://github.com/ekim0480/project2",
    },
  ];

  // map each project into its own card
  return (
    <>
      {projects.map((project) => (
        <ProjectList
          title={project.title}
          href={project.href}
          repoUrl={project.repoUrl}
          backgroundImage={project.backgroundImage}
        />
      ))}
    </>
  );
};

export default ProjectCard;

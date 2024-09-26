import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {

  const { index } = useParams();
  const projects = [
    { id: 0, title: 'React Project' },
    { id: 1, title: 'Flutter Project' },
    { id: 2, title: 'Android Project' },
  ];

  return (
    <div>
      <h1> {projects[index]["title"]} </h1>
    </div>
  );
};

export default Project;

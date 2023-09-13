import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  const span = technologies.map((technology, index)=> {
    console.log(technology)
    return <span key={`${technology.id}-${index}`} name={technology.name}>{technology}</span>
  })
  
  return (
    <div className="project-item" key = {id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {span}
      </div>
    </div>
  );
}

export default ProjectItem;

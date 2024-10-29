import React from "react";

const ProjectList = ({ projects }) => {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <div key={index}>
                    <img className="img" src={project.img}  />
                </div>
            ))}
        </div>
    );
};

export default ProjectList
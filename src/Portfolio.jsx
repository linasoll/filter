import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

const Portfolio = ({ projects }) => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredProjects = selectedFilter === 'All'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

    return (
        <div>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={setSelectedFilter}
            />
            <ProjectList projects={filteredProjects} />
        </div>
    );
};

export default Portfolio;
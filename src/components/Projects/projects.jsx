import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects=()=>{
    return(
        <section>
            <h2>
                Project
            </h2>
            <div>
                {projects.map((project, id)=>{
                    return (
                        <ProjectCard key ={id} project={project}></ProjectCard>
                    );
                })}
            </div>
        </section>

    );
    

}
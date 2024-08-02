import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./projects.modules.css";

export const Projects=()=>{
    return(
        <section className={styles.conatiner}>
            <h2 className={styles.title}>
                Project
            </h2>
            <div className={styles.projects}>
                {projects.map((project, id)=>{
                    return (
                        <ProjectCard key ={id} project={project}></ProjectCard>
                    );
                })}
            </div>
        </section>

    );
    

}
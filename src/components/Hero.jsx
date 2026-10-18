

import { useState } from "react";
import projects from "../data/projects";

const Hero = ()=> {
    const [mousePosition, setMousePosition] = useState({
        x: 0, y: 0,
    });

    const handleMouseMove = (event)=> {
        const {clientX, clientY} = event;

        const x = (clientX / window.innerWidth - 0.5) * 2;
        const y = (clientY / window.innerHeight - 0.5) * 2;

        setMousePosition({x, y});
    };


    return (

        <section className="hero" onMouseMove={handleMouseMove}>
            <div className="hero-projects">
                {projects.map((project, index)=> (
                    <a
                    className={`project-card ${project.position}`}
                    key={project.title}
                    href={project.link}
                    style={{"--move-x": `${mousePosition.x * (index % 2 === 0 ? 8 : -8)}px`, "--move-y": `${mousePosition.y * (index % 2 === 0 ? 8 : -8)}px`}}>

                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <h3>{project.title}</h3>
                    </a>
                ))}
            </div>

            <div className="hero-character">
                <img src="/profile.png" alt="My Profile" />

                <img className="pupil pupil-left"
                src="/left-pupil.png"
                alt=""
                style={{transform: `translate(${mousePosition.x * 6}px, ${mousePosition.y * 2}px) scale(${1 - Math.max(0, mousePosition.x) * 0.1})`}}/>

                <img className="pupil pupil-right"
                src="/right-pupil.png"
                alt=""
                style={{transform: `translate(${mousePosition.x * 6}px, ${mousePosition.y * 2}px) scale(${1 - Math.max(0, mousePosition.x) * 0.1})`}}/>
            </div>
        </section>
    )
};


export default Hero;
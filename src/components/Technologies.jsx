import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiDocker,
  DiGithubBadge,
  DiSass,
} from 'react-icons/di';

import { SiJest } from "react-icons/si";

import '../styles/components/maincontent.sass'
import '../styles/components/technologies.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "jest", name: "Jest", icon: <SiJest /> },
];

function Technologies() {
  return (
    <section className='technologies'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>texto texto texto</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}

export default Technologies
import { projects } from '../../data/resume'
import Section from '../Section'

/** "https://valleybreadph.com/" -> "valleybreadph.com" */
const displayUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.url} className="project">
            <img
              src={project.image}
              className="project-preview"
              width="960"
              height="600"
              loading="lazy"
              alt={`Screenshot of the ${project.name} home page`}
            />

            <div className="project-body">
              <div className="project-heading">
                <h3 className="entry-title">{project.name}</h3>
                <a href={project.url} target="_blank" rel="noreferrer" className="link">
                  {project.linkLabel ?? displayUrl(project.url)}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="chips" aria-label="Built with">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects

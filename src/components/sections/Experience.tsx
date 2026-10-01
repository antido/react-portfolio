import { jobs } from '../../data/resume'
import Section from '../Section'

const Experience = () => {
  return (
    <Section id="experience" title="Work experience">
      <ol className="entries">
        {jobs.map((job) => (
          // The id lets the career ribbon link straight to this job.
          <li key={job.id} id={`job-${job.id}`} className="entry">
            <p className="entry-meta">{job.period}</p>
            <div>
              <h3 className="entry-title">{job.role}</h3>
              <p className="entry-subtitle">
                {job.company}
                {job.note && <span className="tag">{job.note}</span>}
              </p>
              <ul className="entry-points">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experience

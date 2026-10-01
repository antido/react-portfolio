import { education } from '../../data/resume'
import Section from '../Section'

const Education = () => {
  return (
    <Section id="education" title="Education">
      <ol className="entries">
        {education.map((school) => (
          <li key={school.school} className="entry">
            <p className="entry-meta">{school.years}</p>
            <div>
              <h3 className="entry-title">{school.school}</h3>
              {school.detail && <p className="entry-subtitle">{school.detail}</p>}
              <p className="entry-note">
                {school.level}, {school.location}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Education

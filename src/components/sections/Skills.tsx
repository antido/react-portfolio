import { skillGroups } from '../../data/resume'
import Section from '../Section'

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-row">
            <dt>{group.label}</dt>
            <dd>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills

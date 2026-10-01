import { personalDetails, profile, SHOW_PRIVATE_DETAILS } from '../../data/resume'
import Section from '../Section'

/** Age in full years, worked out from the birth date so it never goes stale. */
const ageFrom = (birthDate: string) => {
  const birth = new Date(birthDate)
  const today = new Date()
  const hadBirthdayThisYear =
    today.getMonth() > birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

  return today.getFullYear() - birth.getFullYear() - (hadBirthdayThisYear ? 0 : 1)
}

const About = () => {
  const details = personalDetails.filter((detail) => SHOW_PRIVATE_DETAILS || !detail.private)

  return (
    <Section id="about" title="About">
      <div className="prose">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="subheading">Personal information</h3>
      <dl className="facts">
        {SHOW_PRIVATE_DETAILS && (
          <div>
            <dt>Age</dt>
            <dd>{ageFrom(profile.birthDate)}</dd>
          </div>
        )}
        {details.map((detail) => (
          <div key={detail.label} className={detail.label === 'Address' ? 'facts-wide' : undefined}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default About

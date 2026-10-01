import { profile } from '../../data/resume'
import Section from '../Section'

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <p className="contact-lead">
        The quickest way to reach me is by email.
      </p>
      <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a>

      <dl className="facts">
        <div>
          <dt>Phone</dt>
          <dd><a href={`tel:${profile.phoneHref}`} className="link">{profile.phone}</a></dd>
        </div>
        <div>
          <dt>Based in</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
    </Section>
  )
}

export default Contact

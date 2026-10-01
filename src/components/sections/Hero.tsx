import Photo from '../../assets/img/antido.jpg'
import { profile } from '../../data/resume'
import CareerRibbon from '../CareerRibbon'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-intro">
        <div>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-lede">
            {profile.role} in {profile.location}. {profile.tagline}
          </p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="button button-primary">Email me</a>
            <a href="#experience" className="button">Read my experience</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={Photo} width="176" height="176" alt={`Portrait of ${profile.name}`} />
        </div>
      </div>

      <CareerRibbon />
    </div>
  )
}

export default Hero

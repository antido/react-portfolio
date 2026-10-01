import { profile, sections } from '../../../data/resume'
import useActiveSection from '../../../hooks/useActiveSection'

const sectionIds = sections.map((section) => section.id)

const Navbar = () => {
  const activeId = useActiveSection(sectionIds)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#top" className="site-name">{profile.name}</a>

        <nav aria-label="Sections">
          <ul className="site-nav">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={activeId === section.id ? 'is-active' : undefined}
                  aria-current={activeId === section.id ? 'true' : undefined}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

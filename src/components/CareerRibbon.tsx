import { jobs } from '../data/resume'

// The ribbon covers whole years so the year marks fall on even positions.
const FIRST_YEAR = 2018
const LAST_YEAR = 2026
const RANGE_START = new Date(FIRST_YEAR, 0, 1).getTime()
const RANGE_END = new Date(LAST_YEAR + 1, 0, 1).getTime()

/** Where a date falls on the ribbon, as a percentage from the left. */
const position = (date: string) => ((new Date(date).getTime() - RANGE_START) / (RANGE_END - RANGE_START)) * 100

const years = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, index) => FIRST_YEAR + index)

/**
 * The work history drawn to scale: one bar per job, placed by its real
 * start and end dates. Each bar links to that job in the Experience section.
 */
const CareerRibbon = () => {
  // Oldest first, so the bars read (and animate) left to right.
  const timeline = [...jobs].reverse()

  return (
    <figure className="ribbon">
      <ol className="ribbon-track">
        {timeline.map((job, index) => {
          const left = position(job.start)
          const width = position(job.end) - left

          return (
            <li
              key={job.id}
              className="ribbon-item"
              style={{ left: `${left}%`, width: `${width}%`, animationDelay: `${index * 90}ms` }}
            >
              <a href={`#job-${job.id}`} className="ribbon-bar">
                <span className="ribbon-tip">
                  <strong>{job.role}</strong>
                  {job.company}
                  <span className="ribbon-tip-period">{job.period}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ol>

      <div className="ribbon-years" aria-hidden="true">
        {years.map((year) => (
          <span key={year} style={{ left: `${position(`${year}-01-01`)}%` }}>{year}</span>
        ))}
      </div>

      <figcaption className="ribbon-caption">
        Work history from {FIRST_YEAR} to {LAST_YEAR}, drawn to scale. Select a bar to read about that job.
      </figcaption>
    </figure>
  )
}

export default CareerRibbon

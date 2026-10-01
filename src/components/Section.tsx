import { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  children: ReactNode
}

/**
 * One page section: the title sits in a narrow left column and the
 * content on the right. On small screens they stack.
 */
const Section = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default Section

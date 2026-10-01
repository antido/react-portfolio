import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, so the navigation
 * can highlight it while the visitor scrolls.
 */
const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // A section counts as "in view" when it crosses a band near the top of the screen.
      { rootMargin: '-25% 0px -65% 0px' },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

export default useActiveSection

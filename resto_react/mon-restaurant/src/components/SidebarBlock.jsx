import { useId } from 'react'

export default function SidebarBlock({ title, children }) {
  const titleId = useId()
  return (
    <section className="sidebar-block" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <div className="sidebar-block__body">{children}</div>
    </section>
  )
}

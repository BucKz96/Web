export default function Tag({ label, active = false, onClick }) {
  return <button type="button" className={`tag${active ? ' is-active' : ''}`} aria-pressed={active} onClick={() => onClick?.(label)}>{label}</button>
}

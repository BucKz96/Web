import Tag from './Tag'

export default function TagFilter({ tags = [], selectedTag = '', onChange }) {
  return <div className="tags">{tags.map((tag) => <Tag key={tag} label={tag} active={selectedTag === tag} onClick={onChange} />)}</div>
}

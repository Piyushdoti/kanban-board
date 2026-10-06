import { useDraggable } from '@dnd-kit/core'
import { CheckSquare, Circle } from 'lucide-react'

export default function TaskCard({ task, onComplete }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: task.id })
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined

  return <article className={`card ${task.color} ${isDragging ? 'dragging' : ''}`} ref={setNodeRef} style={style} {...listeners} {...attributes}>
    <h3>{task.title}</h3><p>{task.description}</p><div className="tags">{task.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <footer><div className="card-actions"><button title="Issue"><Circle size={16} fill="currentColor" /></button><button title="Mark complete" onClick={onComplete}><CheckSquare size={17} /></button></div><span className="assignee">{task.assignee}</span></footer>
  </article>
}

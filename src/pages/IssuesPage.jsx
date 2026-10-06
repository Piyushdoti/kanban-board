import { columns } from '../data/boardData'

export default function IssuesPage({ issues, onComplete }) {
  return <section className="issue-list"><div className="issue-intro"><p>Track problems that need the team’s attention.</p><button className="filter">All statuses ▾</button></div>
    {issues.map((task) => <div className="issue-row" key={task.id}><span className="issue-icon">!</span><div><h3>{task.title}</h3><p>{task.description}</p><div className="tags">{task.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="status-label">{columns.find((column) => column.id === task.status)?.label}</span><span className="assignee">{task.assignee}</span><button className="complete-small" onClick={() => onComplete(task.id)}>Complete</button></div>)}
  </section>
}

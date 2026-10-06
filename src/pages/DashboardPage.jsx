import { columns } from '../data/boardData'

export default function DashboardPage({ tasks, issueCount, completedCount, onViewBoard }) {
  const countFor = (status) => tasks.filter((task) => task.status === status).length
  return <><section className="stats"><div><span>All tasks</span><b>{tasks.length}</b><small>Across the workspace</small></div><div><span>In progress</span><b>{countFor('progress')}</b><small>Tasks being worked on</small></div><div><span>Open issues</span><b>{issueCount}</b><small>Need attention</small></div><div><span>Completed</span><b>{completedCount}</b><small>{Math.round(completedCount / tasks.length * 100)}% of all work</small></div></section>
    <section className="dashboard-grid"><div className="panel"><div className="panel-title"><h2>Task progress</h2><span>{completedCount}/{tasks.length} complete</span></div>{columns.map((column) => { const count = countFor(column.id); return <div className="progress-row" key={column.id}><span>{column.label}</span><div><i style={{ width: `${count / tasks.length * 100}%` }} /></div><b>{count}</b></div> })}</div>
      <div className="panel"><div className="panel-title"><h2>Recent tasks</h2><button onClick={onViewBoard}>View board</button></div>{tasks.slice(0, 4).map((task) => <div className="recent" key={task.id}><span className={`mini-dot ${task.color}`} /><div><b>{task.title}</b><small>{columns.find((column) => column.id === task.status)?.label}</small></div><span className="assignee">{task.assignee}</span></div>)}</div></section>
  </>
}

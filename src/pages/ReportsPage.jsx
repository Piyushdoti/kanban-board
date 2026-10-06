import { columns } from '../data/boardData'

export default function ReportsPage({ tasks, completedCount }) {
  const completion = Math.round(completedCount / tasks.length * 100)
  return <section className="reports"><div className="panel report-panel"><h2>Project completion</h2><div className="donut" style={{ '--progress': `${completion * 3.6}deg` }}><b>{completion}%</b></div><p>{completedCount} completed tasks out of {tasks.length} total</p></div>
    <div className="panel report-panel"><h2>Work by stage</h2>{columns.map((column) => <div className="report-line" key={column.id}><span>{column.label}</span><b>{tasks.filter((task) => task.status === column.id).length} tasks</b></div>)}</div>
  </section>
}

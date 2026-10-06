const titles = { dashboard: 'Good morning, team', board: 'Project board', issues: 'Issues', reports: 'Reports' }
export default function PageHeader({ page, onAddTask }) {
  return <header><div><p>WEBSITE LAUNCH</p><h1>{titles[page]}</h1></div><button className="add-task" onClick={onAddTask}>+ Add task</button></header>
}

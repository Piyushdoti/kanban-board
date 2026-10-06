import { BarChart3, CircleDot, Columns3, LayoutDashboard } from 'lucide-react'

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'board', label: 'Board', icon: Columns3 },
  { id: 'issues', label: 'Issues', icon: CircleDot },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
]

export default function Sidebar({ activePage, issueCount, onNavigate }) {
  return <aside>
    <div className="logo"><b>↗</b> flowboard</div>
    <div className="workspace-name">PRODUCT TEAM <span>⌄</span></div>
    <nav>{navigation.map(({ id, label, icon: Icon }) => <button className={activePage === id ? 'active' : ''} onClick={() => onNavigate(id)} key={id}><i><Icon size={16} /></i>{label}{id === 'issues' && issueCount > 0 && <em>{issueCount}</em>}</button>)}</nav>
    <div className="side-bottom"><p>YOUR PROJECTS</p><button className="project active-project">● Website launch</button><button className="project">● Mobile app</button><button className="new-project">+ Create project</button></div>
  </aside>
}

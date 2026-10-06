import { useDroppable } from '@dnd-kit/core'
import { columns } from '../data/boardData'
import TaskCard from '../components/TaskCard'

function BoardColumn({ column, tasks, onAddTask, onMoveTask }) {
  const { isOver, setNodeRef } = useDroppable({ id: column.id })

  return <div className={`column ${isOver ? 'drop-target' : ''}`} ref={setNodeRef}>
    <h2>{column.label} <span>- {tasks.length} ITEMS</span></h2>
    <div className="cards">
      {tasks.map((task) => <TaskCard key={task.id} task={task} onComplete={() => onMoveTask(task.id, 'done')} />)}
      <button className="add-card" onClick={() => onAddTask(column.id)}>+ Add a task</button>
    </div>
  </div>
}

export default function BoardPage({ tasks, onMoveTask, onAddTask }) {
  return <section className="board">
    {columns.map((column) => <BoardColumn key={column.id} column={column} tasks={tasks.filter((task) => task.status === column.id)} onAddTask={onAddTask} onMoveTask={onMoveTask} />)}
  </section>
}

import { useForm } from 'react-hook-form'
import { columns } from '../data/boardData'

const blankForm = { title: '', description: '', tags: '', status: 'todo', color: 'green' }

export default function TaskForm({ defaultStatus, onClose, onCreate }) {
  const { register, handleSubmit } = useForm({ defaultValues: { ...blankForm, status: defaultStatus } })
  const createTask = (form) => onCreate({
    ...form,
    title: form.title.trim(),
    description: form.description.trim() || 'No description provided.',
    tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
    assignee: 'YOU',
  })

  return <div className="overlay" onMouseDown={onClose}><form onSubmit={handleSubmit(createTask)} onMouseDown={(event) => event.stopPropagation()}><div className="form-heading"><h2>Add task</h2><button type="button" onClick={onClose}>×</button></div><label>Task name<input autoFocus {...register('title', { required: true })} /></label><label>Description<textarea {...register('description')} /></label><label>Tags <small>(comma separated)</small><input {...register('tags')} placeholder="Issue, Customer" /></label><div className="select-row"><label>Column<select {...register('status')}>{columns.map((column) => <option key={column.id} value={column.id}>{column.label}</option>)}</select></label><label>Card color<select {...register('color')}>{['green', 'blue', 'orange', 'purple', 'pink'].map((color) => <option key={color}>{color}</option>)}</select></label></div><div className="form-actions"><button type="button" onClick={onClose}>Cancel</button><button className="add-task" type="submit">Create task</button></div></form></div>
}

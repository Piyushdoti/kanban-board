import { useMemo, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import PageHeader from "./components/PageHeader";
import TaskForm from "./components/TaskForm";
import { initialTasks } from "./data/boardData";
import BoardPage from "./pages/BoardPage";
import DashboardPage from "./pages/DashboardPage";
import IssuesPage from "./pages/IssuesPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [page, setPage] = useState("dashboard");
  const [formStatus, setFormStatus] = useState(null);

  const issues = useMemo(
    () => tasks.filter((task) => task.tags.includes("Issue")),
    [tasks],
  );
  const completedCount = tasks.filter((task) => task.status === "done").length;
  const openTaskForm = (status = "todo") => setFormStatus(status);
  const moveTask = (id, status) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };
  const createTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, { ...task, id: currentTasks.length }]);
    setFormStatus(null);
  };

  const pageProps = { tasks, issues, completedCount, onMoveTask: moveTask };
  const handleDragEnd = ({ active, over }) => {
    if (over) moveTask(active.id, over.id);
  };
  const pages = {
    dashboard: (
      <DashboardPage
        {...pageProps}
        issueCount={issues.filter((task) => task.status !== "done").length}
        onViewBoard={() => setPage("board")}
      />
    ),
    board: (
      <BoardPage
        {...pageProps}
        onAddTask={openTaskForm}
      />
    ),
    issues: (
      <IssuesPage issues={issues} onComplete={(id) => moveTask(id, "done")} />
    ),
    reports: <ReportsPage tasks={tasks} completedCount={completedCount} />,
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
    <main className="workspace">
      <Sidebar
        activePage={page}
        issueCount={issues.length}
        onNavigate={setPage}
      />
      <div className="content">
        <PageHeader page={page} onAddTask={() => openTaskForm()} />
        {pages[page]}
      </div>
      {formStatus && (
        <TaskForm
          defaultStatus={formStatus}
          onClose={() => setFormStatus(null)}
          onCreate={createTask}
        />
      )}
    </main>
    </DndContext>
  );
}

export default App;

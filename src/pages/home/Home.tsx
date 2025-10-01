import Tasks from "./components/tasks/Tasks";
import MainLayout from "@/layout/MainLayout";
import TaskCompletion from "@/features/task-completion/TaskCompletion";
import TaskActivity from "@/features/task-activity/TaskActivity";
import TaskCategories from "@/features/task-categories/TaskCategories";

function Home() {
  return (
    <MainLayout>
      <div className="flex gap-6 flex-1 overflow-hidden">
        <main className="flex-1 overflow-hidden">
          <Tasks />
        </main>

        {/* Right column */}
        <aside className="hidden lg:flex flex-col gap-6 overflow-hidden w-80 lg:mb-6">
          <TaskCompletion />
          <TaskActivity />
          <TaskCategories />
        </aside>
      </div>
    </MainLayout>
  );
}

export default Home;

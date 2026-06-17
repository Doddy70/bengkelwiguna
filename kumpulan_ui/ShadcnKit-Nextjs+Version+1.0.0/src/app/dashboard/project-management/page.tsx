import Chat from "@/components/dashboard/project-management/chat";
import ToDoList from "@/components/dashboard/project-management/to-do-list";
import ReportCard from "@/components/dashboard/project-management/report-card";
import AppCalender from "@/components/dashboard/project-management/app-calender";
import ActivityCard from "@/components/dashboard/project-management/activity-card";
import ProjectProgress from "@/components/dashboard/project-management/project-progress";
import StatisticsCards from "@/components/dashboard/project-management/statistics-cards";
import TaskDistribution from "@/components/dashboard/project-management/task-distribution";
import WelcomeCard from "@/components/dashboard/project-management/welcome-card";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <WelcomeCard className="col-span-12 lg:col-span-8" />
      <ProjectProgress className="col-span-12 lg:col-span-4" />

      <ReportCard className="col-span-12 lg:col-span-8" />
      <StatisticsCards className="col-span-12 lg:col-span-4" />

      <AppCalender className="col-span-12" />

      <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-7">
        <TaskDistribution className="col-span-12" />
        <ActivityCard className="col-span-12 lg:col-span-6" />
        <ToDoList className="col-span-12 lg:col-span-6" />
      </div>

      <Chat className="col-span-12 lg:col-span-4" />
    </div>
  );
};

export default Page;

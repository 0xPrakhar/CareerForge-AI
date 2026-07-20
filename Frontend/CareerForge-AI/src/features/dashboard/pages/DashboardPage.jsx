import DashboardHero from "../component/DashboardHero.jsx";
import QuickActions from "../component/QuickAction.jsx";
import RecentResumes from "../component/RecentResumes.jsx";
import StatsCards from "../component/StateCard.jsx";
import AIInsights from '../component/AIInsights.jsx'

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <DashboardHero />

       <StatsCards />
       <QuickActions/>
       <RecentResumes/>
       <AIInsights/>
    </div>
  );
};

export default DashboardPage;
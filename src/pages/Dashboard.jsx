import { GiGraduateCap } from "react-icons/gi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const Dashboard = () => {
  return (
    <div className="border border-t-neutral-400">
      <div className="text-center max-w-3xl mx-auto mt-10">
        <h1 className="text-primary text-3xl font-bold">Dashboard</h1>
        <p className="text-secondary text-sm">
          Welcome back to your central learning hub. Manage your progress,
          access your courses, and continue your academic journey.
        </p>
      </div>
      <div className="text-center max-w-130 md:max-w-3xl mx-auto mt-10 flex flex-col gap-6 border border-gray-300 rounded-xl p-6 shadow-xl mb-18">
        <GiGraduateCap
          className="bg-[#1A365D] rounded-full text-white mx-auto"
          size={36}
        />
        <h2 className="text-primary text-2xl font-bold">
          Welcome to Your Dashboard
        </h2>
        <p className="text-secondary text-sm">
          Your academic precision starts here. You have no pending notifications
          or urgent tasks. Start by exploring the course catalog or resume where
          you left off.
        </p>
        <div className="mx-auto">
          <Button
            LinkComponent={Link}
            to="/users"
            variant="contained"
            sx={{
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: '"Poppins", sans-serif',
              borderRadius: "8px",
              backgroundColor: "var(--color-primary)",
            }}
          >
            View Users
          </Button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Dashboard;

import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import StatSection from "../components/StatSection";
import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <main className="w-full flex flex-col gap-6 mt-8">
      <section id="hero-section">
        <h1 className="font-bold text-3xl text-accent-purple text-center">
          <span className="block text-primary">Masa Depan Pembelajaran</span>{" "}
          Akademik Presisi
        </h1>
      </section>
      <div>
        <p className="max-w-2xl mx-auto text-center">
          EduPro menghadirkan standar baru dalam Learning Management System
          untuk institusi pendidikan tinggi dan korporasi. Fokus pada
          perkembangan teknologi, data, dan hasil pembelajaran yang nyata.
        </p>
      </div>
      <div className="mx-auto">
        <Button
        LinkComponent={Link}
        to="/login"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          color: "#ffffff",
          fontSize: "14px",
          fontFamily: '"Poppins", sans-serif',
          borderRadius: "8px",
          backgroundColor: "var(--color-primary)",
        }}
      >
        Mulai Belajar Sekarang
      </Button>
      </div>
      <StatSection />
      <AboutSection />
      <CallToAction />
      <FooterSection />
    </main>
  );
};

export default Home;

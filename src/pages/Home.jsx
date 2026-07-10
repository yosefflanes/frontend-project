import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="px-10 flex flex-col gap-6 items-center mt-8">
      <section id="hero-section">
        <h1 className="font-bold text-2xl text-accent-purple text-center">
          <span className="block text-primary">Masa Depan Pembelajaran</span>{" "}
          Akademik Presisi
        </h1>
      </section>
      <div>
        <p className="max-w-3xl text-center">
          EduPro menghadirkan standar baru dalam Learning Management System
          untuk institusi pendidikan tinggi dan korporasi. Fokus pada
          perkembangan teknologi, data, dan hasil pembelajaran yang nyata.
        </p>
      </div>
      <Button
        LinkComponent={Link}
        to="/courses"
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
      <section>
        
      </section>
    </main>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-10 flex items-center justify-between text-primary">
      <div>
        <Link to="/">
          <h2 className="font-bold text-xl">EduPro</h2>
        </Link>
      </div>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          sx={{
            color: "var(--color-secondary)",
            fontSize: "14px",
            fontFamily: '"Poppins", sans-serif',
            "&:hover": {
                borderRadius: "8px",
            }
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: '"Poppins", sans-serif',
            borderRadius: "8px",
            backgroundColor: "var(--color-primary)",
          }}
        >
          Register
        </Button>
      </Stack>
    </nav>
  );
};

export default Navbar;

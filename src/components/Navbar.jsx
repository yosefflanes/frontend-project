import { NavLink, Link } from "react-router-dom";
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
      <div className="hidden gap-8 md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `h-full flex items-center border-b-2 transition-colors duration-200 ${
              isActive
                ? "border-primary text-primary font-semibold" // Style saat menu AKTIF
                : "border-transparent text-secondary hover:text-primary" // Style saat menu TIDAK AKTIF
            }`
          }
        >
          Home
        </NavLink>

        {/* Menu Courses */}
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `h-full flex items-center border-b-2 transition-colors duration-200 ${
              isActive
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-secondary hover:text-primary"
            }`
          }
        >
          Courses
        </NavLink>

        {/* Menu Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `h-full flex items-center border-b-2 transition-colors duration-200 ${
              isActive
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-secondary hover:text-primary"
            }`
          }
        >
          Dashboard
        </NavLink>
      </div>
      <Stack direction="row" spacing={2}>
        <Button
          LinkComponent={Link}
          to="/login"
          variant="text"
          sx={{
            color: "var(--color-secondary)",
            fontSize: "14px",
            fontFamily: '"Poppins", sans-serif',
            "&:hover": {
              borderRadius: "8px",
            },
          }}
        >
          Login
        </Button>
        <Button
          LinkComponent={Link}
          to="/register"
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

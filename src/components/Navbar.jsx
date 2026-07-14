import { NavLink, Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../api/client";
import { Typography } from "@mui/material";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest("/logout", { method: "POST" });
    } catch (err) {
      console.log(err);
    }
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full h-16 px-10 flex items-center justify-between text-primary">
      <div>
        <Link to="/">
          <h2 className="font-bold text-xl">EduPro</h2>
        </Link>
      </div>
      <div className="hidden gap-8 md:flex h-full items-center">
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

        {/* Menu Dashboard */}
        {isLoggedIn && (
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
        )}

        {/* Menu Users */}
        {user && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `h-full flex items-center border-b-2 transition-colors duration-200 ${
                isActive
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-secondary hover:text-primary"
              }`
            }
          >
            Users
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: '"Poppins", sans-serif',
              color: "var(--color-secondary)",
            }}
          >
            Halo,{" "}
            <strong style={{ color: "var(--color-primary)" }}>
              {user?.name}
            </strong>
          </Typography>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              fontSize: "14px",
              fontFamily: '"Poppins", sans-serif',
              borderRadius: "8px",
              textTransform: "none",
              backgroundColor: "var(--color-primary)",
            }}
          >
            Logout
          </Button>
        </Stack>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;

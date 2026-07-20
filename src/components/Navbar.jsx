import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useAuth } from "../hooks/useAuth";
import { apiRequest } from "../api/client";
import { Typography } from "@mui/material";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await apiRequest("/logout", { method: "POST" });
    } catch (err) {
      console.log(err);
    }
    logout();
    navigate("/login");
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <nav className="w-full h-16 px-10 shadow-md z-50 bg-white fixed top-0 backdrop:blur-md flex items-center justify-between">
      <div>
        <Link to="/">
          <h2 className="font-bold text-xl text-primary">EduPro</h2>
        </Link>
      </div>
      <div className="hidden gap-8 md:flex h-full items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `h-full flex items-center transition-colors duration-200 ${
              isActive
                ? " text-primary font-semibold" // Style saat menu AKTIF
                : " text-black hover:text-blue-700" // Style saat menu TIDAK AKTIF
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
              `h-full flex items-center transition-colors duration-200 text-primary ${
                isActive ? " font-semibold" : " hover:text-blue-700"
              }`
            }
          >
            Dashboard
          </NavLink>
        )}

        {/* Menu Kursus */}
        {isLoggedIn && (
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `h-full flex items-center transition-colors duration-200 text-primary ${
                isActive ? "font-semibold" : "hover:text-blue-700"
              }`
            }
          >
            Kursus
          </NavLink>
        )}

        {/* Menu Users */}
        {isLoggedIn && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `h-full flex items-center transition-colors duration-200 text-primary ${
                isActive ? "font-semibold" : "hover:text-blue-700"
              }`
            }
          >
            Daftar Pengguna
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
            Keluar
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button
            LinkComponent={Link}
            to="/login"
            variant="text"
            sx={{
              color: "black",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: '"Poppins", sans-serif',
              "&:hover": {
                borderRadius: "8px",
              },
            }}
          >
            Masuk
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
            Daftar
          </Button>
        </Stack>
      )}
    </nav>
  );
};

export default Navbar;

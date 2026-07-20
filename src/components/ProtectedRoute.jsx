import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
    const {isLoggedIn, loading} = useAuth();

    if (loading) return <p className="p-6">Memuat...</p>;

    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return <Outlet />;
}

export default ProtectedRoute;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="w-full h-16 px-10 flex items-center justify-between text-primary bg-red-500">
            <div>
                <Link to="/"><h2 className="font-bold text-xl">EduPro</h2></Link>
            </div>
            <div className="flex gap-8">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="flex gap-6">
                <Button>Login</Button>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
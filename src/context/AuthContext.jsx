import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isInstructor, setIsInstructor] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (token && savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setIsInstructor(parsed.role === "instructor"); // cek role
    }

    setLoading(false);
  }, []);

    const login = (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsInstructor(userData.role === 'instructor');
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsInstructor(false);
    };

    const getToken = () => localStorage.getItem("token");

    const value = {
        user,
        isLoggedIn: !!user,
        isInstructor,
        loading,
        login,
        logout,
        getToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === null) {
        throw new Error("useAuth harus dipakai di dalam <AuthProvider>")
    }
    return context;
};



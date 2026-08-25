import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center text-ash font-mono text-sm">
        loading…
      </div>
    );
  }
  if (!admin) return <Navigate to="/login" replace />;
  return children;
}

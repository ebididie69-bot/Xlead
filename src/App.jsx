import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeadFinder from "./pages/LeadFinder";
import GeneratedWebsites from "./pages/GeneratedWebsites";
import WebsitePreview from "./pages/WebsitePreview";
import Templates from "./pages/Templates";
import EmailQueue from "./pages/EmailQueue";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import DemoRenderer from "./pages/DemoRenderer";
import DemoNotFound from "./pages/DemoNotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routes>
          {/* Public: token-gated demo pages, never behind admin auth */}
          <Route path="/demo/:token/*" element={<DemoRenderer />} />
          <Route path="/demo-not-found" element={<DemoNotFound />} />

          <Route path="/login" element={<Login />} />

          {/* Admin-only */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/leads" element={<ProtectedRoute><LeadFinder /></ProtectedRoute>} />
          <Route path="/websites" element={<ProtectedRoute><GeneratedWebsites /></ProtectedRoute>} />
          <Route path="/websites/:websiteId" element={<ProtectedRoute><WebsitePreview /></ProtectedRoute>} />
          <Route path="/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
          <Route path="/emails" element={<ProtectedRoute><EmailQueue /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

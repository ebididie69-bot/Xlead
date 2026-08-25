import { motion } from "framer-motion";

export default function Login() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card p-10 w-full max-w-sm text-center"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-signal shadow-glow mx-auto mb-4" />
        <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">
          LeadForge <span className="text-signal">AI</span>
        </h1>
        <p className="text-ash text-sm mb-8">Administrator access only</p>

        {error === "unauthorized" && (
          <p className="text-danger text-sm mb-4">
            That Google account isn't authorized for this instance.
          </p>
        )}

        <a
          href={`${import.meta.env.VITE_API_URL || ""}/auth/login`}
          className="btn-primary w-full inline-block"
        >
          Continue with Google
        </a>
      </motion.div>
    </div>
  );
}

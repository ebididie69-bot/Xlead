import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Radar, Globe2, Mail, TrendingUp } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

function Skeleton({ className }) {
  return (
    <div className={`animate-pulse rounded bg-ink-700 ${className}`} />
  );
}

function StatCard({ icon: Icon, label, value, accent, delay, loading }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="card p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <Icon size={18} className={accent} />
      </div>
      {loading
        ? <Skeleton className="h-9 w-16 mb-1" />
        : <p className="font-display text-3xl font-semibold text-ash-light">{value}</p>
      }
      <p className="text-ash text-xs mt-1">{label}</p>
    </motion.div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({ leads: null, highScore: null, websites: null, emailsSent: null });
  const [backendError, setBackendError] = useState(false);

  useEffect(() => {
    const fetchStat = (promise, key, transform) =>
      promise
        .then((res) => setStats((prev) => ({ ...prev, [key]: transform(res.data) })))
        .catch(() => {
          setStats((prev) => ({ ...prev, [key]: "—" }));
          setBackendError(true);
        });

    fetchStat(api.get("/api/leads"), "leads", (d) => d.length);
    fetchStat(api.get("/api/leads"), "highScore", (d) => d.filter((l) => l.lead_score >= 80).length);
    fetchStat(api.get("/api/websites"), "websites", (d) => d.length);
    fetchStat(
      api.get("/api/emails", { params: { status: "sent" } }),
      "emailsSent",
      (d) => d.length
    );
  }, []);

  const CARDS = [
    { icon: Radar,     label: "Leads found",            key: "leads",      accent: "text-signal", delay: 0    },
    { icon: TrendingUp,label: "High-opportunity (80+)",  key: "highScore",  accent: "text-brass",  delay: 0.05 },
    { icon: Globe2,    label: "Websites generated",      key: "websites",   accent: "text-signal", delay: 0.1  },
    { icon: Mail,      label: "Emails sent",             key: "emailsSent", accent: "text-brass",  delay: 0.15 },
  ];

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Dashboard</h1>
      <p className="text-ash text-sm mb-8">Pipeline overview for your outreach system.</p>

      {backendError && (
        <div className="card p-4 mb-6 border border-danger/30 text-sm text-ash">
          Some stats couldn't load — the backend may be waking up. Refresh in a moment.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {CARDS.map(({ icon, label, key, accent, delay }) => (
          <StatCard
            key={key}
            icon={icon}
            label={label}
            value={stats[key]}
            accent={accent}
            delay={delay}
            loading={stats[key] === null}
          />
        ))}
      </div>

      <div className="card p-6">
        <p className="text-ash-light font-medium mb-1">Workflow</p>
        <p className="text-ash text-sm">
          Lead Finder → Generated Websites → Email Queue. Each stage carries a lead forward —
          find businesses without websites, generate a demo, then draft and review outreach before sending.
        </p>
      </div>
    </DashboardLayout>
  );
}

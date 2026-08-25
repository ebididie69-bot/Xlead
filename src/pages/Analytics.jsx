import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

export default function Analytics() {
  const [funnel, setFunnel] = useState([]);
  const [backendError, setBackendError] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/leads"),
      api.get("/api/websites"),
      api.get("/api/emails"),
      api.get("/api/emails", { params: { status: "sent" } }),
    ])
      .then(([leads, websites, emails, sent]) => {
        setFunnel([
          { stage: "Leads found", count: leads.data.length },
          { stage: "Websites generated", count: websites.data.length },
          { stage: "Emails drafted", count: emails.data.length },
          { stage: "Emails sent", count: sent.data.length },
        ]);
      })
      .catch(() => setBackendError(true));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Analytics</h1>
      <p className="text-ash text-sm mb-8">Conversion through the outreach pipeline.</p>

      {backendError && (
        <div className="card p-4 mb-6 border border-danger/30 text-sm text-ash">
          Can't reach the backend right now — chart will populate once it's reachable.
        </div>
      )}

      <div className="card p-6 h-80">
        {funnel.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnel}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A323D" vertical={false} />
              <XAxis dataKey="stage" stroke="#8B93A1" fontSize={12} />
              <YAxis stroke="#8B93A1" fontSize={12} allowDecimals={false} />
              <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #2A323D", borderRadius: 8 }} />
              <Bar dataKey="count" fill="#38B6A6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-ash text-sm">
            {backendError ? "Waiting on the backend…" : "No data yet — find some leads to see the funnel."}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

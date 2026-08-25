import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

const STATUS_STYLES = {
  draft: "text-ash bg-ink-700",
  approved: "text-brass bg-brass/10",
  sent: "text-signal bg-signal/10",
  failed: "text-danger bg-danger/10",
};

export default function EmailQueue() {
  const [drafts, setDrafts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [edited, setEdited] = useState({ subject: "", body: "" });
  const [backendError, setBackendError] = useState(false);

  function refresh() {
    api.get("/api/emails")
      .then((res) => { setDrafts(res.data); setBackendError(false); })
      .catch(() => setBackendError(true));
  }
  useEffect(refresh, []);

  async function openDraft(d) {
    setSelected(d);
    setEdited({ subject: d.subject, body: "" }); // body not returned in list; would fetch detail in a real build
  }

  async function handleApprove(id) {
    await api.post(`/api/emails/${id}/approve`);
    refresh();
  }

  async function handleSend(id) {
    if (!confirm("Send this email now? This cannot be undone.")) return;
    await api.post(`/api/emails/${id}/send`);
    refresh();
  }

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Email Queue</h1>
      <p className="text-ash text-sm mb-8">
        Every email is reviewed and approved manually. Nothing sends automatically.
      </p>

      {backendError && (
        <div className="card p-4 mb-6 border border-danger/30 text-sm text-ash">
          Can't reach the backend right now — check that it's deployed and reachable.
        </div>
      )}

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-ink-700 text-ash text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Subject</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drafts.map((d) => (
                <tr key={d.id} className="border-t border-ink-600 hover:bg-ink-700/50">
                  <td className="px-4 py-3 text-ash-light">{d.subject}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_STYLES[d.status]}`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    {d.status === "draft" && (
                      <button className="btn-secondary text-xs" onClick={() => handleApprove(d.id)}>
                        Approve
                      </button>
                    )}
                    {d.status === "approved" && (
                      <button className="btn-primary text-xs" onClick={() => handleSend(d.id)}>
                        Send
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {drafts.length === 0 && (
        <p className="text-ash text-sm mt-4">
          No drafts yet. Generate one from a lead's detail view once it has an email address on file.
        </p>
      )}
    </DashboardLayout>
  );
}

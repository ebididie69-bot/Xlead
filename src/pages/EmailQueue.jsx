import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Loader2, CheckCircle2, Send, ChevronDown, ChevronUp,
  RefreshCw, AlertCircle, Edit3, X, Check, Stethoscope, Plus,
} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

const STATUS_STYLES = {
  draft:    "text-ash bg-ink-700",
  approved: "text-brass bg-brass/10",
  sent:     "text-signal bg-signal/10",
  failed:   "text-danger bg-danger/10",
};

function DiagnosticPanel({ onClose }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/emails/diagnose")
      .then((r) => setResult(r.data))
      .catch((e) => setResult({ ok: false, error: e.response?.data?.detail || "Could not reach backend" }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card p-5 mb-6 border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium text-ash-light text-sm flex items-center gap-2">
          <Stethoscope size={15} /> Gmail Send Diagnostics
        </span>
        <button onClick={onClose} className="text-ash/40 hover:text-ash-light">
          <X size={14} />
        </button>
      </div>

      {loading && <p className="text-ash text-xs animate-pulse">Running checks…</p>}

      {result && result.error && (
        <p className="text-danger text-xs">{result.error}</p>
      )}

      {result && result.checks && (
        <div className="space-y-3">
          {Object.entries(result.checks).map(([key, check]) => (
            <div key={key} className="flex gap-3">
              <div className="shrink-0 mt-0.5">
                {check.ok
                  ? <CheckCircle2 size={13} className="text-signal" />
                  : <AlertCircle size={13} className="text-danger" />}
              </div>
              <div>
                <p className="text-xs font-medium text-ash-light">
                  {key.replace(/_/g, " ")}
                </p>
                <p className="text-xs text-ash/60 leading-relaxed">{check.message}</p>
              </div>
            </div>
          ))}
          <div className="pt-3 border-t mt-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className={`text-xs font-bold ${result.ok ? "text-signal" : "text-danger"}`}>
              {result.ok ? "✓ All checks passed — Gmail send should work" : "✗ Fix the issues above before sending"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function DraftRow({ draft, onRefresh }) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editSubject, setEditSubject] = useState(draft.subject);
  const [editBody, setEditBody] = useState(draft.body || "");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handleApprove() {
    setLoading("approve"); setError(null);
    try {
      await api.post(`/api/emails/${draft.id}/approve`);
      onRefresh();
    } catch (e) {
      setError(e.response?.data?.detail || "Approval failed");
    } finally { setLoading(null); }
  }

  async function handleSend() {
    setLoading("send"); setError(null);
    try {
      await api.post(`/api/emails/${draft.id}/send`);
      onRefresh();
    } catch (e) {
      setError(e.response?.data?.detail || "Send failed");
    } finally { setLoading(null); }
  }

  async function handleSave() {
    setLoading("save"); setError(null);
    try {
      await api.patch(`/api/emails/${draft.id}`, { subject: editSubject, body: editBody });
      setEditing(false);
      onRefresh();
    } catch (e) {
      setError(e.response?.data?.detail || "Save failed");
    } finally { setLoading(null); }
  }

  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-ink-700/30 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <p className="text-ash-light text-sm truncate">{draft.subject}</p>
          <p className="text-ash/40 text-xs mt-0.5">
            Lead: {draft.lead_name || draft.lead_id?.slice(0, 8)}
            {draft.lead_email
              ? <span className="text-signal/60 ml-2">{draft.lead_email}</span>
              : <span className="text-danger/60 ml-2">⚠ No email on lead</span>}
          </p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${STATUS_STYLES[draft.status] || STATUS_STYLES.draft}`}>
          {draft.status}
        </span>
        {expanded ? <ChevronUp size={14} className="text-ash/40 shrink-0" /> : <ChevronDown size={14} className="text-ash/40 shrink-0" />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {draft.status === "failed" && draft.failure_reason && (
                <div className="p-3 rounded text-xs text-danger leading-relaxed"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <p className="font-bold mb-1">Send failed:</p>
                  <p className="opacity-80">{draft.failure_reason}</p>
                  <p className="mt-2 opacity-60">Click "Run diagnostics" at the top to find the exact issue, then Approve again to retry.</p>
                </div>
              )}

              {error && (
                <p className="text-danger text-xs flex items-center gap-1.5">
                  <AlertCircle size={12} /> {error}
                </p>
              )}

              {editing ? (
                <div className="space-y-2">
                  <input
                    className="w-full text-xs px-3 py-2 rounded font-mono"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0" }}
                    value={editSubject}
                    onChange={(e) => setEditSubject(e.target.value)}
                    placeholder="Subject"
                  />
                  <textarea
                    className="w-full text-xs px-3 py-2 rounded font-mono resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0", minHeight: "140px" }}
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSave} disabled={loading === "save"}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded font-medium"
                      style={{ background: "rgba(20,184,166,0.15)", color: "#2DD4BF" }}>
                      {loading === "save" ? <Loader2 size={11} className="animate-spin" /> : <Check size={11} />}
                      Save
                    </button>
                    <button onClick={() => setEditing(false)}
                      className="text-xs px-3 py-1.5 rounded text-ash/50 hover:text-ash-light">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded text-xs text-ash/70 leading-relaxed whitespace-pre-wrap font-mono"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  {draft.body || <span className="opacity-30 italic">No body — regenerate this draft</span>}
                </div>
              )}

              {!editing && (
                <div className="flex flex-wrap gap-2">
                  {draft.status !== "sent" && (
                    <button onClick={() => { setEditing(true); setEditSubject(draft.subject); setEditBody(draft.body || ""); }}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded text-ash/50 hover:text-ash-light border"
                      style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                      <Edit3 size={11} /> Edit
                    </button>
                  )}
                  {(draft.status === "draft" || draft.status === "failed") && (
                    <button onClick={handleApprove} disabled={loading === "approve"}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded font-medium"
                      style={{ background: "rgba(184,150,12,0.15)", color: "#FBBF24" }}>
                      {loading === "approve" ? <Loader2 size={11} className="animate-spin" /> : <Check size={11} />}
                      Approve
                    </button>
                  )}
                  {draft.status === "approved" && (
                    <button onClick={handleSend} disabled={loading === "send" || !draft.lead_email}
                      title={!draft.lead_email ? "Lead has no email address — add one in Lead Finder" : ""}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded font-medium disabled:opacity-40"
                      style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E" }}>
                      {loading === "send" ? <Loader2 size={11} className="animate-spin" /> : <Send size={11} />}
                      {loading === "send" ? "Sending…" : "Send"}
                    </button>
                  )}
                  {draft.status === "sent" && (
                    <span className="inline-flex items-center gap-1 text-xs text-signal">
                      <CheckCircle2 size={11} /> Sent {draft.sent_at ? `· ${new Date(draft.sent_at).toLocaleDateString()}` : ""}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LeadEmailRow({ lead, onGenerated }) {
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(null);

  async function handleGenerate() {
    setGenerating(true); setError(null);
    try {
      await api.post("/api/emails/generate", { lead_id: lead.id });
      onGenerated();
    } catch (e) {
      setError(e.response?.data?.detail || "Generation failed — check AI key in Settings");
    } finally { setGenerating(false); }
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div>
        <p className="text-ash-light text-sm">{lead.business_name}</p>
        <p className="text-xs text-ash/40">
          {lead.niche?.replace(/_/g, " ")}
          {lead.email
            ? <span className="text-signal/60 ml-2">{lead.email}</span>
            : <span className="text-danger/60 ml-2">⚠ No email — add in Lead Finder</span>}
        </p>
        {error && <p className="text-danger text-xs mt-1">{error}</p>}
      </div>
      <button onClick={handleGenerate} disabled={generating}
        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded font-medium shrink-0 disabled:opacity-40"
        style={{ background: "rgba(20,184,166,0.12)", color: "#2DD4BF" }}>
        {generating ? <Loader2 size={11} className="animate-spin" /> : <Plus size={11} />}
        {generating ? "Generating…" : "Draft email"}
      </button>
    </div>
  );
}

export default function EmailQueue() {
  const [drafts, setDrafts] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backendError, setBackendError] = useState(false);
  const [showDiagnose, setShowDiagnose] = useState(false);
  const [tab, setTab] = useState("drafts");

  const refresh = useCallback(() => {
    Promise.all([
      api.get("/api/emails"),
      api.get("/api/leads"),
    ])
      .then(([emailsRes, leadsRes]) => {
        const leadMap = Object.fromEntries(leadsRes.data.map((l) => [l.id, l]));
        setDrafts(emailsRes.data.map((d) => ({
          ...d,
          lead_name: leadMap[d.lead_id]?.business_name,
          lead_email: leadMap[d.lead_id]?.email,
        })));
        const draftedLeadIds = new Set(emailsRes.data.map((d) => d.lead_id));
        setLeads(leadsRes.data.filter((l) => !draftedLeadIds.has(l.id)));
        setBackendError(false);
      })
      .catch(() => setBackendError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const sent = drafts.filter((d) => d.status === "sent").length;
  const pending = drafts.filter((d) => d.status !== "sent").length;

  return (
    <DashboardLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Email Queue</h1>
          <p className="text-ash text-sm">
            Every email is reviewed and approved manually. Nothing sends automatically.
          </p>
        </div>
        <button
          onClick={() => setShowDiagnose((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded border text-ash/60 hover:text-ash-light transition-colors shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <Stethoscope size={13} />
          {showDiagnose ? "Hide" : "Run diagnostics"}
        </button>
      </div>

      {showDiagnose && <DiagnosticPanel onClose={() => setShowDiagnose(false)} />}

      {backendError && (
        <div className="card p-4 mb-6 border border-danger/30 text-sm text-ash">
          Can't reach the backend — check it's deployed and reachable.
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Leads to draft", value: leads.length },
            { label: "Pending review", value: pending },
            { label: "Sent", value: sent },
          ].map(({ label, value }) => (
            <div key={label} className="card p-4 text-center">
              <p className="text-2xl font-bold text-ash-light">{value}</p>
              <p className="text-xs text-ash/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-1 mb-4 bg-ink-700 p-1 rounded-lg w-fit">
        {[
          { key: "drafts", label: `Drafts (${drafts.length})` },
          { key: "generate", label: `Generate (${leads.length})` },
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setTab(key)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors
              ${tab === key ? "bg-signal text-ink" : "text-ash hover:text-ash-light"}`}>
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-ash text-sm flex items-center gap-2">
          <Loader2 size={14} className="animate-spin" /> Loading…
        </div>
      ) : (
        <>
          {tab === "drafts" && (
            <div className="card overflow-hidden">
              {drafts.length === 0 ? (
                <div className="p-10 text-center">
                  <Mail size={28} className="mx-auto mb-3 text-ash/20" />
                  <p className="text-ash text-sm mb-1">No drafts yet.</p>
                  <p className="text-ash/40 text-xs">Switch to the "Generate" tab to draft emails for your leads.</p>
                </div>
              ) : (
                drafts.map((d) => (
                  <DraftRow key={d.id} draft={d} onRefresh={refresh} />
                ))
              )}
            </div>
          )}

          {tab === "generate" && (
            <div className="card overflow-hidden">
              {leads.length === 0 ? (
                <div className="p-10 text-center">
                  <CheckCircle2 size={28} className="mx-auto mb-3 text-signal/40" />
                  <p className="text-ash text-sm">All leads have drafts — check the Drafts tab.</p>
                </div>
              ) : (
                leads.map((l) => (
                  <LeadEmailRow key={l.id} lead={l} onGenerated={refresh} />
                ))
              )}
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
}

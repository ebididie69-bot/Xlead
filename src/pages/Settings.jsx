import { useEffect, useState } from "react";
import { Check, Lock } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

const SETTING_META = {
  GEMINI_API_KEY: { label: "Gemini API Key", hint: "Required — writes all site content, first AI image fallback" },
  GROK_API_KEY: { label: "Grok API Key", hint: "Optional — second AI image fallback, after Gemini" },
  GOOGLE_OAUTH_CLIENT_ID: { label: "Google OAuth Client ID", hint: "Required — from Google Cloud Console" },
  GOOGLE_OAUTH_CLIENT_SECRET: { label: "Google OAuth Client Secret", hint: "Required — keep private" },
  GMAIL_SENDER_ADDRESS: { label: "Gmail Sender Address", hint: "The admin's Gmail address" },
  GOOGLE_DRIVE_FOLDER_ID: { label: "Google Drive Folder ID", hint: "Optional — where screenshots/assets are stored" },
  IMAGE_GEN_API_KEY: { label: "Stability API Key", hint: "Optional — third/last-resort AI image fallback" },
  GOOGLE_PLACES_API_KEY: { label: "Google Places API Key", hint: "Optional — real business photos + ratings (paid)" },
  UNSPLASH_ACCESS_KEY: { label: "Unsplash Access Key", hint: "Optional — free-tier stock photo fallback" },
};

export default function Settings() {
  const [statuses, setStatuses] = useState({});
  const [drafts, setDrafts] = useState({});
  const [saving, setSaving] = useState(null);
  const [backendError, setBackendError] = useState(false);

  useEffect(() => {
    api.get("/api/settings")
      .then((res) => { setStatuses(res.data); setBackendError(false); })
      .catch(() => setBackendError(true));
  }, []);

  async function handleSave(key) {
    if (!drafts[key]) return;
    setSaving(key);
    try {
      await api.put("/api/settings", { key, value: drafts[key] });
      setStatuses((s) => ({ ...s, [key]: { configured: true } }));
      setDrafts((d) => ({ ...d, [key]: "" }));
    } finally {
      setSaving(null);
    }
  }

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Settings</h1>
      <p className="text-ash text-sm mb-8 flex items-center gap-1.5">
        <Lock size={13} /> Keys are encrypted at rest and never shown again after saving.
      </p>

      {backendError && (
        <div className="card p-4 mb-6 border border-danger/30 text-sm text-ash">
          Can't reach the backend right now — saved status below may be stale.
        </div>
      )}

      <div className="space-y-3 max-w-2xl">
        {Object.entries(SETTING_META).map(([key, meta]) => {
          const configured = statuses[key]?.configured;
          return (
            <div key={key} className="card p-4 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-ash-light text-sm font-medium">{meta.label}</p>
                  {configured && (
                    <span className="flex items-center gap-1 text-signal text-xs font-mono">
                      <Check size={12} /> configured
                    </span>
                  )}
                </div>
                <p className="text-ash text-xs mt-0.5">{meta.hint}</p>
              </div>
              <input
                type="password"
                placeholder={configured ? "•••••••••••• (replace)" : "Enter value"}
                className="input-field w-64 text-sm"
                value={drafts[key] || ""}
                onChange={(e) => setDrafts((d) => ({ ...d, [key]: e.target.value }))}
              />
              <button
                className="btn-secondary text-sm"
                disabled={!drafts[key] || saving === key}
                onClick={() => handleSave(key)}
              >
                {saving === key ? "Saving…" : "Save"}
              </button>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

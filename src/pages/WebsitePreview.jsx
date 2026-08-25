import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RotateCw, ImageIcon, Pencil, ExternalLink, Loader2 } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";

export default function WebsitePreview() {
  const { websiteId } = useParams();
  const [site, setSite] = useState(null);
  const [busy, setBusy] = useState(null); // "content" | "images" | null
  const [editing, setEditing] = useState(false);
  const [draftJson, setDraftJson] = useState("");
  const [toast, setToast] = useState(null);

  function refresh() {
    // Reuses the list endpoint response shape; a dedicated GET /api/websites/{id}
    // would be a small follow-up if this page needs more per-site detail.
    api.get("/api/websites")
      .then((res) => {
        const found = res.data.find((s) => s.id === websiteId);
        setSite(found);
      })
      .catch(() => notify("Can't reach the backend right now."));
  }
  useEffect(refresh, [websiteId]);

  function notify(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  async function handleRegenerateContent() {
    setBusy("content");
    try {
      await api.post(`/api/websites/${websiteId}/regenerate-content`);
      notify("Content regenerated");
      refresh();
    } finally {
      setBusy(null);
    }
  }

  async function handleRegenerateImages() {
    setBusy("images");
    try {
      await api.post(`/api/websites/${websiteId}/regenerate-images`);
      notify("Images resourced — real photos first, stock/AI as fallback");
      refresh();
    } finally {
      setBusy(null);
    }
  }

  async function handleSaveEdit() {
    try {
      const parsed = JSON.parse(draftJson);
      await api.patch(`/api/websites/${websiteId}/content`, { generated_json: parsed });
      notify("Content saved");
      setEditing(false);
      refresh();
    } catch {
      notify("That JSON couldn't be parsed — no changes saved");
    }
  }

  if (!site) {
    return (
      <DashboardLayout>
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-ink-700 rounded" />
          <div className="h-96 bg-ink-700 rounded-xl" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">{site.business_name}</h1>
      <p className="text-ash text-sm mb-8">{site.template_key} · secure demo link never contains the business name</p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        <div className="card overflow-hidden">
          <div className="px-4 py-2.5 border-b border-ink-600 bg-ink-700 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-danger" />
              <span className="w-2.5 h-2.5 rounded-full bg-brass" />
              <span className="w-2.5 h-2.5 rounded-full bg-signal" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-ash bg-ink-800 rounded px-3 py-1">
              leadforge.app/demo/{site.demo_token}
            </div>
          </div>
          <iframe
            title="Demo preview"
            src={`/demo/${site.demo_token}`}
            className="w-full"
            style={{ height: "640px", border: "none" }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="card p-4">
            <p className="text-xs text-ash mb-3">STATUS</p>
            <span className="badge badge-signal">{site.status}</span>
            <a
              href={`/demo/${site.demo_token}`} target="_blank" rel="noopener noreferrer"
              className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
            >
              <ExternalLink size={15} /> Open secure demo link
            </a>
          </div>

          <div className="card p-4 flex flex-col gap-2">
            <p className="text-xs text-ash mb-1">AI ACTIONS</p>
            <button onClick={handleRegenerateContent} disabled={busy === "content"} className="btn-secondary justify-start gap-2">
              {busy === "content" ? <Loader2 size={15} className="animate-spin" /> : <RotateCw size={15} />}
              Regenerate content
            </button>
            <button onClick={handleRegenerateImages} disabled={busy === "images"} className="btn-secondary justify-start gap-2">
              {busy === "images" ? <Loader2 size={15} className="animate-spin" /> : <ImageIcon size={15} />}
              Regenerate images
            </button>
            <button
              onClick={() => { setDraftJson(JSON.stringify(site.generated_json || {}, null, 2)); setEditing(true); }}
              className="btn-secondary justify-start gap-2"
            >
              <Pencil size={15} /> Edit content manually
            </button>
          </div>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
          <div className="card w-full max-w-2xl max-h-[80vh] flex flex-col">
            <div className="p-4 border-b border-ink-600">
              <p className="text-ash-light font-medium text-sm">Edit generated content (JSON)</p>
              <p className="text-ash text-xs mt-1">Same schema Gemini fills — edit any field directly.</p>
            </div>
            <textarea
              className="input-field flex-1 m-4 font-mono text-xs resize-none"
              style={{ minHeight: "320px" }}
              value={draftJson}
              onChange={(e) => setDraftJson(e.target.value)}
            />
            <div className="p-4 border-t border-ink-600 flex gap-2 justify-end">
              <button className="btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleSaveEdit}>Save changes</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 card px-4 py-3 text-sm text-ash-light shadow-lg z-50">
          {toast}
        </div>
      )}
    </DashboardLayout>
  );
}

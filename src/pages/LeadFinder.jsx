import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Loader2, Globe2, ExternalLink, Upload,
  CheckCircle2, XCircle, ChevronDown, ChevronUp,
  PlusCircle, Trash2, UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import SignalScore from "../components/SignalScore";
import api from "../services/api";

const COUNTRIES = [
  "Nigeria",
  "United Kingdom","Ireland","France","Germany","Spain","Portugal",
  "Italy","Netherlands","Belgium","Luxembourg","Switzerland","Austria",
  "Sweden","Norway","Denmark","Finland","Iceland","Poland",
  "Czech Republic","Slovakia","Hungary","Romania","Bulgaria","Greece",
  "Croatia","Slovenia","Estonia","Latvia","Lithuania","Malta","Cyprus",
  "United States","Canada","Mexico",
  "Ghana","Kenya","South Africa","Egypt","India","United Arab Emirates",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
  "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine",
  "Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia",
  "Washington","West Virginia","Wisconsin","Wyoming",
];

const NICHE_LABELS = {
  gym_fitness:"Gym & Fitness", salon_spa:"Salon & Spa",
  makeup_studio:"Makeup Studio", real_estate_agency:"Real Estate Agency",
  dental_clinic:"Dental Clinic", construction_company:"Construction Company",
  car_dealership:"Car Dealership", car_rental:"Car Rental",
  hotel_guest_house:"Hotel & Guest House",
  furniture_interior_design:"Furniture & Interior Design",
  cleaning_company:"Cleaning Company", bakery_cafe:"Bakery & Café",
  law_firm:"Law Firm", photography_studio:"Photography Studio",
  event_planning:"Event Planning & Catering",
  auto_repair_garage:"Auto Repair & Garage",
};

const STATUS_LABELS = {
  none:"No website", broken:"Broken website",
  facebook_only:"Facebook only", instagram_only:"Instagram only",
};

const EMPTY_MANUAL_FORM = {
  name:"", niche:"gym_fitness", country:"Nigeria",
  city:"", phone:"", email:"", address:"",
};

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (values[i] || "").trim(); });
    return obj;
  }).filter((r) => r.name);
}

function parseJson(text) {
  try {
    const data = JSON.parse(text);
    return Array.isArray(data) ? data.filter((r) => r.name) : null;
  } catch { return null; }
}

function ImportRow({ lead, idx, onRemove, onGenerate, generatingId, imported }) {
  const isGenerating = generatingId === `import-${idx}`;
  return (
    <tr className="border-t border-ink-600 hover:bg-ink-700/30">
      <td className="px-3 py-2.5 text-ash-light text-xs font-medium">{lead.name}</td>
      <td className="px-3 py-2.5 text-ash text-xs">{NICHE_LABELS[lead.niche] || lead.niche || "—"}</td>
      <td className="px-3 py-2.5 text-ash text-xs">{[lead.city, lead.country].filter(Boolean).join(", ") || "—"}</td>
      <td className="px-3 py-2.5 text-ash font-mono text-xs">{lead.phone || "—"}</td>
      <td className="px-3 py-2.5 text-ash font-mono text-xs">{lead.email || "—"}</td>
      <td className="px-3 py-2.5">
        {lead._demo_token ? (
          <Link to={`/demo/${lead._demo_token}`} target="_blank"
            className="inline-flex items-center gap-1 text-signal text-xs font-medium hover:underline">
            <ExternalLink size={11} /> Preview
          </Link>
        ) : lead._lead_id ? (
          <button onClick={() => onGenerate(idx, lead._lead_id)} disabled={isGenerating}
            className="inline-flex items-center gap-1 text-ash-light text-xs hover:text-signal disabled:opacity-40">
            {isGenerating ? <Loader2 size={11} className="animate-spin" /> : <Globe2 size={11} />}
            {isGenerating ? "Generating…" : "Generate site"}
          </button>
        ) : !imported ? (
          <button onClick={() => onRemove(idx)}
            className="text-ash/40 hover:text-danger transition-colors">
            <Trash2 size={13} />
          </button>
        ) : (
          <span className="text-ash/30 text-xs">—</span>
        )}
      </td>
    </tr>
  );
}

export default function LeadFinder() {
  const DEFAULT_NICHES = Object.keys(NICHE_LABELS);
  const [niches, setNiches] = useState(DEFAULT_NICHES);
  const [form, setForm] = useState({ niche: DEFAULT_NICHES[0], country:"Nigeria", city:"", state:"", max_leads:20 });
  const [customCountry, setCustomCountry] = useState(false);
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [loadingSaved, setLoadingSaved] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const [generatingId, setGeneratingId] = useState(null);

  const [addOpen, setAddOpen] = useState(false);
  const [addMode, setAddMode] = useState("manual");
  const [manualForm, setManualForm] = useState(EMPTY_MANUAL_FORM);
  const [importLeads, setImportLeads] = useState([]);
  const [importError, setImportError] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importDone, setImportDone] = useState(false);
  const [generatingAllImport, setGeneratingAllImport] = useState(false);
  const [importGeneratingId, setImportGeneratingId] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    api.get("/api/leads/niches")
      .then((res) => {
        setNiches(res.data);
        setForm((f) => ({ ...f, niche: f.niche || res.data[0] }));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!form.niche) return;
    setLoadingSaved(true);
    api.get("/api/leads", { params: { niche: form.niche } })
      .then((res) => { setResults(res.data); setSearched(res.data.length > 0); })
      .catch(() => {})
      .finally(() => setLoadingSaved(false));
  }, [form.niche]);

  async function handleSearch(e) {
    e.preventDefault();
    setSearching(true); setError(null); setResults([]); setSearched(false);
    try {
      const city = form.city.trim();
      const locationHint = [form.state, city].filter(Boolean).join(", ") || null;
      const payload = { niche: form.niche, country: form.country, max_leads: form.max_leads, city: locationHint };
      const res = await api.post("/api/leads/search", payload, { timeout: city ? 45000 : 100000 });
      setResults(res.data); setSearched(true);
    } catch (err) {
      if (err.response?.data?.detail) setError(err.response.data.detail);
      else if (err.code === "ECONNABORTED") setError("Search timed out. Try a specific city.");
      else setError("Couldn't reach the backend.");
    } finally { setSearching(false); }
  }

  async function handleGenerate(lead) {
    setGeneratingId(lead.id);
    try {
      const res = await api.post("/api/websites/generate", { lead_id: lead.id });
      setResults((prev) => prev.map((l) => l.id === lead.id ? { ...l, demo_token: res.data.demo_token } : l));
    } catch (err) {
      setError(err.response?.data?.detail || `Couldn't generate a website for ${lead.business_name}.`);
    } finally { setGeneratingId(null); }
  }

  async function handleGenerateEmail(lead) {
    if (!lead?.id) return;
    setGeneratingId(`email-${lead.id}`);
    try {
      await api.post("/api/emails/generate", { lead_id: lead.id });
      setError(null);
      alert("Email draft created — check Email Queue.");
    } catch (err) {
      setError(err.response?.data?.detail || err.message || "Failed to generate email draft");
    } finally {
      setGeneratingId(null);
    }
  }

  function handleAddManual(e) {
    e.preventDefault();
    if (!manualForm.name.trim()) return;
    setImportLeads((prev) => [...prev, { ...manualForm, _lead_id: null, _demo_token: null }]);
    setManualForm({ ...EMPTY_MANUAL_FORM, niche: manualForm.niche, country: manualForm.country });
    setImportDone(false);
  }

  function handleRemove(idx) {
    setImportLeads((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleFile(file) {
    if (!file) return;
    setImportError(null); setImportDone(false);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      let parsed = file.name.endsWith(".json") ? parseJson(text) : parseCsv(text);
      if (!parsed || !parsed.length) {
        setImportError("No valid entries found in this file.");
        return;
      }
      setImportLeads((prev) => [
        ...prev,
        ...parsed.map((l) => ({ ...l, _lead_id: null, _demo_token: null })),
      ]);
    };
    reader.readAsText(file);
  }

  async function handleImport() {
    if (!importLeads.length) return;
    setImporting(true); setImportError(null);
    try {
      const payload = {
        businesses: importLeads.map((l) => ({
          name: l.name, niche: l.niche || form.niche,
          country: l.country || "Nigeria", city: l.city || null,
          address: l.address || null, phone: l.phone || null,
          email: l.email || null, website: l.website || null,
          facebook: l.facebook || null, instagram: l.instagram || null,
          source: "manual_import",
        })),
      };
      const res = await api.post("/api/leads/import-web", payload);
      const added = res.data.added_leads || [];
      setImportLeads((prev) => prev.map((l) => {
        const match = added.find((a) => a.business_name.toLowerCase() === l.name.toLowerCase());
        return match ? { ...l, _lead_id: match.id } : l;
      }));
      setImportDone(true);
    } catch (err) {
      setImportError(err.response?.data?.detail || "Import failed.");
    } finally { setImporting(false); }
  }

  async function handleImportGenerate(idx, leadId) {
    setImportGeneratingId(`import-${idx}`);
    try {
      const res = await api.post("/api/websites/generate", { lead_id: leadId });
      setImportLeads((prev) => prev.map((l, i) => i === idx ? { ...l, _demo_token: res.data.demo_token } : l));
    } catch (err) {
      setImportError(err.response?.data?.detail || "Generation failed.");
    } finally { setImportGeneratingId(null); }
  }

  async function handleGenerateAll() {
    setGeneratingAllImport(true); setImportError(null);
    for (let i = 0; i < importLeads.length; i++) {
      const l = importLeads[i];
      if (!l._lead_id || l._demo_token) continue;
      await handleImportGenerate(i, l._lead_id);
    }
    setGeneratingAllImport(false);
  }

  const pendingGeneration = importLeads.filter((l) => l._lead_id && !l._demo_token).length;
  const unimported = importLeads.filter((l) => !l._lead_id).length;

  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Lead Finder</h1>
      <p className="text-ash text-sm mb-8">
        Find local businesses with weak or missing web presence, ranked by opportunity.
      </p>

      <form onSubmit={handleSearch} className="card p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label className="text-xs text-ash block mb-1.5">Business niche</label>
          <select className="input-field w-full" value={form.niche}
            onChange={(e) => setForm({ ...form, niche: e.target.value })}>
            {niches.map((n) => <option key={n} value={n}>{NICHE_LABELS[n] || n}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-ash block mb-1.5">Country</label>
          {customCountry ? (
            <input className="input-field w-full" placeholder="Type a country"
              value={form.country} autoFocus required
              onChange={(e) => setForm({ ...form, country: e.target.value })} />
          ) : (
            <select className="input-field w-full" value={form.country}
              onChange={(e) => {
                if (e.target.value === "__other__") { setCustomCountry(true); setForm({ ...form, country:"", state:"" }); }
                else setForm({ ...form, country: e.target.value, state: e.target.value === "United States" ? form.state : "" });
              }}>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
              <option value="__other__">Other…</option>
            </select>
          )}
        </div>
        {form.country === "United States" && (
          <div>
            <label className="text-xs text-ash block mb-1.5">State <span className="text-ash/60">(optional)</span></label>
            <select className="input-field w-full" value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}>
              <option value="">Whole country</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}
        <div>
          <label className="text-xs text-ash block mb-1.5">City <span className="text-ash/60">(optional)</span></label>
          <input className="input-field w-full" placeholder="Leave blank for whole country"
            value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
        </div>
        <div>
          <label className="text-xs text-ash block mb-1.5">Max leads</label>
          <input type="number" min={1} max={200} className="input-field w-full"
            value={form.max_leads} onChange={(e) => setForm({ ...form, max_leads: Number(e.target.value) })} />
        </div>
        <div className="col-span-2 md:col-span-4">
          <button type="submit" disabled={searching} className="btn-primary flex items-center gap-2">
            {searching ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
            {searching ? "Searching…" : "Find businesses"}
          </button>
        </div>
      </form>

      <div className="card mb-8">
        <button onClick={() => setAddOpen((v) => !v)}
          className="w-full flex items-center justify-between px-6 py-4 text-ash-light hover:text-signal transition-colors">
          <span className="flex items-center gap-2 font-medium text-sm">
            <UserPlus size={16} />
            Add leads manually
            {importLeads.length > 0 && (
              <span className="ml-2 bg-signal/20 text-signal text-xs px-2 py-0.5 rounded-full">
                {importLeads.length}
              </span>
            )}
          </span>
          {addOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <AnimatePresence>
          {addOpen && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
              exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }} className="overflow-hidden">
              <div className="border-t border-ink-600 px-6 pb-6">
                <div className="flex gap-1 mt-4 mb-5 bg-ink-700 p-1 rounded-lg w-fit">
                  <button onClick={() => setAddMode("manual")}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors
                      ${addMode === "manual" ? "bg-signal text-ink" : "text-ash hover:text-ash-light"}`}>
                    Type it in
                  </button>
                  <button onClick={() => setAddMode("file")}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors
                      ${addMode === "file" ? "bg-signal text-ink" : "text-ash hover:text-ash-light"}`}>
                    Upload file
                  </button>
                </div>

                {addMode === "manual" && (
                  <form onSubmit={handleAddManual} className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    <div className="col-span-2 md:col-span-1">
                      <label className="text-xs text-ash block mb-1">Business name *</label>
                      <input className="input-field w-full" placeholder="e.g. Joe's Barbershop"
                        value={manualForm.name} required
                        onChange={(e) => setManualForm({ ...manualForm, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs text-ash block mb-1">Niche</label>
                      <select className="input-field w-full" value={manualForm.niche}
                        onChange={(e) => setManualForm({ ...manualForm, niche: e.target.value })}>
                        {Object.entries(NICHE_LABELS).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-ash block mb-1">Country</label>
                      <select className="input-field w-full" value={manualForm.country}
                        onChange={(e) => setManualForm({ ...manualForm, country: e.target.value })}>
                        {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-ash block mb-1">City <span className="text-ash/50">(optional)</span></label>
                      <input className="input-field w-full" placeholder="e.g. Warri"
                        value={manualForm.city}
                        onChange={(e) => setManualForm({ ...manualForm, city: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs text-ash block mb-1">Phone <span className="text-ash/50">(optional)</span></label>
                      <input className="input-field w-full" placeholder="+234..."
                        value={manualForm.phone}
                        onChange={(e) => setManualForm({ ...manualForm, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs text-ash block mb-1">Email <span className="text-ash/50">(optional)</span></label>
                      <input className="input-field w-full" type="email" placeholder="info@..."
                        value={manualForm.email}
                        onChange={(e) => setManualForm({ ...manualForm, email: e.target.value })} />
                    </div>
                    <div className="col-span-2 md:col-span-3">
                      <label className="text-xs text-ash block mb-1">Address <span className="text-ash/50">(optional)</span></label>
                      <input className="input-field w-full" placeholder="Street address"
                        value={manualForm.address}
                        onChange={(e) => setManualForm({ ...manualForm, address: e.target.value })} />
                    </div>
                    <div className="col-span-2 md:col-span-3">
                      <button type="submit" className="inline-flex items-center gap-2 btn-primary text-sm">
                        <PlusCircle size={15} /> Add to list
                      </button>
                    </div>
                  </form>
                )}

                {addMode === "file" && (
                  <div className="mb-4">
                    <p className="text-ash text-xs mb-3">
                      Upload a spreadsheet exported as CSV, or a JSON file. Each row needs at least a business name.
                      Supported columns: name, niche, country, city, phone, email, address.
                    </p>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                        ${dragging ? "border-signal bg-signal/5" : "border-ink-500 hover:border-signal/50"}`}>
                      <Upload size={22} className="mx-auto mb-2 text-ash" />
                      <p className="text-ash text-sm">Drop file here or tap to browse</p>
                      <p className="text-ash/40 text-xs mt-1">.csv or .json</p>
                      <input ref={fileInputRef} type="file" accept=".csv,.json" className="hidden"
                        onChange={(e) => handleFile(e.target.files[0])} />
                    </div>
                  </div>
                )}

                {importError && (
                  <p className="text-danger text-xs mb-3 flex items-center gap-1.5">
                    <XCircle size={13} /> {importError}
                  </p>
                )}

                {importLeads.length > 0 && (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-ash text-xs">
                        {importLeads.length} lead{importLeads.length !== 1 ? "s" : ""} in list
                        {unimported > 0 && !importDone && ` · ${unimported} not yet saved`}
                      </p>
                      <div className="flex items-center gap-3">
                        {importDone && pendingGeneration > 0 && (
                          <button onClick={handleGenerateAll} disabled={generatingAllImport}
                            className="inline-flex items-center gap-1.5 btn-primary text-xs py-1.5 px-3">
                            {generatingAllImport ? <Loader2 size={12} className="animate-spin" /> : <Globe2 size={12} />}
                            {generatingAllImport ? "Generating all…" : `Generate all (${pendingGeneration})`}
                          </button>
                        )}
                        {!importDone && unimported > 0 && (
                          <button onClick={handleImport} disabled={importing}
                            className="inline-flex items-center gap-1.5 btn-primary text-xs py-1.5 px-3">
                            {importing ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle2 size={12} />}
                            {importing ? "Saving…" : `Save ${unimported} lead${unimported !== 1 ? "s" : ""}`}
                          </button>
                        )}
                        {importDone && (
                          <span className="inline-flex items-center gap-1 text-signal text-xs">
                            <CheckCircle2 size={13} /> Saved
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-ink-600">
                      <table className="w-full min-w-[560px]">
                        <thead className="bg-ink-700 text-ash text-xs uppercase tracking-wide">
                          <tr>
                            <th className="text-left px-3 py-2 font-medium">Name</th>
                            <th className="text-left px-3 py-2 font-medium">Niche</th>
                            <th className="text-left px-3 py-2 font-medium">Location</th>
                            <th className="text-left px-3 py-2 font-medium">Phone</th>
                            <th className="text-left px-3 py-2 font-medium">Email</th>
                            <th className="text-left px-3 py-2 font-medium">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {importLeads.map((lead, idx) => (
                            <ImportRow key={idx} lead={lead} idx={idx}
                              onRemove={handleRemove}
                              onGenerate={handleImportGenerate}
                              generatingId={importGeneratingId}
                              imported={importDone} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {loadingSaved && !searching && (
        <p className="text-ash text-xs mb-4">Loading previously found leads…</p>
      )}
      {error && <p className="text-danger text-sm mb-4 whitespace-pre-wrap">{error}</p>}
      {searched && !error && results.length === 0 && (
        <p className="text-ash text-sm mb-4">
          No new leads found. Try a different niche, city, or country-wide search.
        </p>
      )}

      {results.length > 0 && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-ink-600 gap-2">
            <span className="text-ash text-xs shrink-0">{results.length} leads</span>
            {results.some((l) => !l.demo_token) && (
              <button
                onClick={async () => { for (const lead of results) { if (!lead.demo_token) await handleGenerate(lead); } }}
                disabled={!!generatingId}
                className="inline-flex items-center gap-1.5 text-xs text-ash-light hover:text-signal disabled:opacity-40 shrink-0">
                <Globe2 size={12} /> Generate all sites
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[720px]">
            <thead className="bg-ink-700 text-ash text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">Business</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">Status</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">Contact</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">Score</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">Website</th>
              </tr>
            </thead>
            <tbody>
              {results.map((lead) => (
                <tr key={lead.id} className="border-t border-ink-600 hover:bg-ink-700/50">
                  <td className="px-4 py-3 text-ash-light font-medium whitespace-nowrap">{lead.business_name}</td>
                  <td className="px-4 py-3 text-ash whitespace-nowrap">{STATUS_LABELS[lead.website_status] || lead.website_status}</td>
                  <td className="px-4 py-3 text-ash font-mono text-xs">
                    {lead.phone || lead.email ? (
                      <span className="flex flex-col gap-0.5">
                        {lead.phone && <span className="whitespace-nowrap">{lead.phone}</span>}
                        {lead.email && <span className="text-signal/90 break-all">{lead.email}</span>}
                      </span>
                    ) : "—"}
                  </td>
                  <td className="px-4 py-3"><SignalScore score={lead.lead_score} /></td>
                  <td className="px-4 py-3">
                    {lead.demo_token ? (
                      <span className="inline-flex items-center gap-2 flex-wrap">
                        <Link to={`/demo/${lead.demo_token}`} target="_blank"
                          className="inline-flex items-center gap-1 text-signal text-xs font-medium hover:underline">
                          <ExternalLink size={12} /> Preview
                        </Link>
                        <button
                          onClick={() => handleGenerateEmail(lead)}
                          disabled={generatingId === `email-${lead.id}`}
                          className="inline-flex items-center gap-1 text-ash-light text-xs hover:text-signal disabled:opacity-50"
                          title={lead.email ? `Draft to ${lead.email}` : "Draft email (add email on lead to send later)"}
                        >
                          {generatingId === `email-${lead.id}` ? "Drafting…" : "Draft email"}
                        </button>
                      </span>
                    ) : (
                      <button onClick={() => handleGenerate(lead)} disabled={generatingId === lead.id}
                        className="inline-flex items-center gap-1 text-ash-light text-xs hover:text-signal disabled:opacity-50">
                        {generatingId === lead.id ? <Loader2 size={12} className="animate-spin" /> : <Globe2 size={12} />}
                        {generatingId === lead.id ? "Generating…" : "Generate site"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </motion.div>
      )}
    </DashboardLayout>
  );
}

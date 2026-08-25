import { Helmet } from "../components/Helmet";

export default function DemoNotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center text-center px-6">
      <Helmet noindex title="Link not found — LeadForge AI" />
      <div>
        <p className="text-ash font-mono text-xs mb-3">404</p>
        <h1 className="font-display text-2xl text-ash-light mb-2">This preview link isn't valid</h1>
        <p className="text-ash text-sm">
          It may have expired or been typed incorrectly. Please contact the sender for an updated link.
        </p>
      </div>
    </div>
  );
}

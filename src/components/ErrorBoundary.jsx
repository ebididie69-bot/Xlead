import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Keep this even without a remote logging service wired up yet —
    // console output is the only trace available once this fires in prod.
    console.error("LeadForge AI crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ink flex items-center justify-center px-6 text-center">
          <div>
            <p className="text-ash-light font-display text-lg mb-2">Something went wrong on this page.</p>
            <p className="text-ash text-sm mb-6">Try reloading — if it keeps happening, it's worth checking the browser console for details.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary text-sm"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

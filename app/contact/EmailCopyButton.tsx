"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-text-muted hover:text-text-primary hover:border-accent/40 transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[color:var(--success)]" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

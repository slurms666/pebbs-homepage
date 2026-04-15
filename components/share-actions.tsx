"use client";

import { useState } from "react";

const siteBaseUrl = "https://pebbs.app";

type ShareActionsProps = {
  path: string;
  title: string;
  className?: string;
};

export function ShareActions({ path, title, className }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);
  const url = new URL(path, siteBaseUrl).toString();

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function shareLink() {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
        return;
      } catch (error) {
        // If the user cancels the share sheet, do nothing.
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    await copyLink();
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            void shareLink();
          }}
          className="rounded-full border border-line px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-stone-50"
        >
          Share
        </button>
        <button
          type="button"
          onClick={() => {
            void copyLink();
          }}
          className="rounded-full border border-line px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-stone-50"
        >
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Link copied to clipboard." : ""}
      </p>
    </div>
  );
}

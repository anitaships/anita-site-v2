"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What does Anita do?",
  "Her strongest project?",
  "Good fit for growth ops?",
];

export default function AskBox() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.body) throw new Error("no body");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Sorry, something went wrong. You can reach Anita directly at anitaliu0818@gmail.com.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="mx-auto w-full max-w-xl text-left">
      {messages.length > 0 && (
        <div className="glass mb-3 rounded-3xl p-4">
          <div className="mb-1 flex items-center justify-between px-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-faint">
              Ask my work
            </span>
            <button
              onClick={() => {
                setMessages([]);
                setLoading(false);
              }}
              className="rounded-full px-2 py-1 text-xs text-faint transition-colors hover:text-ink"
              aria-label="Clear conversation"
            >
              Clear ✕
            </button>
          </div>
          <div
            ref={scrollRef}
            className="max-h-72 space-y-3 overflow-y-auto px-1 py-1"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex"}
              >
                <span
                  className={`inline-block max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-ink font-medium text-bg"
                      : "text-muted"
                  }`}
                >
                  {m.content ||
                    (loading && i === messages.length - 1 ? "…" : "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="glass flex items-center gap-2 rounded-full py-2 pl-5 pr-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Anita…"
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
          aria-label="Ask about Anita"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-opacity disabled:opacity-40"
        >
          {loading ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-bg/40 border-t-bg" />
          ) : (
            "→"
          )}
        </button>
      </form>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            disabled={loading}
            className="rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-ink hover:text-ink disabled:opacity-40"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

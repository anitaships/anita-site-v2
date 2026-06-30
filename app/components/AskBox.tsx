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
  const [collapsed, setCollapsed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);
    setCollapsed(false);
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

  const hasChat = messages.length > 0;

  return (
    <div className="mx-auto w-full max-w-xl text-left">
      {/* 会话面板：展开且有内容时显示 */}
      {hasChat && !collapsed && (
        <div
          ref={scrollRef}
          className="glass mb-3 max-h-72 space-y-3 overflow-y-auto rounded-[1.75rem] p-5"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "flex justify-end" : "flex"}
            >
              <span
                className={`inline-block max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user" ? "bg-ink font-medium text-bg" : "text-muted"
                }`}
              >
                {m.content || (loading && i === messages.length - 1 ? "…" : "")}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 输入容器：流光标签 + 控件 + 输入框 合一 */}
      <div className="glass rounded-[1.75rem] p-3">
        <div className="flex items-center justify-between px-2 pb-2">
          <span className="hero-shimmer text-[11px] font-bold uppercase tracking-[0.25em]">
            Ask my work
          </span>
          {hasChat && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="flex h-6 w-6 items-center justify-center rounded-full text-faint transition-colors hover:text-ink"
                aria-label={collapsed ? "Expand" : "Collapse"}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${
                    collapsed ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setMessages([]);
                  setLoading(false);
                  setCollapsed(false);
                }}
                className="text-[11px] text-faint transition-colors hover:text-ink"
                aria-label="Clear"
              >
                Clear ✕
              </button>
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 rounded-full bg-white/[0.03] py-2 pl-5 pr-2"
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
          >
            {loading ? (
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-bg/40 border-t-bg" />
            ) : (
              "→"
            )}
          </button>
        </form>
      </div>

      {/* 提示问题：悬停抬起 + 点击下压 微动效 */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            disabled={loading}
            className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink active:scale-95 disabled:opacity-40"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

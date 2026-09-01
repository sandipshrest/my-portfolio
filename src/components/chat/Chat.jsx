"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Hi there! I'm Sandip's AI assistant. Feel free to ask me anything about Sandip's skills, projects, experience, or services!",
};

function ChatIcon({ className = "text-2xl" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
    </svg>
  );
}

function CloseIcon({ className = "text-xl" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
    </svg>
  );
}

function RobotIcon({ className = "text-white text-lg" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
    </svg>
  );
}

function SendIcon({ className = "text-sm" }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z" />
    </svg>
  );
}

export function ChatButton({ onClick, isOpen, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      title="Chat with Sandip's AI Assistant"
      aria-label={ariaLabel}
      type="button"
    >
      {isOpen ? <CloseIcon className="text-2xl" /> : <ChatIcon className="text-2xl" />}
    </button>
  );
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const btnRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const didDrag = useRef(false);
  const isPointerDown = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, left: 0, top: 0 });

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Drag handlers
  const onPointerDown = useCallback((e) => {
    if (!btnRef.current) return;
    didDrag.current = false;
    isPointerDown.current = true;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    dragStart.current = {
      x: cx,
      y: cy,
      left: btnRef.current.offsetLeft,
      top: btnRef.current.offsetTop,
    };
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!isPointerDown.current) return;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = cx - dragStart.current.x;
      const dy = cy - dragStart.current.y;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        didDrag.current = true;
      }
      if (didDrag.current && btnRef.current) {
        e.preventDefault();
        const newLeft = dragStart.current.left + dx;
        const newTop = dragStart.current.top + dy;
        const maxLeft = window.innerWidth - 64;
        const maxTop = window.innerHeight - 64;
        btnRef.current.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + "px";
        btnRef.current.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
        btnRef.current.style.right = "auto";
        btnRef.current.style.bottom = "auto";
      }
    };
    const onUp = () => {
      isPointerDown.current = false;
    };
    window.addEventListener("mousemove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const toggleChat = () => {
    if (!didDrag.current) {
      setIsOpen((v) => !v);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to get response");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.output },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setError(err.message || "Sorry, something went wrong. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={btnRef}
      style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
    >
      <ChatButton
        onClick={toggleChat}
        isOpen={isOpen}
        ariaLabel="Open chat with Sandip's AI Assistant"
      />

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-gray-950 border border-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-rose-600 rounded-full flex items-center justify-center">
              <RobotIcon />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">
                Sandip&apos;s Assistant
              </h3>
              <p className="text-gray-400 text-xs">
                Ask me anything about Sandip
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-gray-400 hover:text-white transition-colors"
              type="button"
            >
              <CloseIcon className="text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ scrollbarWidth: "thin", scrollbarColor: "#4B5563 #1F2937" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-rose-600 text-white rounded-br-md"
                      : "bg-gray-900 text-gray-200 rounded-bl-md border border-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-900 border border-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {error && (
            <div className="px-4 pt-3 pb-0 text-xs text-red-400 bg-gray-950">
              Error: {error}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-800 px-4 py-3 flex items-center gap-2 flex-shrink-0"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects..."
              disabled={isLoading}
              className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-rose-600 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// Render a stable button during SSR, then switch to the interactive widget
// on the client after hydration. This avoids any hydration mismatch that
// could cause the button to disappear.
export default function Chat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}>
        <ChatButton
          onClick={() => {}}
          isOpen={false}
          ariaLabel="Open chat with Sandip's AI Assistant"
        />
      </div>
    );
  }

  return <ChatWidget />;
}

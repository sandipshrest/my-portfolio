import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import Chat from "./Chat";

describe("Chat", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders the chat button on initial render", () => {
    render(<Chat />);
    const button = screen.getByLabelText(/open chat/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it("keeps the chat button visible after effects run", async () => {
    render(<Chat />);
    await waitFor(() => {
      expect(screen.getByLabelText(/open chat/i)).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/open chat/i)).toBeVisible();
  });

  it("hydrates without removing the chat button", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    // Server render
    const html = renderToString(<Chat />);
    container.innerHTML = html;

    expect(container.querySelector('button[aria-label="Open chat with Sandip\'s AI Assistant"]')).not.toBeNull();

    // Client hydrate
    hydrateRoot(container, <Chat />);

    await waitFor(() => {
      expect(container.querySelector('button[aria-label="Open chat with Sandip\'s AI Assistant"]')).not.toBeNull();
    });

    document.body.removeChild(container);
  });

  it("opens the chat window when the button is clicked", async () => {
    render(<Chat />);
    const button = screen.getByLabelText(/open chat/i);
    await userEvent.click(button);
    expect(screen.getByText("Sandip's Assistant")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ask about skills/i)).toBeInTheDocument();
  });

  it("keeps the chat button visible after opening and closing the chat", async () => {
    render(<Chat />);
    const button = screen.getByLabelText(/open chat/i);
    await userEvent.click(button);
    expect(screen.getByText("Sandip's Assistant")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText(/close chat/i));
    expect(screen.queryByText("Sandip's Assistant")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/open chat/i)).toBeVisible();
  });

  it("sends a message and displays the assistant response", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ output: "I work with React and Node.js." }),
    });

    render(<Chat />);
    await userEvent.click(screen.getByLabelText(/open chat/i));

    const input = screen.getByPlaceholderText(/ask about skills/i);
    await userEvent.type(input, "What tech do you use?");
    await userEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText("I work with React and Node.js.")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith(
      "/api/gemini",
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining("What tech do you use?"),
      })
    );
  });

  it("displays an error when the API fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "API key not set" }),
    });

    render(<Chat />);
    await userEvent.click(screen.getByLabelText(/open chat/i));

    const input = screen.getByPlaceholderText(/ask about skills/i);
    await userEvent.type(input, "Hello");
    await userEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/api key not set/i)).toBeInTheDocument();
    });
  });
});

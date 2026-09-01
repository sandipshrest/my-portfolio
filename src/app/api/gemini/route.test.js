// Mock @google/generative-ai
const mockSendMessage = jest.fn();
const mockStartChat = jest.fn(() => ({ sendMessage: mockSendMessage }));
const mockGetGenerativeModel = jest.fn(() => ({
  startChat: mockStartChat,
}));

jest.mock("@google/generative-ai", () => ({
  GoogleGenerativeAI: jest.fn(() => ({
    getGenerativeModel: mockGetGenerativeModel,
  })),
}));

// Import the route after mocks are set
const { POST } = require("./route");

function createRequest(body) {
  return {
    json: async () => body,
  };
}

async function getJson(res) {
  return res.json();
}

describe("POST /api/gemini", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...originalEnv, GEMINI_API_KEY: "test-key" };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("returns 500 when GEMINI_API_KEY is not set", async () => {
    delete process.env.GEMINI_API_KEY;
    const req = createRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    const data = await getJson(res);

    expect(res.status).toBe(500);
    expect(data.error).toContain("API key not set");
  });

  it("returns 400 for invalid messages", async () => {
    const req = createRequest({ messages: "not-an-array" });
    const res = await POST(req);
    const data = await getJson(res);

    expect(res.status).toBe(400);
    expect(data.error).toContain("Invalid messages format");
  });

  it("calls Gemini with the last user message and returns output", async () => {
    mockSendMessage.mockResolvedValueOnce({
      response: { text: () => "I use React and Node.js." },
    });

    const messages = [
      { role: "assistant", content: "Welcome!" },
      { role: "user", content: "Hello" },
      { role: "assistant", content: "Hi there!" },
      { role: "user", content: "What tech do you use?" },
    ];

    const req = createRequest({ messages });
    const res = await POST(req);
    const data = await getJson(res);

    expect(res.status).toBe(200);
    expect(data.output).toBe("I use React and Node.js.");
    expect(mockGetGenerativeModel).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gemini-3.6-flash",
      }),
      expect.objectContaining({
        apiVersion: "v1",
      })
    );
    expect(mockStartChat).toHaveBeenCalledWith({
      history: [
        { role: "user", parts: [{ text: "Hello" }] },
        { role: "model", parts: [{ text: "Hi there!" }] },
      ],
    });
    expect(mockSendMessage).toHaveBeenCalledWith("What tech do you use?");
  });

  it("skips the welcome message so history starts with user", async () => {
    mockSendMessage.mockResolvedValueOnce({
      response: { text: () => "Answer" },
    });

    const messages = [
      { role: "assistant", content: "Welcome!" },
      { role: "user", content: "First question" },
    ];

    const req = createRequest({ messages });
    await POST(req);

    expect(mockStartChat).toHaveBeenCalledWith({
      history: [],
    });
    expect(mockSendMessage).toHaveBeenCalledWith("First question");
  });

  it("returns the API error message on failure", async () => {
    mockSendMessage.mockRejectedValueOnce(new Error("Rate limit exceeded"));

    const req = createRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    const data = await getJson(res);

    expect(res.status).toBe(500);
    expect(data.error).toBe("Rate limit exceeded");
  });
});

import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Polyfills for jsdom
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Response polyfill needed for NextResponse in API route tests
const nodeFetch = require("node-fetch");
if (typeof global.Response === "undefined") {
  global.Response = nodeFetch.Response;
  global.Headers = nodeFetch.Headers;
  global.Request = nodeFetch.Request;
}

// node-fetch v2 Response doesn't have the static .json() method that
// NextResponse.json() delegates to in Next.js 14.
if (!global.Response.json) {
  global.Response.json = (data, init = {}) => {
    const body = typeof data === "string" ? data : JSON.stringify(data);
    return new global.Response(body, {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init.headers || {}),
      },
    });
  };
}

// Mock fetch globally
global.fetch = jest.fn();

// scrollIntoView is not implemented in jsdom
Element.prototype.scrollIntoView = jest.fn();

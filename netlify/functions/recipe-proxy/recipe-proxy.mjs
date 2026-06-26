const TARGETS = {
  deepseek: "https://api.deepseek.com/v1",
  dashscope: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  zhipu: "https://open.bigmodel.cn/api/paas/v4",
  moonshot: "https://api.moonshot.cn/v1",
};

function detectProvider(path) {
  for (const [key, _base] of Object.entries(TARGETS)) {
    if (path.includes(`/recipe-api/${key}`)) return key;
  }
  return null;
}

export default async function handler(event) {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers": "Content-Type, Authorization",
      },
    };
  }

  const path = event.path;
  const provider = detectProvider(path);

  if (!provider) {
    return {
      statusCode: 400,
      headers: { "access-control-allow-origin": "*" },
      body: JSON.stringify({ error: `Unknown API provider in path: ${path}` }),
    };
  }

  const base = TARGETS[provider];
  // Extract the suffix after /recipe-api/<provider>
  const suffix = path.split(`/recipe-api/${provider}`)[1] || "/chat/completions";
  const targetUrl = `${base}${suffix}`;

  console.log(`[recipe-proxy] ${event.httpMethod} → ${targetUrl}`);

  try {
    const fetchOptions = {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Forward Authorization header from the client
    if (event.headers.authorization) {
      fetchOptions.headers["Authorization"] = event.headers.authorization;
    }

    // Forward request body
    if (event.body) {
      fetchOptions.body = event.body;
    }

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get("content-type") || "";
    const body = await response.text();

    const headers = {
      "access-control-allow-origin": "*",
      "content-type": contentType,
    };

    return {
      statusCode: response.status,
      headers,
      body,
    };
  } catch (err) {
    console.error("[recipe-proxy] Error:", err.message);
    return {
      statusCode: 504,
      headers: {
        "access-control-allow-origin": "*",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        error: `API proxy error: ${err.message}`,
        hint: "AI API 响应超时，请重试或切换模型",
      }),
    };
  }
}

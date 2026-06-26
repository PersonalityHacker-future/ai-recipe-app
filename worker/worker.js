// Cloudflare Worker - API反向代理
// 部署到 Cloudflare Workers 即可使用，免费额度：每日10万次请求

const API_MAP = {
  deepseek: "https://api.deepseek.com",
  dashscope: "https://dashscope.aliyuncs.com",
  zhipu: "https://open.bigmodel.cn",
  moonshot: "https://api.moonshot.cn",
};

export default {
  async fetch(request) {
    // 处理 CORS 预检请求
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // 路由: /recipe-api/:provider/chat/completions
    const match = path.match(/^\/recipe-api\/([^/]+)(\/.*)$/);
    if (!match) {
      return new Response(JSON.stringify({ error: "无效路径" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const provider = match[1];
    const subPath = match[2];
    const targetBase = API_MAP[provider];

    if (!targetBase) {
      return new Response(JSON.stringify({ error: "未知的模型提供商" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 构建目标 URL
    let targetUrl;
    if (provider === "dashscope") {
      targetUrl = `${targetBase}/compatible-mode${subPath}`;
    } else if (provider === "zhipu") {
      targetUrl = `${targetBase}/api/paas${subPath}`;
    } else {
      targetUrl = `${targetBase}${subPath}`;
    }

    try {
      // 转发请求
      const headers = new Headers(request.headers);
      headers.set("Host", new URL(targetUrl).host);

      const response = await fetch(targetUrl, {
        method: request.method,
        headers: headers,
        body: request.method !== "GET" ? await request.text() : undefined,
      });

      // 返回响应并添加 CORS 头
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set("Access-Control-Allow-Origin", "*");
      responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      responseHeaders.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

      return new Response(response.body, {
        status: response.status,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};

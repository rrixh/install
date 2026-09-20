export async function onRequestPost(context) {
  const { request, env } = context;

  const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    });

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json({ success: false, error: "Contact service is not configured." }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid request." }, 400);
  }

  const clean = (value, max) =>
    String(value ?? "")
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, max);

  const name = clean(body.name, 80);
  const email = clean(body.email, 160);
  const type = clean(body.type || "General", 80);
  const message = clean(body.message, 3000);
  const company = clean(body.company, 120);

  // Honeypot: silently accept obvious bot submissions without sending email.
  if (company) {
    return json({ success: true });
  }

  if (!name || !email || !message) {
    return json({ success: false, error: "Missing required fields." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: "Invalid email address." }, 400);
  }

  const allowedTypes = new Set([
    "General",
    "Press / Editorial",
    "Collaboration",
    "Booking / Business"
  ]);

  const safeType = allowedTypes.has(type) ? type : "General";

  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const emailHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f6f6f6;padding:28px;color:#111">
      <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e7e7e7;border-radius:16px;overflow:hidden">
        <div style="background:#0b0b0d;color:#fff;padding:22px 26px">
          <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#c9c5c0">R$G MJ Official Artist Page</div>
          <h1 style="font-size:24px;margin:8px 0 0">New website message</h1>
        </div>
        <div style="padding:26px">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Inquiry:</strong> ${escapeHtml(safeType)}</p>
          <div style="margin-top:22px;padding-top:20px;border-top:1px solid #ececec">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#777;margin-bottom:8px">Message</div>
            <div style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `[R$G MJ Website] ${safeType} â ${name}`,
      html: emailHtml,
      text:
        `New R$G MJ website message\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Inquiry: ${safeType}\n\n` +
        `${message}`
    })
  });

  if (!resendResponse.ok) {
    let detail = "Email provider rejected the message.";
    try {
      const providerError = await resendResponse.json();
      if (providerError?.message) detail = providerError.message;
    } catch {}

    console.error("Resend error:", detail);
    return json({ success: false, error: "Message could not be delivered." }, 502);
  }

  return json({ success: true });
}

export async function onRequest(context) {
  if (context.request.method === "POST") {
    return onRequestPost(context);
  }

  return new Response("Method Not Allowed", {
    status: 405,
    headers: { "Allow": "POST" }
  });
}

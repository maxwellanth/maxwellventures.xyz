type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  website?: unknown;
};

const fieldLimits = {
  email: 160,
  message: 4000,
  name: 120,
  website: 240,
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function jsonResponse(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status });
}

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse(
      { ok: false, code: "invalid_json", message: "Invalid request body." },
      400,
    );
  }

  const name = cleanText(payload.name, fieldLimits.name);
  const email = cleanText(payload.email, fieldLimits.email);
  const website = cleanText(payload.website, fieldLimits.website);
  const message = cleanText(payload.message, fieldLimits.message);

  if (!name || !email || !message) {
    return jsonResponse(
      {
        ok: false,
        code: "missing_fields",
        message: "Name, email, and project notes are required.",
      },
      400,
    );
  }

  if (!isValidEmail(email)) {
    return jsonResponse(
      { ok: false, code: "invalid_email", message: "Enter a valid email." },
      400,
    );
  }

  const webhookUrl = process.env.MAXWELL_CONTACT_WEBHOOK_URL;
  const webhookSecret = process.env.MAXWELL_CONTACT_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return jsonResponse(
      {
        ok: false,
        code: "unconfigured",
        message: "The approved inquiry destination is not configured yet.",
      },
      503,
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-maxwell-contact-secret": webhookSecret,
      },
      body: JSON.stringify({
        email,
        message,
        name,
        source: "maxwellventures.xyz/contact",
        submittedAt: new Date().toISOString(),
        website,
      }),
    });

    if (!webhookResponse.ok) {
      return jsonResponse(
        {
          ok: false,
          code: "delivery_failed",
          message: "The inquiry could not be delivered.",
        },
        502,
      );
    }
  } catch {
    return jsonResponse(
      {
        ok: false,
        code: "delivery_failed",
        message: "The inquiry could not be delivered.",
      },
      502,
    );
  }

  return jsonResponse({ ok: true }, 200);
}

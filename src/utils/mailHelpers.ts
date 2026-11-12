// src/utils/mailHelpers.ts

export function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(/[\r\n]+/g, " ").trim();
  return cleaned.slice(0, maxLen);
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderEmailShell(bodyRowsHtml: string): string {
  const logoUrl = "https://trekkmobility.com/assets/logo.png";
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;padding:0;background:#f4f6f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f5;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #ECF1EE;">
            <!-- Header -->
            <tr>
              <td align="center" style="background:#F7F9F8;padding:28px 24px;border-bottom:1px solid #ECF1EE;">
                <img src="${logoUrl}" width="150" alt="Trekk Mobility" style="display:block;border:0;">
              </td>
            </tr>
            <!-- Content -->
            ${bodyRowsHtml}
            <!-- Footer -->
            <tr>
              <td style="padding:18px 32px;background:#F7F9F8;border-top:1px solid #ECF1EE;">
                <p style="margin:0;font-size:12px;color:#8A948F;line-height:1.5;">
                  Trekk Mobility &middot; <a href="https://trekkmobility.com" style="color:#12D18E;text-decoration:none;">trekkmobility.com</a>
                  <br>Plot 660, Oluwatoyin Eleoramo Street, Omole Phase 2, Ikeja, Lagos, Nigeria
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildDemoConfirmationHtml(params: {
  firstName: string;
  company: string;
  vehicleType: string;
}): string {
  const { firstName, company, vehicleType } = params;
  const body = `
    <tr>
      <td style="padding:32px 32px 8px;">
        <p style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#0B1220;font-weight:700;">
          Hi ${escapeHtml(firstName)}, we've got your request.
        </p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3A4440;">
          Thanks for requesting a demo of the Trekk Mobility platform for <strong>${escapeHtml(
            company
          )}</strong>. One of our mobility specialists will reach out to schedule a live walkthrough &mdash; usually within one business day.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2F8F4;border:1px solid #D7E8DD;border-radius:6px;">
          <tr>
            <td style="padding:18px 20px;">
              <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">Company / Fleet</p>
              <p style="margin:0 0 14px;font-size:16px;font-weight:700;color:#102A23;">${escapeHtml(company)}</p>
              <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">Vehicle Type</p>
              <p style="margin:0;font-size:15px;color:#102A23;">${escapeHtml(vehicleType)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px;">
        <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3A4440;">
          If anything changes in the meantime, reply to this email or reach us at <a href="mailto:hello@trekkmobility.com" style="color:#1E7A4C;font-weight:600;">hello@trekkmobility.com</a>.
        </p>
        <p style="margin:0;font-size:15px;line-height:1.6;color:#3A4440;">
          Talk soon,<br><strong>The Trekk Mobility Team</strong>
        </p>
      </td>
    </tr>
  `;
  return renderEmailShell(body);
}

export function buildLaunchConfirmationHtml(params: {
  firstName: string;
  organisation: string;
}): string {
  const { firstName, organisation } = params;
  const eventDate = "November 24, 2026";
  const eventTime = "2:00 PM WAT (UTC+1)";
  const body = `
    <tr>
      <td style="padding:32px 32px 8px;">
        <p style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#0B1220;font-weight:700;">
          Hi ${escapeHtml(firstName)}, you're confirmed.
        </p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3A4440;">
          Thanks for registering for the Trekk Mobility Official Launch for <strong>${escapeHtml(
            organisation
          )}</strong>. We've saved your place for our launch event and digital press conference.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2F8F4;border:1px solid #D7E8DD;border-radius:6px;">
          <tr>
            <td style="padding:18px 20px;">
              <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">When</p>
              <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:#102A23;">${eventDate} &middot; ${eventTime}</p>
              <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">Where</p>
              <p style="margin:0;font-size:15px;color:#102A23;">Online &middot; Worldwide</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px;">
        <p style="margin:0;font-size:15px;line-height:1.6;color:#3A4440;">
          See you there,<br><strong>The Trekk Mobility Team</strong>
        </p>
      </td>
    </tr>
  `;
  return renderEmailShell(body);
}


import crypto from "crypto";

type MailchimpSubscribeParams = {
  email: string;
  tags?: string[];
  mergeFields?: Record<string, string>;
};

type MailchimpResult = {
  success: boolean;
  message: string;
};

export async function subscribeToMailchimp({
  email,
  tags = ["Website Newsletter"],
  mergeFields = {},
}: MailchimpSubscribeParams): Promise<MailchimpResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID || process.env.MAILCHIMP_LIST_ID;
  const serverPrefix =
    process.env.MAILCHIMP_SERVER_PREFIX ||
    (apiKey && apiKey.includes("-") ? apiKey.split("-")[1] : "us1");

  // If no API key configured, gracefully acknowledge subscription (e.g. dev/staging mode)
  if (!apiKey || !listId) {
    console.log(`[Mailchimp Mock] Subscribed email: ${email} with tags: ${tags.join(", ")}`);
    return {
      success: true,
      message: "Thank you for subscribing to Trekk Mobility updates!",
    };
  }

  try {
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: mergeFields,
        tags,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.detail || "Unable to subscribe. Please try again.",
      };
    }

    return {
      success: true,
      message: "You're successfully subscribed to Trekk Mobility!",
    };
  } catch (error) {
    console.error("Mailchimp subscription error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while subscribing. Please try again.",
    };
  }
}


<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/mail-config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail is not configured on the server']);
    exit;
}
$config = require $configPath;

// Honeypot - pretend success so bots move on, but send nothing.
if (!empty($_POST['_honey'])) {
    echo json_encode(['success' => true]);
    exit;
}

function field(string $name, int $maxLen = 500): string
{
    $value = isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
    $value = str_replace(["\r", "\n"], ' ', $value);
    return mb_substr($value, 0, $maxLen);
}

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$firstName = field('first_name', 80);
$lastName = field('last_name', 80);
$email = field('email', 200);
$organisation = field('organisation', 160);
$country = field('country', 100);
$joiningAs = field('joining_as', 100);
$interest = field('interest', 1200);

if ($firstName === '' || $lastName === '' || $email === '' || $organisation === '' || $country === '' || $joiningAs === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

require __DIR__ . '/lib/phpmailer/Exception.php';
require __DIR__ . '/lib/phpmailer/PHPMailer.php';
require __DIR__ . '/lib/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

function sendMail(array $config, string $to, string $toName, string $replyTo, string $subject, string $html, string $plain): bool
{
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['smtp_username'];
        $mail->Password = $config['smtp_password'];
        $mail->SMTPSecure = $config['smtp_encryption'];
        $mail->Port = $config['smtp_port'];
        $mail->CharSet = 'UTF-8';

        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($to, $toName);
        $mail->addReplyTo($replyTo);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $html;
        $mail->AltBody = $plain;

        $mail->send();
        return true;
    } catch (PHPMailerException $e) {
        error_log('Trekk Mobility mail send failed: ' . $mail->ErrorInfo);
        return false;
    }
}

$logoUrl = 'https://trekkmobility.com/assets/logo.png';
$eventDate = 'November 24, 2026';
$eventTime = '2:00 PM WAT (UTC+1)';
$fullName = trim($firstName . ' ' . $lastName);

$confirmationHtml = <<<HTML
<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f4f6f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td align="center" style="background:#102A23;padding:28px 24px;">
              <img src="{$logoUrl}" width="150" alt="Trekk Mobility" style="display:block;">
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;">
              <p style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#0B1220;font-weight:700;">Hi {$firstName}, you're confirmed.</p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3A4440;">
                Thanks for registering for the Trekk Mobility Official Launch. We've received your details and saved your place for our launch event and digital press conference.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2F8F4;border:1px solid #D7E8DD;border-radius:6px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">When</p>
                    <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:#102A23;">{$eventDate} &middot; {$eventTime}</p>
                    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#5C6B64;">Where</p>
                    <p style="margin:0;font-size:15px;color:#102A23;">Online &middot; Worldwide</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3A4440;">
                We'll send the joining link and full event schedule closer to the date. If you have any questions in the meantime, just reply to this email or reach us at <a href="mailto:hello@trekkmobility.com" style="color:#1E7A4C;">hello@trekkmobility.com</a>.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.6;color:#3A4440;">See you there,<br>The Trekk Mobility Team</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:#F7F9F8;border-top:1px solid #ECF1EE;">
              <p style="margin:0;font-size:12px;color:#8A948F;">Trekk Mobility &middot; trekkmobility.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$confirmationPlain = "Hi {$firstName}, you're confirmed.\n\n"
    . "Thanks for registering for the Trekk Mobility Official Launch. We've received your details and saved your place for our launch event and digital press conference.\n\n"
    . "When: {$eventDate}, {$eventTime}\n"
    . "Where: Online, Worldwide\n\n"
    . "We'll send the joining link and full event schedule closer to the date. If you have any questions in the meantime, just reply to this email or reach us at hello@trekkmobility.com.\n\n"
    . "See you there,\nThe Trekk Mobility Team";

$adminRows = [
    'Joining as' => $joiningAs,
    'Name' => $fullName,
    'Email' => $email,
    'Organisation' => $organisation,
    'Country' => $country,
    'Interest / question' => $interest !== '' ? $interest : '-',
];

$adminRowsHtml = '';
foreach ($adminRows as $label => $value) {
    $adminRowsHtml .= '<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:700;color:#102A23;white-space:nowrap;">'
        . escape($label) . '</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#333;">' . nl2br(escape($value)) . '</td></tr>';
}

$adminHtml = <<<HTML
<!doctype html>
<html>
<body style="font-family:Arial,Helvetica,sans-serif;color:#222;">
  <h2 style="margin:0 0 12px;">New Launch Event Registration</h2>
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;">
    {$adminRowsHtml}
  </table>
</body>
</html>
HTML;

$adminPlain = "New Launch Event Registration\n\n";
foreach ($adminRows as $label => $value) {
    $adminPlain .= "{$label}: {$value}\n";
}

$adminSent = sendMail(
    $config,
    $config['admin_email'],
    'Trekk Mobility',
    $email,
    'New Launch Event Registration — ' . $fullName,
    $adminHtml,
    $adminPlain
);

$confirmationSent = sendMail(
    $config,
    $email,
    $fullName,
    $config['admin_email'],
    "You're confirmed — Trekk Mobility Official Launch",
    $confirmationHtml,
    $confirmationPlain
);

if ($adminSent) {
    echo json_encode(['success' => true, 'confirmationSent' => $confirmationSent]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not record your registration. Please email us directly.']);
}

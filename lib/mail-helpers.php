<?php

declare(strict_types=1);

function trekkField(string $name, int $maxLen = 500): string
{
    $value = isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
    $value = str_replace(["\r", "\n"], ' ', $value);
    return mb_substr($value, 0, $maxLen);
}

function trekkEscape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function trekkSendMail(array $config, string $to, string $toName, string $replyTo, string $subject, string $html, string $plain): bool
{
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
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
    } catch (PHPMailer\PHPMailer\Exception $e) {
        error_log('Trekk Mobility mail send failed: ' . $mail->ErrorInfo);
        return false;
    }
}

function trekkEmailHeaderRow(): string
{
    $logoUrl = 'https://trekkmobility.com/assets/logo.png';
    return '<tr><td align="center" style="background:#F7F9F8;padding:28px 24px;border-bottom:1px solid #ECF1EE;">'
        . '<img src="' . $logoUrl . '" width="150" alt="Trekk Mobility" style="display:block;"></td></tr>';
}

function trekkEmailFooterRow(): string
{
    return '<tr><td style="padding:18px 32px;background:#F7F9F8;border-top:1px solid #ECF1EE;">'
        . '<p style="margin:0;font-size:12px;color:#8A948F;">Trekk Mobility &middot; trekkmobility.com</p></td></tr>';
}

function trekkEmailShell(string $bodyRowsHtml): string
{
    return '<!doctype html><html><body style="margin:0;padding:0;background:#f4f6f5;font-family:Arial,Helvetica,sans-serif;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f5;padding:32px 0;"><tr><td align="center">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;">'
        . trekkEmailHeaderRow() . $bodyRowsHtml . trekkEmailFooterRow()
        . '</table></td></tr></table></body></html>';
}

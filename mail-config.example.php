<?php
/**
 * Copy this file to mail-config.php (same folder) and fill in real values.
 * mail-config.php is gitignored — it must be uploaded to the server by hand
 * (Hostinger File Manager), never committed or pulled through Git.
 */

return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_encryption' => 'ssl', // 'ssl' for port 465, 'tls' for port 587
    'smtp_username' => 'noreply@trekkmobility.com',
    'smtp_password' => 'REPLACE_WITH_MAILBOX_PASSWORD',
    'from_email' => 'noreply@trekkmobility.com',
    'from_name' => 'Trekk Mobility',
    'admin_email' => 'directors@trekkmobility.com',
];

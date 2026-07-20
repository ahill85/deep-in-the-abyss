<?php
/**
 * Reverse proxy: astarmedia.net/deep-in-the-abyss/* → Cloudflare Worker
 * Upload into: public_html/deep-in-the-abyss/
 */
declare(strict_types=1);

const UPSTREAM = 'https://deep-in-the-abyss.adhill6.workers.dev';
const BASE = '/deep-in-the-abyss';

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$query = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_QUERY);

if (strpos($path, BASE) !== 0) {
    $path = BASE . '/' . ltrim($path, '/');
}

$target = UPSTREAM . $path;
if ($query) {
    $target .= '?' . $query;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$headers = [];

foreach (getallheaders() ?: [] as $name => $value) {
    $lower = strtolower($name);
    if (in_array($lower, ['host', 'connection', 'content-length', 'accept-encoding'], true)) {
        continue;
    }
    $headers[] = $name . ': ' . $value;
}
$headers[] = 'Host: deep-in-the-abyss.adhill6.workers.dev';
$headers[] = 'X-Forwarded-Host: ' . ($_SERVER['HTTP_HOST'] ?? 'astarmedia.net');
$headers[] = 'X-Forwarded-Proto: https';
$headers[] = 'Accept-Encoding: identity';

$body = null;
if (!in_array($method, ['GET', 'HEAD'], true)) {
    $body = file_get_contents('php://input');
}

$ch = curl_init($target);
curl_setopt_array($ch, [
    CURLOPT_CUSTOMREQUEST => $method,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_TIMEOUT => 60,
    CURLOPT_SSL_VERIFYPEER => true,
]);
if ($body !== null && $body !== false) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

$response = curl_exec($ch);
if ($response === false) {
    http_response_code(502);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Upstream unavailable. Try again in a moment.';
    exit;
}

$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
curl_close($ch);

$rawHeaders = substr($response, 0, $headerSize);
$rawBody = substr($response, $headerSize);

http_response_code($status);

$skip = ['transfer-encoding', 'connection', 'keep-alive', 'content-encoding', 'content-length'];
foreach (explode("\r\n", $rawHeaders) as $line) {
    if ($line === '' || stripos($line, 'HTTP/') === 0) {
        continue;
    }
    $pos = strpos($line, ':');
    if ($pos === false) {
        continue;
    }
    $name = substr($line, 0, $pos);
    $value = ltrim(substr($line, $pos + 1));
    if (in_array(strtolower($name), $skip, true)) {
        continue;
    }
    header($name . ': ' . $value, false);
}

echo $rawBody;

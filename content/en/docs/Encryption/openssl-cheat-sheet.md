---
categories: ["Docs"]
tags: ["openssl", "ssl", "tls", "certificates"]
title: "OpenSSL Cheat Sheet"
linkTitle: "OpenSSL Cheat Sheet"
date: 2023-02-07
weight: 1
description: >
  OpenSSL command cheat sheet
---

# Certificate types
## X509
### PEM
PEM (originally “Privacy Enhanced Mail”) is the most common format for X.509 certificates, CSRs, and cryptographic keys. A PEM file is a text file containing one or more items in Base64 ASCII encoding, each with plain-text headers and footers (e.g. `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`). A single PEM file could contain an end-entity certificate, a private key, or multiple certificates forming a complete chain of trust.
(Source: [SSL.com](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/))

Common file extensions are `.crt`, `.cer`, `.pem`, `.key`, `ca-bundle`.

View contents of the certificate in `CERTIFICATE_FILE`: <pre>openssl x509 -in <var>CERTIFICATE_FILE</var> -text -noout</pre>

Convert PEM to DER: <pre>openssl x509 -outform der -in <var>PEM_FILE</var> -out <var>DER_FILE</var></pre>

Convert PEM to PKCS#7: <pre>openssl crl2pkcs7 -nocrl -certfile <var>CERTIFICATE_PEM_FILE</var> -certfile <var>CA_CHAIN_PEM_FILE</var> -out <var>OUTPUT_FILE</var></pre>

Convert PEM to PKCS#12: <pre>openssl pkcs12 -export -out <var>CERTIFICATE_FILE</var> -inkey <var>PRIVATE_KEY_FILE</var> -in <var>CERTIFICATE</var> -certfile <var>CA_CHAIN</var></pre>

### DER
DER (Distinguished Encoding Rules) is a binary encoding for X.509 certificates and private keys. Unlike PEM, DER-encoded files do not contain plain text statements such as `-----BEGIN CERTIFICATE-----`. DER files are most commonly seen in Java contexts.
(Source: [SSL.com](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/))

Common file extensions are `.der` and `.cer`.

View contents of `CERTIFICATE_DER_FILE`: <pre>openssl x509 -inform der -in <var>CERTIFICATE_DER_FILE</var> -text -noout</pre>

Convert `CERTIFICATE_DER_FILE` to a PEM: <pre>openssl x509 -inform der -in <var>CERTIFICATE_DER_FILE</var> -out <var>CERTIFICATE_PEM_FILE</var></pre>

## Certificate container formats
### PKCS#7
PKCS#7 (also known as P7B) is a container format for digital certificates that is most often found in Windows and Java server contexts, and usually has the extension `.p7b`. PKCS#7 files are not used to store private keys.
### PKCS#12
PKCS#12 (also known as PKCS12 or PFX) is a common binary format for storing a certificate chain and private key in a single, encryptable file, and usually have the filename extensions `.p12` or `.pfx`.

#### Convert PKCS to x509
Extract the private key:
<pre>openssl pkcs12 -in <var>P12_CERT_FILE</var> -out <var>X509_KEY_FILE</var> -nocerts -nodes</pre>

Extra the certificate alone:
<pre>openssl pkcs12 -in <var>P12_CERT_FILE</var> -out <var>X509_CERT_FILE</var> -nokeys -nodes -clcerts</pre>

Extract the certificate and the CA chain:
<pre>openssl pkcs12 -in <var>P12_CERT_FILE</var> -out <var>X509_CERT_FILE</var> -nokeys -nodes</pre>

Extract the CA chain:
<pre>openssl pkcs12 -in <var>P12_CERT_FILE</var> -out <var>X509_CA_CHAIN_FILE</var> -nokeys -cacerts -chain</pre>

# Handy commands

## Misc commands
Get an x509 secret from Kubernetes and output details:
<pre>kubectl get secret <var>SECRET_NAME</var> -ojson | jq -r '.data."<var>KEY</var>"' | base64 -d | openssl x509 -text</pre>

Create a self signed X.509 certificate:
<pre>openssl req -x509 -nodes -newkey rsa:4096 -keyout "<var>PRIVATE_KEY_FILE</var>" -out "<var>PUBLIC_KEY_FILE</var>" -subj "<var>SUBJECT</var>"</pre>

Extract the client key and pass to AWK to remove all newline characters:
<pre>openssl pkcs12 -in <var>PKCS12_FILE</var> -clcerts -nokeys -password pass:<var>PASSWORD</var> | awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}'</pre>

| option | arg | explanation |
|-----|-----|-----|
| -in | file | Input file to read from. STDIN if not provided |
| -clcerts | | Only output client certificates (not CA certs) |
| -nokeys | | Do not output private keys |
| -password |  | not found in linux or mac openssl |
| pass:password | | Where password is the password |
## **docs/setup-twilio.md**

```markdown
# Twilio Sandbox Setup for WhatsApp

## 1. Create a Twilio Account
- Go to [Twilio](https://www.twilio.com/)
- Sign up for a free trial

## 2. Activate WhatsApp Sandbox
- In the Twilio Console, search **"Messaging → Try it out → Send a WhatsApp message"**
- Click **"Sandbox"** and activate it

## 3. Join the Sandbox
- Scan the QR code or send the provided join message to Twilio’s number:
```

whatsapp:+14155238886

```

## 4. Get Credentials
- Go to **Account → API Keys**
- Copy:
```

TWILIO\_ACCOUNT\_SID=your\_account\_sid
TWILIO\_AUTH\_TOKEN=your\_auth\_token
TWILIO\_WHATSAPP\_NUMBER=whatsapp:+14155238886

```

## 5. Connect Twilio to n8n
- In n8n, add a **Webhook node** to receive Twilio messages
- Paste the webhook URL in the **Sandbox configuration** inside Twilio Console
```
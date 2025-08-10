# WhatsApp-Driven Google Drive Automation (n8n + Twilio + OpenAI)

> 🚀 End-to-end automation to control Google Drive via WhatsApp commands, powered by **n8n**, **Twilio Sandbox**, and **OpenAI GPT-4o**.

---

## 📌 Overview

This project allows users to send WhatsApp commands like:
- `LIST /ProjectX` → List all files in `/ProjectX`
- `DELETE /ProjectX/report.pdf` → Delete a specific file
- `MOVE /ProjectX/report.pdf /Archive` → Move a file to another folder
- `SUMMARY /ProjectX` → Generate concise bullet-point summaries of each file’s content (PDF/DOCX/TXT) using AI

The automation is built with:
- **Twilio WhatsApp Sandbox** – Inbound message channel
- **Google Drive API (OAuth2)** – Secure file operations
- **OpenAI GPT-4o** – AI summarization
- **n8n** – Orchestration, error handling, and logging

---

## 🛠 Functional Requirements Implemented

1. **Inbound Channel**
   - Twilio Sandbox for WhatsApp integration
   - Command parser to interpret `LIST`, `DELETE`, `MOVE`, `SUMMARY`

2. **Google Drive Integration**
   - OAuth2 authentication (scoped to user’s Drive)
   - MIME-type aware content reading

3. **AI Summarisation**
   - Uses OpenAI GPT-4o API to create concise bullet summaries

4. **Logging & Safety**
   - Audit log maintained in Google Sheets
   - Double-confirmation required for bulk deletions

5. **Deployment**
   - Ready-to-import `workflow.json` for n8n
   - Docker setup for local or server deployment

---

## 📂 Folder Structure

```

whatsapp-drive-automation/
│   .env.sample
│   docker-compose.yml
│   LICENSE
│   README.md
│
├── docs/
│   ├── setup-twilio.md
│   ├── setup-google-drive.md
│   └── command-reference.md
│
├── scripts/
│   ├── aiSummary.js
│   ├── commandParser.js
│   └── fileReader.js
│
└── workflow/
└── whatsapp-drive-workflow\.json

```

---

## 🔑 Environment Variables

Copy `.env.sample` to `.env` and fill in:


---

## ⚡ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/whatsapp-drive-automation.git
cd whatsapp-drive-automation
````

### 2️⃣ Configure Twilio Sandbox

Follow [`docs/setup-twilio.md`](docs/setup-twilio.md)

### 3️⃣ Configure Google Drive API

Follow [`docs/setup-google-drive.md`](docs/setup-google-drive.md)

### 4️⃣ Run n8n via Docker

```bash
docker-compose up -d
```

Visit: [http://localhost:5678](http://localhost:5678)

### 5️⃣ Import Workflow

* In n8n, go to **Settings → Import from File**
* Select `workflow/whatsapp-drive-workflow.json`
* Update credentials for Twilio, Google Drive, and OpenAI nodes

---

## 📜 Command Syntax

See [`docs/command-reference.md`](docs/command-reference.md)

---



---

## 🔒 Security Notes

* All credentials are kept in `.env` (not committed to Git)
* Google OAuth scopes are **minimal**
* Bulk delete requires explicit confirmation

---

## 🚀 Optional Extras

* Slash-command help: `/help`
* Natural-language command parser
* Webhook secured with a secret token

---

## 🧑‍💻 Author

**\[Ashutosh Yadav]**
📧 [sidhart7860@gmail.com.com]
🔗 [https://www.linkedin.com/in/ashutoshyadav17/]

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


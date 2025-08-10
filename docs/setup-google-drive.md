## **docs/setup-google-drive.md**

```markdown
# Google Drive API Setup

## 1. Create a Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a **new project**

## 2. Enable APIs
- Navigate to **APIs & Services → Library**
- Enable **Google Drive API**

## 3. Create OAuth2 Credentials
- Go to **APIs & Services → Credentials**
- Click **Create Credentials → OAuth Client ID**
- Application type: **Web Application**
- Add `http://localhost:5678/rest/oauth2-credential/callback` as redirect URI

## 4. Save Your Credentials
- Download the `client_secret.json`
- Add values to `.env`:
```

GOOGLE\_CLIENT\_ID=your\_client\_id
GOOGLE\_CLIENT\_SECRET=your\_client\_secret
GOOGLE\_REDIRECT\_URI=[http://localhost:5678/rest/oauth2-credential/callback](http://localhost:5678/rest/oauth2-credential/callback)

```

## 5. Authorize in n8n
- In n8n, add a **Google Drive node**
- Choose **OAuth2** and connect using your credentials
```

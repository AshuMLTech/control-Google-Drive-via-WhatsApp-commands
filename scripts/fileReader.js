// fileReader.js
// Reads Google Drive files (PDF/DOCX/TXT) and extracts text

const { google } = require('googleapis');
const pdfParse = require('pdf-parse');
const docxParser = require('docx-parser');
const fs = require('fs');

async function readFile(fileId, mimeType, drive) {
    if (mimeType === 'application/pdf') {
        const res = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'arraybuffer' });
        return (await pdfParse(Buffer.from(res.data))).text;
    }
    if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const res = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'arraybuffer' });
        const tempPath = `/tmp/${fileId}.docx`;
        fs.writeFileSync(tempPath, Buffer.from(res.data));
        return new Promise((resolve, reject) => {
            docxParser.parseDocx(tempPath, (data) => {
                resolve(data);
                fs.unlinkSync(tempPath);
            });
        });
    }
    if (mimeType === 'text/plain') {
        const res = await drive.files.get({ fileId, alt: 'media' });
        return res.data;
    }
    return '';
}

module.exports = readFile;

import path from 'path';
import { google } from 'googleapis';

const KEYFILE_PATH = path.join(process.cwd(), 'market-tracker-service-account.json');
const SCOPES = ['https://www.googleapis.com/auth/drive'];
const FILE_ID = '1KNIsz3VBRhLTX9wLp8NhaeVzc1z4VMIQMDzvTK2MuNA';

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILE_PATH,
    scopes: SCOPES
});

const drive = google.drive({
    version: 'v3',
    auth
});

const downloadResume = async () => {
    const response = await drive.files.export({
        fileId: FILE_ID,
        mimeType: 'text/plain'
    });
    console.log(response);
};

downloadResume();
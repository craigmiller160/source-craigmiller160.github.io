import path from 'path';
import { google } from 'googleapis';

const KEYFILE_PATH = path.join(process.cwd(), 'market-tracker-service-account.json');
const SCOPES = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILE_PATH,
    scopes: SCOPES
});

const drive = google.drive({
    version: 'v3',
    auth
});


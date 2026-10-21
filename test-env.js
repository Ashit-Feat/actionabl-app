import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '.env.local');
console.log('Checking path:', envPath);
if (fs.existsSync(envPath)) {
    console.log('File exists');
    console.log('Content:', fs.readFileSync(envPath, 'utf8'));
} else {
    console.log('File does not exist');
}

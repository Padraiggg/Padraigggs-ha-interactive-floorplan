import fs from 'fs';
import yaml from 'js-yaml';

const content = fs.readFileSync('demo-config.yaml', 'utf8');
const doc = yaml.load(content);

let config = doc;
if (doc.config) {
    config = doc.config;
}

// Ensure base64 is clean
if (config.imageBase64) {
    config.imageBase64 = config.imageBase64.replace(/\s/g, '');
}

const tsContent = `export default ${JSON.stringify(config, null, 4)};`;
fs.writeFileSync('src/default_config.ts', tsContent);
console.log('Converted demo-config.yaml to src/default_config.ts');

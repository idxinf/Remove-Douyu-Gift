const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.resolve(__dirname, '../css/styles.css')).toString();
const index = fs.readFileSync(path.resolve(__dirname, '../index.js')).toString();
const outputPath = path.resolve(__dirname, '../dist/index.js');
const content = index.replace(/(?<=GM_addStyle\(`).*(?=`\);)/gsm, css);

try {
    fs.writeFileSync(outputPath, content);
    console.log('Finish');
} catch (err) {
    console.error('Error writing file:', err);
}

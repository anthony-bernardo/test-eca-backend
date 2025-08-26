// save-json.js
const fs = require('fs');
const path = require('path');

// Data you want to save
const data = { name: "Alice", age: 25 };

// Path to save the JSON file
const filePath = path.join(__dirname, 'data.json');

try {
    // Convert object to JSON string with indentation
    const jsonString = JSON.stringify(data, null, 2);

    // Write JSON string to file
    fs.writeFileSync(filePath, jsonString, 'utf8');

    console.log(`JSON saved successfully to ${filePath}`);
} catch (err) {
    console.error('Error writing JSON to file:', err);
}

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const jsMatch = html.match(/<script type="text\/javascript">([\s\S]*?)<\/script>/);
if (jsMatch) {
  try {
    new (require('vm').Script)(jsMatch[1]);
    console.log("Syntax OK");
  } catch(e) {
    console.error("Syntax Error: " + e.message);
  }
} else {
  console.log("No script tag found");
}

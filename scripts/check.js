
const fs = require("node:fs");

const requiredFiles = [
  "student-profile/index.html",
  "student-profile/style.css"
];

let failed = false;

for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`PASS: Found ${file}`);
  } else {
    console.error(`FAIL: Missing ${file}`);
    failed = true;
  }
}

if (fs.existsSync("student-profile/index.html")) {
  const html = fs.readFileSync(
    "student-profile/index.html",
    "utf8"
  );

  const requiredElements = [
    "<!DOCTYPE html>",
    "<html",
    "<head>",
    "<body",
    "</html>"
  ];

  for (const element of requiredElements) {
    if (!html.toLowerCase().includes(element.toLowerCase())) {
      console.error(`FAIL: Missing ${element}`);
      failed = true;
    }
  }

  if (!html.includes('href="style.css"')) {
    console.error("FAIL: Stylesheet is not linked.");
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("All quality checks passed.");

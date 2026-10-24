
const fs = require("node:fs");
const path = require("node:path");

const source = "student-profile";
const output = "dist";

// Verify source files
for (const file of ["index.html", "style.css"]) {
  if (!fs.existsSync(path.join(source, file))) {
    console.error(`Build failed: ${file} is missing.`);
    process.exit(1);
  }
}

// Create a fresh build directory
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

// Copy website files into the build directory
fs.cpSync(source, output, { recursive: true });

console.log("Build successful. Website packaged in dist/.");

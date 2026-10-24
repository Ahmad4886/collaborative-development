
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("student profile HTML file exists", () => {
  assert.ok(fs.existsSync("student-profile/index.html"));
});

test("student profile contains its heading", () => {
  const html = fs.readFileSync(
    "student-profile/index.html",
    "utf8"
  );

  assert.match(html, /<h1[^>]*>.*Student Profile.*<\/h1>/is);
});

test("student profile links its stylesheet", () => {
  const html = fs.readFileSync(
    "student-profile/index.html",
    "utf8"
  );

  assert.match(html, /href="style\.css"/);
});

test("student profile stylesheet exists", () => {
  assert.ok(fs.existsSync("student-profile/style.css"));
});

const fs = require("fs");
const path = require("path");
const releaseDate = path.join(__dirname, "release-date");

fs.writeFileSync(releaseDate, new Date().getTime().toString(), "utf-8");

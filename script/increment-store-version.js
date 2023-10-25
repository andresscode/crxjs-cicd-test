const fs = require("fs");

const pkg = require("../package.json");

const {
  dev_silverproject: { store_version },
} = pkg;

const calver = require("calver");

// minor represents the build counter
const newVersion = calver.inc(
  "yyyy.mm.dd.minor",
  store_version === "0.0.0.0" ? "" : store_version,
  "calendar.minor"
);

pkg.dev_silverproject.store_version = newVersion;

fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));

"use strict";

const fs = require("node:fs");
const path = require("node:path");

let _validator = null;

function loadValidator() {
  if (_validator) return _validator;
  const Ajv = require("ajv/dist/2020").default;
  const addFormats = require("ajv-formats").default;
  const schemaPath = path.join(__dirname, "..", "..", "schema", "manifest.schema.json");
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  _validator = ajv.compile(schema);
  return _validator;
}

function validate(manifest) {
  const v = loadValidator();
  const ok = v(manifest);
  if (ok) return { ok: true, errors: [] };
  const errors = (v.errors || []).map((e) => `${e.instancePath || "(root)"} ${e.message}`);
  return { ok: false, errors };
}

module.exports = { validate };

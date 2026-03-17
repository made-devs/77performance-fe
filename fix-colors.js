const fs = require("fs");
const path = require("path");

const replacePatterns = [
  // Backgrounds
  { regex: /\bbg-white\b/g, replacement: "bg-dark-77" },
  { regex: /\bbg-gray-50(?!\/)\b/g, replacement: "bg-[#0a0a0a]" },
  { regex: /\bbg-gray-50\/50\b/g, replacement: "bg-white/5" },
  { regex: /\bbg-slate-50(?!\/)\b/g, replacement: "bg-[#0a0a0a]" },
  { regex: /\bbg-slate-100(?!\/)\b/g, replacement: "bg-neutral-900" },
  { regex: /\bbg-gray-100(?!\/)\b/g, replacement: "bg-neutral-900" },
  { regex: /\bbg-gray-50\b/g, replacement: "bg-[#0a0a0a]" },

  // Texts
  { regex: /\btext-dark-77\b/g, replacement: "text-white" },
  { regex: /\btext-slate-900\b/g, replacement: "text-white" },
  { regex: /\btext-slate-800\b/g, replacement: "text-slate-200" },
  { regex: /\btext-slate-600\b/g, replacement: "text-slate-300" },
  { regex: /\btext-slate-700\b/g, replacement: "text-slate-300" },
  { regex: /\btext-gray-900\b/g, replacement: "text-white" },
  { regex: /\btext-gray-800\b/g, replacement: "text-gray-200" },
  { regex: /\btext-gray-600\b/g, replacement: "text-gray-300" },
  { regex: /\btext-gray-700\b/g, replacement: "text-gray-300" },
  { regex: /\btext-gray-500\b/g, replacement: "text-gray-400" },

  // Borders
  { regex: /\bborder-gray-200\b/g, replacement: "border-white/10" },
  { regex: /\bborder-gray-300\b/g, replacement: "border-white/20" },
  { regex: /\bborder-slate-200\b/g, replacement: "border-white/10" },
  { regex: /\bborder-slate-300\b/g, replacement: "border-white/20" },
  { regex: /\bdivide-gray-200\b/g, replacement: "divide-white/10" },
];

function processPath(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processPath(fullPath);
    } else if (
      fullPath.endsWith(".js") ||
      fullPath.endsWith(".jsx") ||
      fullPath.endsWith(".tsx")
    ) {
      let content = fs.readFileSync(fullPath, "utf8");
      let changed = false;
      for (const pattern of replacePatterns) {
        if (pattern.regex.test(content)) {
          content = content.replace(pattern.regex, pattern.replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

// Ensure to only update components and app pages (except layout which might already be correct)
processPath(path.join(__dirname, "src", "components"));
processPath(path.join(__dirname, "src", "app"));

console.log("Done script!");

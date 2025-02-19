import fs from "fs";
import path from "path";

export function loadBookData() {
  const filePath = path.join(process.cwd(), "src/data/bookData.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

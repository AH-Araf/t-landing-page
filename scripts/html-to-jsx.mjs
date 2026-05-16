import fs from "fs";

const html = fs.readFileSync("stitch-screen.html", "utf8");
const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
let jsx = body
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/\sclass=/g, " className=")
  .replace(/&amp;/g, "&")
  .replace(/\s—\s/g, ", ")
  .replace(/—/g, ", ")
  .replace(/<img([^>]*?)(?<!\/)>/gi, "<img$1 />")
  .replace(/style="([^"]*)"/g, (_, s) => {
    const obj = s
      .split(";")
      .filter(Boolean)
      .map((p) => p.trim().split(":").map((x) => x.trim()))
      .reduce((acc, [k, v]) => {
        const key = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        acc[key] = v;
        return acc;
      }, {});
    return `style={${JSON.stringify(obj)}}`;
  });

fs.writeFileSync("stitch-body.jsx.txt", jsx, "utf8");
console.log("Wrote", jsx.length, "chars");

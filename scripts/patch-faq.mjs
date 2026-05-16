import fs from "fs";

let f = fs.readFileSync("src/app/page.js", "utf8");
const start = f.indexOf('<div className="max-w-4xl mx-auto space-y-md">');
const endIdx = f.indexOf("</motion.div>\n</motion.div>\n</section>", start);
const endIdx2 = f.indexOf("</motion.div>\n</motion.div>\n</section>", start);
const end = endIdx !== -1 ? endIdx : f.indexOf("</div>\n</div>\n</section>", start);

if (start === -1 || end === -1) {
  console.error("markers not found", start, end);
  process.exit(1);
}

const replacement = `<motion.div className="mx-auto max-w-4xl space-y-md">
<FaqItem
  question="What is Turffin?"
  answer="Turffin connects athletes, schools, and clubs with premium sports turfs across Bangladesh. You search by area and sport, book a slot with transparent venue pricing, and show up with a digital pass."
/>
<FaqItem
  question="Which sports and parts of Bangladesh?"
  answer="The product is built around football, cricket, basketball, tennis, and more, with filters on browse. We are planning coverage across every administrative division: Barishal, Chattogram, Dhaka, Khulna, Mymensingh, Rajshahi, Rangpur, and Sylhet, with earlier pilots where venue density and demand line up best."
/>
<FaqItem
  question="Do I pay a Turffin venue subscription just to play?"
  answer="No. Any monthly partner plans you see us talk about are for turf owners who list on Turffin, not a fee to step on the pitch. As a player you pay the venue’s hourly slot rate when you book."
/>
<FaqItem
  question="I run a turf. What do I get?"
  answer="A listing players can find in browse, calendars and booking requests in your turf admin dashboard, and tools to reduce no shows. Partner plans cover that software; you still set your own hourly prices."
/>
</motion.div>
`;

const fixed = replacement.replace(/<\/?motion\.div>/g, (tag) => tag.replace("motion.", ""));

const out = f.slice(0, start) + fixed + f.slice(end);
fs.writeFileSync("src/app/page.js", out, "utf8");
console.log("patched FAQ");

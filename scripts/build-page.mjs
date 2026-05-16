import fs from "fs";

let body = fs.readFileSync("stitch-body.jsx.txt", "utf8");

const joinWaitlistHeader =
  '<button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg uppercase hover:brightness-110 active:scale-95 transition-all btn-primary-gradient">Join waitlist</button>';

body = body.replace(
  joinWaitlistHeader,
  `<button
          type="button"
          className="md:hidden text-on-surface p-sm"
          aria-expanded={mobileNavOpen}
          aria-label="Open menu"
          onClick={() => setMobileNavOpen((o) => !o)}
        >
          <span className="material-symbols-outlined text-[28px]">{mobileNavOpen ? "close" : "menu"}</span>
        </button>
        {mobileNavOpen ? (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-lg z-50">
            <div className="flex flex-col gap-md p-margin font-label-lg text-on-surface">
              <a className="hover:text-primary transition-colors" href="#mission" onClick={() => setMobileNavOpen(false)}>Mission</a>
              <a className="hover:text-primary transition-colors" href="#how-it-works" onClick={() => setMobileNavOpen(false)}>How it works</a>
              <a className="hover:text-primary transition-colors" href="#for-players" onClick={() => setMobileNavOpen(false)}>For players</a>
              <a className="hover:text-primary transition-colors" href="#why-turffin" onClick={() => setMobileNavOpen(false)}>Why Turffin</a>
              <a className="hover:text-primary transition-colors" href="#for-venues" onClick={() => setMobileNavOpen(false)}>For venues</a>
              <a className="hover:text-primary transition-colors" href="#faq" onClick={() => setMobileNavOpen(false)}>FAQ</a>
              <a className="hover:text-primary transition-colors" href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
            </div>
          </div>
        ) : null}
<a className="hidden md:inline-block bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg uppercase hover:brightness-110 active:scale-95 transition-all btn-primary-gradient" href={WAITLIST_HREF}>Join waitlist</a>
<a className="md:hidden bg-primary text-on-primary px-md py-sm rounded-full font-label-lg uppercase hover:brightness-110 active:scale-95 transition-all btn-primary-gradient text-[12px]" href={WAITLIST_HREF}>Join waitlist</a>`
);

body = body.replace(
  /<header className="fixed top-0 w-full z-50 bg-background\/60 backdrop-blur-xl border-b border-white\/5">/,
  '<header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 relative">'
);

body = body.replace(
  /<button className="w-full border-2 border-white\/10 text-white py-md rounded font-label-lg uppercase hover:border-primary hover:text-primary transition-all">Join waitlist<\/button>/g,
  '<a className="w-full border-2 border-white/10 text-white py-md rounded font-label-lg uppercase hover:border-primary hover:text-primary transition-all block text-center" href={WAITLIST_HREF}>Join waitlist</a>'
);

body = body.replace(
  /<button className="w-full bg-primary text-on-primary py-md rounded font-label-lg uppercase hover:brightness-110 transition-all btn-primary-gradient">Join waitlist<\/button>/,
  '<a className="w-full bg-primary text-on-primary py-md rounded font-label-lg uppercase hover:brightness-110 transition-all btn-primary-gradient block text-center" href={WAITLIST_HREF}>Join waitlist</a>'
);

body = body.replace(
  "transform scale-[1.02] shadow-2xl",
  "transform lg:scale-[1.02] shadow-2xl"
);

const page = `"use client";

import { useState } from "react";

const WAITLIST_HREF =
  "mailto:turffin.official@gmail.com?subject=" +
  encodeURIComponent("Turffin waitlist") +
  "&body=" +
  encodeURIComponent("Please add me to the Turffin waitlist.\\n\\n");

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    __WRAPPER_OPEN__
${body}
    __WRAPPER_CLOSE__
  );
}
`;

fs.writeFileSync(
  "src/app/page.js",
  page
    .replace("__WRAPPER_OPEN__", '<div className="dark selection:bg-primary selection:text-on-primary overflow-x-hidden min-h-screen bg-background text-on-surface">')
    .replace("__WRAPPER_CLOSE__", "</div>"),
  "utf8"
);
console.log("Wrote page.js");

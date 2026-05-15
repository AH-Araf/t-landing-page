"use client";


/**
 * Turffin coming-soon — single self-contained file (no @/ imports, no site CSS variables).
 * Copy with: react, lucide-react, Tailwind scanning this file. Route: /coming-soon
 *
 * Content aligned with this repo: home hero/stats, homeSteps, about mission, browse-turf,
 * layout metadata ("premium sports turfs across Bangladesh"), player vs venue partner plans.
 */


import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  CalendarClock,
  Clock3,
  Globe2,
  LocateFixed,
  MapPin,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";


const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "steps", label: "How it works" },
  { id: "players", label: "For players" },
  { id: "features", label: "Why Turffin" },
  { id: "venues", label: "For venues" },
  { id: "faq", label: "FAQ" },
  { id: "footer", label: "Contact" },
];


const sectionScroll = "scroll-mt-24";


/** Administrative divisions of Bangladesh (8) */
const BANGLADESH_DIVISIONS = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"];


const CONTACT_EMAIL = "turffin.official@gmail.com";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
const WAITLIST_MAILTO = `${CONTACT_MAILTO}?subject=${encodeURIComponent("Turffin waitlist")}&body=${encodeURIComponent("Please add me to the Turffin waitlist.\n\n")}`;
const SHARE_MAILTO = `${CONTACT_MAILTO}?subject=${encodeURIComponent("Turffin")}&body=${encodeURIComponent("Check out Turffin — turf booking for players and venues.\n\n")}`;
const REGION_MAILTO = `${CONTACT_MAILTO}?subject=${encodeURIComponent("Turffin — question")}&body=${encodeURIComponent("Hi Turffin team,\n\n")}`;


const C = {
  surface: "#f7f9fb",
  onSurface: "#191c1e",
  onSurfaceVariant: "#3d4a3e",
  primary: "#006d36",
  primaryContainer: "#4ade80",
  onPrimaryContainer: "#005e2d",
  surfaceLow: "#f2f4f6",
  secondary: "#545f73",
  glow: "0 20px 20px rgba(74, 222, 128, 0.1)",
  search: "0 20px 50px rgba(0, 0, 0, 0.08)",
  cardLift: "0 20px 25px -5px rgba(74, 222, 128, 0.15), 0 10px 10px -5px rgba(74, 222, 128, 0.04)",
  cta: "0 40px 80px rgba(0, 109, 54, 0.3)",
};


/** Same narrative as src/features/home/data.js */
const HOW_IT_WORKS = [
  {
    icon: LocateFixed,
    title: "1. Search",
    text: "Filter by area, sport, and preferred time slot to find available turfs anywhere in Bangladesh as venues come online.",
  },
  {
    icon: Calendar,
    title: "2. Book",
    text: "Select your slot, choose add-ons like equipment rental, and pay securely in seconds.",
  },
  {
    icon: Clock3,
    title: "3. Play",
    text: "Receive your digital pass, head to the field, and start your session without any hassle.",
  },
];


/** Venue software / listing tiers — partner pricing for this section is coming soon on the live site. */
const venuePartnerTiers = [
  {
    name: "Starter",
    blurb: "Single pitch or small venue",
    features: ["One turf listing & profile", "Standard booking calendar", "Email alerts for new requests", "Help center access"],
    highlighted: false,
  },
  {
    name: "Team",
    blurb: "Busy venue with multiple slots",
    features: ["Up to 3 pitches under one account", "Priority placement in search", "In-app chat for player questions", "Monthly performance snapshot"],
    highlighted: true,
  },
  {
    name: "Club",
    blurb: "Multi-site operators & brands",
    features: ["Unlimited pitch slots", "Partner success line", "Advanced analytics export", "Co-marketing on launches"],
    highlighted: false,
  },
];


const faqItems = [
  {
    q: "What is Turffin?",
    a: "Turffin connects athletes, schools, and clubs with premium sports turfs across Bangladesh. You search by area and sport, book a slot with transparent venue pricing, and show up with a digital pass.",
  },
  {
    q: "Which sports and parts of Bangladesh?",
    a: "The product is built around football, cricket, basketball, tennis, and more — with filters on browse. We are planning coverage across every administrative division — Barishal, Chattogram, Dhaka, Khulna, Mymensingh, Rajshahi, Rangpur, and Sylhet — with earlier pilots where venue density and demand line up best.",
  },
  {
    q: "Do I pay a Turffin venue subscription just to play?",
    a: "No. Any monthly partner plans you see us talk about are for turf owners who list on Turffin — not a fee to step on the pitch. As a player you pay the venue’s hourly slot rate when you book. The app also has optional player memberships for discounts — see Memberships when the full site is live.",
  },
  {
    q: "I run a turf. What do I get?",
    a: "A listing players can find in browse, calendars and booking requests in your turf admin dashboard, and tools to reduce no-shows. Partner plans cover that software; you still set your own hourly prices.",
  },
];


function MenuIcon({ open }) {
  return open ? (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ) : (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}


function fontClass() {
  return "font-['Lexend',ui-sans-serif,system-ui,sans-serif]";
}


function desktopNavLinkClass(id, activeId) {
  const isActive = activeId === id;
  return [
    "relative rounded-lg px-2 py-1.5 text-xs font-medium xl:px-2.5 xl:text-sm",
    "underline decoration-2 underline-offset-[10px] transition-[color,text-decoration-color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d36]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f9fb]",
    isActive
      ? "font-semibold text-[#006d36] decoration-[#006d36]"
      : "text-[#3d4a3e] decoration-transparent hover:text-[#006d36] hover:decoration-[#006d36]/80",
  ].join(" ");
}


function mobileNavLinkClass(id, activeId) {
  const isActive = activeId === id;
  return [
    "flex rounded-lg border-l-[3px] px-3 py-2.5 text-sm font-medium transition-[color,background-color,border-color] duration-200",
    isActive
      ? "border-[#006d36] bg-[#4ade80]/12 font-semibold text-[#006d36]"
      : "border-transparent text-[#191c1e] hover:border-[#006d36]/40 hover:bg-[#4ade80]/8 hover:text-[#006d36]",
  ].join(" ");
}


export default function ComingSoonStandalonePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavId, setActiveNavId] = useState("hero");
  const menuRef = useRef(null);


  useEffect(() => {
    document.title = "Turffin — Coming soon";
    const id = "cs-lexend-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Lexend:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&display=swap";
      document.head.appendChild(link);
    }
  }, []);


  useEffect(() => {
    if (!menuOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);


  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const menuNode = menuRef.current;
    const focusable = menuNode.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    menuNode.addEventListener("keydown", handleTab);
    return () => menuNode.removeEventListener("keydown", handleTab);
  }, [menuOpen]);


  useEffect(() => {
    const syncFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (raw && NAV_LINKS.some((l) => l.id === raw)) setActiveNavId(raw);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);


  useEffect(() => {
    const header = document.querySelector("header");
    const line = () => (header?.getBoundingClientRect().bottom ?? 72) + 8;

    const updateActive = () => {
      const y = line();
      let current = NAV_LINKS[0].id;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= y) current = id;
      }
      setActiveNavId((prev) => (prev === current ? prev : current));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);


  const overlayClass =
    `fixed inset-0 top-[4.25rem] z-40 bg-[#191c1e]/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ` +
    (menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0");


  const mobileNavClass =
    `fixed inset-x-0 top-[4.25rem] z-50 max-h-[calc(100vh-4.25rem)] overflow-y-auto border-b border-[#006d36]/10 bg-[#f7f9fb] px-4 py-4 transition-transform duration-300 ease-out lg:hidden ` +
    (menuOpen ? "translate-y-0" : "pointer-events-none -translate-y-full");


  return (
    <div className={`landing-page min-h-screen antialiased ${fontClass()}`} style={{ backgroundColor: C.surface, color: C.onSurface }}>
      <header
        className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#f7f9fb]/92 shadow-sm shadow-slate-900/[0.04] backdrop-blur-md"
        style={{ boxShadow: `${C.glow}, 0 1px 0 rgba(255,255,255,0.6) inset` }}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 sm:px-6">
          <a
            href="#hero"
            className="group shrink-0 rounded-xl outline-none ring-offset-2 transition duration-300 hover:opacity-95 hover:ring-2 hover:ring-[#006d36]/15 focus-visible:ring-2 focus-visible:ring-[#006d36]"
            aria-label="Turffin — home"
          >
            <Image
              src="/images/logo.png"
              alt="Turffin — Book, Play, Connect"
              width={200}
              height={56}
              className="h-8 w-auto transition duration-300 group-hover:scale-[1.02] sm:h-9"
              priority
            />
          </a>


          <nav className="ms-1 hidden flex-1 flex-wrap items-center justify-end gap-0.5 lg:flex lg:gap-0.5" aria-label="On this page">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={desktopNavLinkClass(id, activeNavId)}
                aria-current={activeNavId === id ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>


          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 bg-white text-[#191c1e] shadow-sm transition duration-200 hover:border-[#006d36]/25 hover:bg-slate-50 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
            <a
              href={WAITLIST_MAILTO}
              className="hidden h-9 items-center justify-center rounded-full bg-[#4ade80] px-4 text-xs font-bold text-[#005e2d] shadow-md shadow-[#006d36]/15 transition duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#006d36]/20 active:scale-[0.98] sm:inline-flex lg:text-sm"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </header>


      <div onClick={() => setMenuOpen(false)} className={overlayClass} aria-hidden />


      <nav ref={menuRef} className={mobileNavClass} style={{ boxShadow: C.search }} aria-label="On this page">
        <div className="flex flex-col gap-0.5">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass(id, activeNavId)}
              aria-current={activeNavId === id ? "true" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            href={WAITLIST_MAILTO}
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex h-10 w-full items-center justify-center rounded-full bg-[#4ade80] text-sm font-bold text-[#005e2d] shadow-md transition duration-200 hover:opacity-95 active:scale-[0.99]"
          >
            Join waitlist
          </a>
        </div>
      </nav>


      <main>
        <section
          id="hero"
          className={`relative overflow-hidden ${sectionScroll} border-b border-white/10 bg-gradient-to-br from-[#021910] via-[#006d36] to-[#044027] px-4 pb-14 pt-9 text-white sm:px-6 sm:pb-16 sm:pt-10`}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(74,222,128,0.22),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
          <div className="landing-hero-blob pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#4ade80]/20 blur-3xl sm:h-72 sm:w-72" aria-hidden />
          <div
            className="landing-hero-blob landing-hero-blob--delayed pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl sm:h-64 sm:w-64"
            aria-hidden
          />


          <div className="relative mx-auto max-w-6xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bbf7d0] shadow-sm backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/15">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Coming soon
            </p>
            <h1 className="mt-5 max-w-4xl text-[2rem] font-black leading-[1.1] tracking-tight sm:text-5xl md:text-[3.25rem]">
              Find and book <span className="gradient-text italic">premium sports turfs</span> across Bangladesh.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-100/95 sm:text-base">
              Search by area, sport, and time. Pick a slot, pay securely, and take a digital pass to the pitch — the same
              flow the Turffin app is built around. Venues get dashboards to manage requests and calendars.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={WAITLIST_MAILTO}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#4ade80] px-6 text-sm font-bold text-[#005e2d] shadow-lg shadow-black/20 transition duration-200 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"
                style={{ boxShadow: C.cta }}
              >
                Get launch updates
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#steps"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-white/45 hover:bg-white/18"
              >
                See how it works
              </a>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {[
                { k: "Turf venues", v: "150+" },
                { k: "Nationwide", v: "Bangladesh" },
                { k: "Launch window", v: "July 2026" },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-inner shadow-black/10 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200/85">{k}</dt>
                  <dd className="mt-1 text-xl font-bold tabular-nums text-white sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>


        <section id="mission" className={`${sectionScroll} px-4 py-10 sm:px-6 sm:py-14`}>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006d36]">Mission</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
                  Democratizing access to professional-grade surfaces.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#3d4a3e] sm:text-base">
                  The hardest part of organized sports should not be finding a place to play. Turffin is the link between
                  great facilities and the athletes, schools, and clubs that use them — starting in Bangladesh and
                  growing with every booking.
                </p>
                <div className="mt-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006d36]">Across Bangladesh</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#3d4a3e] sm:text-base">
                    Roadmaps and venue onboarding are framed around all eight administrative divisions — so Turffin can
                    grow with the country, not just a single corridor.
                  </p>
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5"
                    aria-label="Administrative divisions of Bangladesh covered in our roadmap"
                  >
                    {BANGLADESH_DIVISIONS.map((name) => (
                      <li
                        key={name}
                        className="rounded-full border border-[#006d36]/20 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#191c1e] shadow-sm transition duration-200 hover:border-[#006d36]/35 hover:shadow-md"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: MapPin, text: "Bangladesh-wide, map-first discovery as we add venues division by division." },
                    { icon: ShieldCheck, text: "Filters for sport, hourly budget, and amenities so listings stay relevant." },
                    { icon: Trophy, text: "Elite sporting grounds: the browse experience matches how the live app is designed." },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4ade80]/20 text-[#006d36] ring-1 ring-[#006d36]/10">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="pt-1 text-sm font-medium leading-snug text-[#191c1e] sm:text-[15px]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative overflow-hidden rounded-2xl border border-[#006d36]/12 bg-gradient-to-br from-white via-white to-[#eef6f0] p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200/60 sm:p-7"
                style={{ boxShadow: C.search }}
              >
                <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#4ade80]/30 blur-2xl" aria-hidden />
                <CalendarClock className="h-9 w-9 text-[#006d36]" aria-hidden />
                <p className="mt-3 text-base font-bold text-slate-900">Before launch</p>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[#3d4a3e]">
                  <li className="flex gap-3">
                    <span className="font-mono text-xs font-bold text-[#006d36]">01</span>
                    <span>Payments, receipts, and slot picker wired end-to-end.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs font-bold text-[#006d36]">02</span>
                    <span>Turf admin + player dashboards tested with real booking paths.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs font-bold text-[#006d36]">03</span>
                    <span>Waitlist rollout by city so demand matches venue onboarding.</span>
                  </li>
                </ol>
                <p className="mt-6 rounded-xl border border-slate-200/90 bg-white/80 px-3.5 py-2.5 text-sm leading-relaxed text-[#3d4a3e] shadow-sm">
                  Early invites roll out by city. This preview has no sign-up or reservation backend — when you are ready,
                  email{" "}
                  <a
                    className="font-semibold text-[#006d36] underline decoration-[#006d36]/40 underline-offset-2 transition hover:decoration-[#006d36]"
                    href={CONTACT_MAILTO}
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  or use any <span className="font-semibold text-[#191c1e]">Join waitlist</span> link to open a pre-filled message in your mail app.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section
          id="steps"
          className={`${sectionScroll} border-y border-slate-200/80 bg-gradient-to-b from-[#eef1f4] to-[#f7f9fb] px-4 py-10 sm:px-6 sm:py-14`}
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#006d36]">How it works</p>
            <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
              Search, book, play — same three beats as the product
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#3d4a3e] sm:text-base">
              This mirrors the home page journey in Turffin: filters and map-style browse, slot selection and secure
              checkout, then a digital pass for game day.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
              {HOW_IT_WORKS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-md shadow-slate-900/[0.04] ring-1 ring-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#006d36]/20 hover:shadow-lg hover:shadow-[#006d36]/10"
                  style={{ boxShadow: C.cardLift }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4ade80]/18 text-[#006d36] transition duration-300 group-hover:scale-105 group-hover:bg-[#4ade80]/28">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3d4a3e]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="players" className={`${sectionScroll} px-4 py-10 sm:px-6 sm:py-14`}>
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006d36]">For players</p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
              Browse like the live app: filters, cards, then slot availability
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[#3d4a3e] sm:text-base">
              The browse experience is built around sport type, hourly price range, amenities (changing rooms, lights,
              parking, cafe), and distance to the venues you care about. Open a turf, review photos and rules, then open
              the slot grid to see what is actually free.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {[
                { icon: Search, title: "Elite sporting grounds", body: "Curated listings — the same positioning as Browse Turfs in the app." },
                { icon: MapPin, title: "Area-first", body: "Find pitches in your part of town instead of chasing rumors in chat." },
                { icon: CalendarClock, title: "Slot availability", body: "Time blocks and pricing before you commit — no surprises at the gate." },
                { icon: Zap, title: "Secure checkout", body: "Pick add-ons where venues offer them, pay, and get confirmation you can share." },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200/85 bg-white p-5 shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-[#006d36]/18 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/18 text-[#006d36] transition duration-300 group-hover:bg-[#4ade80]/28">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3d4a3e]">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl rounded-xl border border-slate-200/80 bg-[#f7f9fb] px-4 py-3 text-sm leading-relaxed text-[#3d4a3e] sm:text-[15px]">
              <strong className="text-[#191c1e]">Note:</strong> the partner plans below are{" "}
              <strong className="text-[#191c1e]">for turf owners</strong>, not a subscription to kick a ball. That whole
              block is <strong className="text-[#191c1e]">coming soon</strong> — pricing and signup will ship with venue
              onboarding. Players pay venue hourly rates when they book. Optional player memberships (discounts, longer
              booking windows) appear on the main site Memberships page when we open fully.
            </p>
          </div>
        </section>


        <section
          id="features"
          className={`${sectionScroll} border-t border-slate-200/80 bg-gradient-to-b from-white to-[#f4f8f6] px-4 py-10 sm:px-6 sm:py-14`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006d36]">Why Turffin</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
                Premium turfs, effortless booking, elite management
              </h2>
              <p className="mt-2 text-sm text-[#3d4a3e] sm:text-base">
                Echoing the home experience: one place for teams who play to win, and for venues that want professional
                operations without losing their brand.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {[
                { title: "Multi-sport", body: "Football, cricket, basketball, tennis, and more — aligned with browse filters.", icon: Sparkles },
                { title: "Trusted listings", body: "Rich turf pages with galleries, amenities, and getting-there context.", icon: ShieldCheck },
                { title: "Team-ready", body: "Share confirmations and keep squads aligned on time and location.", icon: Trophy },
                { title: "Venue operations", body: "Turf admin tools for requests, calendar, and analytics in the dashboard.", icon: Zap },
              ].map(({ title, body, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-[#006d36]/22 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/18 text-[#006d36] transition duration-300 group-hover:scale-105 group-hover:bg-[#4ade80]/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3d4a3e]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section
          id="venues"
          className={`${sectionScroll} relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-[#0a1628] px-4 py-10 text-white sm:px-6 sm:py-14`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/40 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-[#006d36]/25 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ade80]">For turf owners</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-[2rem]">Venue partner plans on Turffin</h2>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Monthly partner plans for listing, visibility, calendars, and operations are{" "}
                <strong className="font-semibold text-slate-200">coming soon</strong>. Your players still pay your hourly
                slot rates when players book through Turffin; these tiers will power your presence on the platform when venue
                onboarding opens.
              </p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
              {venuePartnerTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 sm:p-7 ${
                    tier.highlighted
                      ? "border-[#4ade80]/45 bg-gradient-to-b from-[#0d3d24]/90 to-slate-900/90 shadow-xl shadow-black/30 ring-2 ring-[#4ade80]/35"
                      : "border-slate-600/50 bg-slate-900/40 hover:border-slate-500/70 hover:bg-slate-900/55"
                  }`}
                  style={tier.highlighted ? { boxShadow: C.cta } : undefined}
                >
                  {tier.highlighted ? (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#4ade80] px-3 py-0.5 text-[10px] font-bold tracking-wide text-[#005e2d] shadow-md">
                      Popular
                    </span>
                  ) : null}
                  <h3 className="text-base font-bold">{tier.name}</h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{tier.blurb}</p>
                  <div className="mt-5 min-h-[4.25rem]">
                    <p className="text-xl font-black tracking-tight text-[#4ade80] sm:text-2xl">Coming soon</p>
                    <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">
                      Partner tier details and pricing go live with the full venue dashboard — join the waitlist to get
                      word first.
                    </p>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-300">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-0.5 shrink-0 text-[#4ade80]">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WAITLIST_MAILTO}
                    className={`mt-6 flex w-full items-center justify-center rounded-full py-2.5 text-sm font-bold transition duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      tier.highlighted
                        ? "bg-[#4ade80] text-[#005e2d] shadow-lg shadow-black/25"
                        : "border border-slate-600 bg-slate-800/80 text-white hover:border-[#4ade80]/40 hover:bg-slate-800"
                    }`}
                  >
                    Join waitlist
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="faq" className={`${sectionScroll} px-4 py-10 sm:px-6 sm:py-14`}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
              FAQs
            </h2>
            <div className="mt-6 space-y-2">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="landing-faq-details group rounded-xl border border-slate-200/90 bg-white px-4 py-0.5 shadow-sm transition-[border-color,box-shadow,background-color] delay-1000 duration-[650ms] ease-out open:border-[#006d36]/25 open:bg-[#fbfffc] open:shadow-md"
                >
                  <summary className="cursor-pointer list-none py-3.5 text-sm font-semibold text-slate-900 marker:content-none sm:text-[15px] [&::-webkit-details-marker]:hidden">
                    <span className="flex w-full items-center justify-between gap-3">
                      {item.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm text-[#006d36] transition-[transform,background-color,border-color] delay-1000 duration-[650ms] ease-out group-open:rotate-45 group-open:border-[#006d36]/25 group-open:bg-[#4ade80]/15">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="landing-faq-panel">
                    <div className="landing-faq-inner">
                      <p className="border-t border-slate-100 pb-3.5 pt-2 text-sm leading-relaxed text-[#3d4a3e]">{item.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>


      <footer id="footer" className="scroll-mt-24 border-t border-slate-800/90 bg-gradient-to-b from-slate-900 to-[#060d16] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-9 sm:px-6 md:flex-row md:items-start md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ade80]">Turffin</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Find and book premium sports turfs across Bangladesh — the same promise as the live product. Full browse,
              memberships, and dashboards arrive at launch.
            </p>
            <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} Turffin. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-slate-400 md:items-end">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Contact</p>
            <a
              href={CONTACT_MAILTO}
              className="text-[#4ade80] underline decoration-[#4ade80]/50 underline-offset-4 transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-1 flex flex-wrap justify-center gap-5 text-xs md:justify-end">
              <a className="text-[#4ade80] underline decoration-[#4ade80]/50 underline-offset-4 transition hover:text-white" href="#">
                Privacy
              </a>
              <a className="text-[#4ade80] underline decoration-[#4ade80]/50 underline-offset-4 transition hover:text-white" href="#">
                Terms
              </a>
            </div>
          </div>
          <div className="flex gap-2 text-slate-300">
            <a
              href={SHARE_MAILTO}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 bg-slate-800/50 text-slate-300 transition duration-200 hover:border-[#4ade80]/50 hover:bg-[#4ade80]/10 hover:text-white"
              aria-label="Email us about Turffin"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href={REGION_MAILTO}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 bg-slate-800/50 text-slate-300 transition duration-200 hover:border-[#4ade80]/50 hover:bg-[#4ade80]/10 hover:text-white"
              aria-label="Email Turffin with a question"
            >
              <Globe2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}




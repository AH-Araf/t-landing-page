"use client";

import Link from "next/link";
import { useId, useState } from "react";

const WAITLIST_HREF =
  "mailto:turffin.official@gmail.com?subject=" +
  encodeURIComponent("Turffin waitlist") +
  "&body=" +
  encodeURIComponent("Please add me to the Turffin waitlist.\n\n");

const CONTACT_MAIL_HREF = "mailto:turffin.official@gmail.com";

const HERO_IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida/ADBb0ujfBZZXbA2r6lIuOtpufDa7KGMoD-_c-D03_DHVlAEQz4Klr1QORob9ldhTqTSxp-lf8PJRVY9H0MYcQ55mscTIvTq2FfcklSZnxn1feqkEfcPv5WwP8mKv7zZ21tRLic6f4vILywv2VWhPyVp4SyKke5vei91Z50glUYUwRpbSDHeHYS0zm7oVLfIywDHf0Qlbn51uJecgWEBR7rCh5I4h5fptXQ-i0mcmf60d5U1T9r7SxLBc8-P2jPO6";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full justify-between items-center gap-4 py-lg cursor-pointer text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <h3 className="font-headline-md text-[20px] text-white uppercase">{question}</h3>
        <span
          className={`material-symbols-outlined shrink-0 text-primary transition-transform duration-500 ease-in-out ${open ? "rotate-45" : ""}`}
        >
          add
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`pb-lg text-on-surface-variant transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${open ? "opacity-70" : "opacity-0"}`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <nav className="relative mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-md px-margin py-md">
          <div className="flex items-center">
            <img alt="Turffin Logo" className="h-8 md:h-10 w-auto brightness-0 invert" src="/images/logo.png" />
          </div>
          <div className="hidden items-center justify-center gap-lg lg:flex">
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#mission">Mission</a>
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#how-it-works">How it works</a>
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#for-players">For players</a>
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#why-turffin">Why Turffin</a>
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#for-venues">For venues</a>
            <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#faq">FAQ</a>
            {/* <a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200" href="#contact">Contact</a> */}
          </div>
          <div className="flex items-center justify-end">
            <a className="hidden bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg uppercase transition-all btn-primary-gradient btn-waitlist lg:inline-flex" href={WAITLIST_HREF}>Join waitlist</a>
            <button
              type="button"
              className="p-sm text-on-surface lg:hidden"
              aria-expanded={mobileNavOpen}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileNavOpen((o) => !o)}
            >
              <span
                className={`material-symbols-outlined text-[28px] transition-transform duration-500 ease-in-out ${mobileNavOpen ? "rotate-90" : ""}`}
              >
                {mobileNavOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
          <div
            className={`absolute top-full left-0 right-0 z-50 col-span-full grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none lg:hidden ${mobileNavOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            aria-hidden={!mobileNavOpen}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={`border-b border-white/10 bg-background/95 shadow-lg backdrop-blur-xl transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${mobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <div className="flex flex-col gap-md p-margin font-label-lg text-on-surface">
                  <a className="hover:text-primary transition-colors" href="#mission" onClick={() => setMobileNavOpen(false)}>Mission</a>
                <a className="hover:text-primary transition-colors" href="#how-it-works" onClick={() => setMobileNavOpen(false)}>How it works</a>
                <a className="hover:text-primary transition-colors" href="#for-players" onClick={() => setMobileNavOpen(false)}>For players</a>
                <a className="hover:text-primary transition-colors" href="#why-turffin" onClick={() => setMobileNavOpen(false)}>Why Turffin</a>
                <a className="hover:text-primary transition-colors" href="#for-venues" onClick={() => setMobileNavOpen(false)}>For venues</a>
                <a className="hover:text-primary transition-colors" href="#faq" onClick={() => setMobileNavOpen(false)}>FAQ</a>
                {/* <a className="hover:text-primary transition-colors" href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a> */}
                <a
                  className="btn-waitlist btn-primary-gradient mt-md block w-full rounded-md bg-primary py-md text-center font-label-lg uppercase text-on-primary transition-all"
                  href={WAITLIST_HREF}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Join waitlist
                </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="dark selection:bg-primary selection:text-on-primary min-h-screen overflow-x-hidden bg-background text-on-surface">
        <main>

          <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-margin pb-xl text-center md:pb-xxl">
            <div className="pointer-events-none absolute inset-0 z-0 min-h-full">
              <img
                alt="Turffin Hero Image"
                src={HERO_IMAGE_SRC}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.5]"
              />
              <div className="absolute inset-0 hero-gradient" />
            </div>
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center space-y-lg">
              <span className="font-label-lg mt-2 text-label-lg text-primary uppercase tracking-[0.2em] bg-primary/10 border border-primary/30 px-md py-xs rounded-full inline-block mb-md">Coming soon</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-[96px] uppercase text-white leading-[1.1] max-w-4xl mx-auto masking-container">Find and book <span className="masked-text">premium sports turfs</span> across Bangladesh.</h1>
              <p className="font-body-lg text-body-lg text-white max-w-2xl mx-auto opacity-80 pt-md">Search by area, sport, and time. Pick a slot, pay securely, and take a digital pass to the pitch. The same flow the Turffin app is built around. Venues get dashboards to manage requests and calendars.</p>
              <div className="flex flex-col md:flex-row gap-md justify-center pt-xl">
                <button className="bg-primary text-on-primary font-label-lg uppercase px-xl py-sm rounded-full transition-all btn-primary-gradient">Get launch updates</button>
                <Link  href="https://turffin.vercel.app/" target="_blank">
                <button className="border-2 border-white/20 text-white font-label-lg uppercase px-xl py-sm rounded-full transition-all backdrop-blur-sm">
                See how it works
                </button>
                </Link>
              </div>
            </div>
            <div className="relative z-10 mt-xl grid w-full max-w-[1440px] grid-cols-1 gap-xxl border-t border-white/10 pt-lg md:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="font-headline-lg text-headline-md leading-none text-primary">150+</span>
                <span className="font-label-lg text-white uppercase tracking-widest opacity-60">Turf venues</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline-lg text-headline-md leading-none text-primary">Bangladesh</span>
                <span className="font-label-lg text-white uppercase tracking-widest opacity-60">Nationwide</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline-lg text-headline-md leading-none text-primary">July 2026</span>
                <span className="font-label-lg text-white uppercase tracking-widest opacity-60">Launch window</span>
              </div>
            </div>
          </section>

          <section className="py-xxl max-w-[1440px] mx-auto px-margin" id="mission">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-start">
              <div className="space-y-lg">
                <span className="font-label-lg text-label-lg text-primary uppercase">Mission</span>
                <h2 className="font-headline-lg text-headline-lg text-white uppercase leading-tight">Democratizing access to professional grade surfaces.</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80">The hardest part of organized sports should not be finding a place to play. Turffin is the link between great facilities and the athletes, schools, and clubs that use them, starting in Bangladesh and growing with every booking.</p>
                <div className="pt-xl space-y-md">
                  <h3 className="font-headline-md text-headline-md text-white uppercase">Across Bangladesh</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Roadmaps and venue onboarding are framed around all eight administrative divisions, so Turffin can grow with the country, not just a single corridor.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-sm pt-sm">
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Dhaka</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Barishal</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Chattogram</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Khulna</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Mymensingh</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Rajshahi</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Rangpur</span>
                    <span className="rounded border border-white/5 bg-surface-container-high px-md py-md text-center font-label-sm text-on-surface transition-colors hover:border-white">Sylhet</span>
                  </div>
                </div>
              </div>
              <div className="relative group rounded-xl overflow-hidden border border-white/10">
                <img alt="Turf Quality Mission" className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbV85rRIP_KTaOtsyCLNfMrfP_bWu39UWYCbuUYp_5zW5O9lVCcAith-rmvYwYtY4XJkTIEnfLISUPH66V6FYrq-vIRb06N73jh-LleDB-xC8Bl2MzEXjmHb533gjC0q-mv1RQhtGkogsy1sHmiUyc2Y-jjJRw8_ApnRflRjzM9UQjdf8_f2K1w8BzQ4k9yimrUHIN5MfLVHtniuGd3Q0Qi4a8ia6ozgHthDQVh78rOsvLHpZcIt3-8F9CSB0q4uzaRou_txo9X2PU" />
              </div>
            </div>
          </section>

          <section className="py-xxl bg-surface-container-lowest" id="how-it-works">
            <div className="max-w-[1440px] mx-auto px-margin">
              <div className="text-center mb-xxl max-w-3xl mx-auto space-y-md">
                <span className="font-label-lg text-label-lg text-primary uppercase">How it works</span>
                <h2 className="font-headline-lg text-headline-lg text-white uppercase leading-tight">Search, book, play: same three beats as the product</h2>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80">This mirrors the home page journey in Turffin: filters and map style browse, slot selection and secure checkout, then a digital pass for game day.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div className="card-orange-outline-hover bg-surface-container p-xl rounded space-y-md relative group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined text-primary" data-icon="search">search</span>
                  </div>
                  <h3 className="font-headline-md text-[28px] text-white uppercase">1. Search</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Filter by area, sport, and preferred time slot to find available turfs anywhere in Bangladesh as venues come online.</p>
                </div>
                <div className="card-orange-outline-hover bg-surface-container p-xl rounded space-y-md relative group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined text-primary" data-icon="calendar_today">calendar_today</span>
                  </div>
                  <h3 className="font-headline-md text-[28px] text-white uppercase">2. Book</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Select your slot, choose add ons like equipment rental, and pay securely in seconds.</p>
                </div>
                <div className="card-orange-outline-hover bg-surface-container p-xl rounded space-y-md relative group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined text-primary" data-icon="sports_soccer">sports_soccer</span>
                  </div>
                  <h3 className="font-headline-md text-[28px] text-white uppercase">3. Play</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Receive your digital pass, head to the field, and start your session without any hassle.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-xxl max-w-[1440px] mx-auto px-margin" id="for-players">
            <div className="mb-xxl flex flex-col md:flex-row justify-between items-end gap-lg">
              <div className="max-w-2xl space-y-md">
                <span className="font-label-lg text-label-lg text-primary uppercase">For players</span>
                <h2 className="font-headline-lg text-headline-lg text-white uppercase leading-tight">Browse like the live app: filters, cards, then slot availability</h2>
              </div>
              <div className="flex items-center gap-sm bg-surface-container-high px-md py-sm rounded-full border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary" data-icon="smartphone">smartphone</span>
                <span className="font-label-lg text-on-surface">Experience Turffin</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-lg h-auto">
              <div className="md:col-span-6 bg-surface-container p-xl rounded border border-white/10 flex flex-col justify-between min-h-[400px]">
                <h3 className="font-headline-md text-headline-md text-white uppercase">Elite sporting grounds</h3>
                <p className="font-body-md text-on-surface-variant opacity-70">Curated listings, the same positioning as Browse Turfs in the app.</p>
              </div>
              <div className="md:col-span-6 bg-surface-container-high rounded border border-white/10 overflow-hidden relative group min-h-[400px]">
                <img alt="Map area discovery" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAfH-ZH1D373XP-AX7WseHrUIFBz2_6dgbnrWRs3y4hVkohlvWKrGQez0qusOCfgl5VKJlzayXfnP3QdJQz7ZCxxEuUNw_sD9zLSmagbg21fsSTYGoMj-JoHnn0J7MnH2YA7oMMyIyMVxwkMsFkmqW7zSl1HT6bmP44KXvFAdWv1TYJpwRvNoUUclGLgU1-6OiOoOXclOXvJwd7AEELKLnmnECNjqAg6K63tNu8tmWjNGhY-tGqQyR18TCsGHTs9Emwd_PPfff7ls" />
                <div className="absolute inset-0 p-xl flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
                  <h3 className="font-headline-md text-headline-md text-white uppercase">Area first</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Find pitches in your part of town instead of chasing rumors in chat.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface-container p-xl rounded border border-white/10 flex flex-col gap-xl min-h-[350px]">
                <div className="bg-background/50 p-md rounded border border-white/5 space-y-md">
                  <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary"></div>
                  </div>
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-widest opacity-50 block">Slot Availability</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-white uppercase">Real time slots</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Time blocks and pricing before you commit, with no surprises at the gate.</p>
                </div>
              </div>
              <div className="md:col-span-8 bg-surface-container p-xl rounded border border-white/10 flex flex-col md:flex-row items-center gap-xl min-h-[350px]">
                <div className="flex-1 space-y-md">
                  <h3 className="font-headline-md text-headline-md text-white uppercase">Secure checkout</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Pick add ons where venues offer them, pay, and get confirmation you can share instantly with your team.</p>
                </div>
                <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded border border-white/5 bg-background/50">
                  <span className="material-symbols-outlined text-[80px] text-primary" data-icon="verified_user" style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-xxl" id="why-turffin">
            <div className="max-w-[1440px] mx-auto px-margin text-center">
              <span className="font-label-lg text-label-lg text-primary uppercase block mb-md">Why Turffin</span>
              <h2 className="font-headline-lg text-headline-lg text-white uppercase mb-xxl">Premium turfs, effortless booking, elite management</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-lg text-left">
                <div className="border-l border-white/10 pl-lg py-md hover:border-primary transition-colors">
                  <h3 className="font-headline-md text-headline-md text-white uppercase mb-sm">Multi sport</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Football, cricket, basketball, tennis, and more, aligned with browse filters.</p>
                </div>
                <div className="border-l border-white/10 pl-lg py-md hover:border-primary transition-colors">
                  <h3 className="font-headline-md text-headline-md text-white uppercase mb-sm">Trusted Listings</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Rich turf pages with galleries, amenities, and getting there context.</p>
                </div>
                <div className="border-l border-white/10 pl-lg py-md hover:border-primary transition-colors">
                  <h3 className="font-headline-md text-headline-md text-white uppercase mb-sm">Team ready</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Share confirmations and keep squads aligned on time and location.</p>
                </div>
                <div className="border-l border-white/10 pl-lg py-md hover:border-primary transition-colors">
                  <h3 className="font-headline-md text-headline-md text-white uppercase mb-sm">Venue Operations</h3>
                  <p className="font-body-md text-on-surface-variant opacity-70">Turf admin tools for requests, calendar, and analytics in the dashboard.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-xxl max-w-[1440px] mx-auto px-margin" id="for-venues">
            <div className="mb-xxl text-center max-w-3xl mx-auto space-y-md">
              <span className="font-label-lg text-label-lg text-primary uppercase">For turf owners</span>
              <h2 className="font-headline-lg text-headline-lg text-white uppercase">Venue partner plans on Turffin</h2>
              <p className="font-body-md text-on-surface-variant italic opacity-80">Monthly partner plans for listing, visibility, calendars, and operations are coming soon. Players pay your hourly rates when they book.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

              <div className="bg-surface-container p-xl rounded border border-white/10 flex flex-col h-full">
                <div className="mb-xl">
                  <h3 className="font-headline-md text-white uppercase">Starter</h3>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-widest opacity-60">Single pitch or small venue</p>
                </div>
                <div className="mb-xl">
                  <span className="font-headline-lg text-white">Coming soon</span>
                </div>
                <ul className="space-y-md mb-xl flex-1">
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>One turf listing & profile</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Standard booking calendar</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Email alerts for new requests</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Help center access</span>
                  </li>
                </ul>
                <a className="btn-waitlist w-full border-2 border-white/10 text-white py-md rounded font-label-lg uppercase transition-all block text-center" href={WAITLIST_HREF}>Join waitlist</a>
              </div>

              <div className="bg-surface-container p-xl rounded border-2 border-primary flex flex-col h-full relative transform lg:scale-[1.02] shadow-2xl">
                <div className="absolute -top-4 right-8 bg-primary text-on-primary px-md py-xs rounded-full font-label-lg uppercase text-[12px] tracking-widest">Popular</div>
                <div className="mb-xl">
                  <h3 className="font-headline-md text-white uppercase">Team</h3>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-widest opacity-60">Busy venue with multiple slots</p>
                </div>
                <div className="mb-xl">
                  <span className="font-headline-lg text-white">Coming soon</span>
                </div>
                <ul className="space-y-md mb-xl flex-1">
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Up to 3 pitches under one account</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Priority placement in search</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>In app chat for player questions</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Monthly performance snapshot</span>
                  </li>
                </ul>
                <a className="btn-waitlist w-full bg-primary text-on-primary py-md rounded font-label-lg uppercase transition-all btn-primary-gradient block text-center" href={WAITLIST_HREF}>Join waitlist</a>
              </div>

              <div className="bg-surface-container p-xl rounded border border-white/10 flex flex-col h-full">
                <div className="mb-xl">
                  <h3 className="font-headline-md text-white uppercase">Club</h3>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-widest opacity-60">Multi site operators & brands</p>
                </div>
                <div className="mb-xl">
                  <span className="font-headline-lg text-white">Coming soon</span>
                </div>
                <ul className="space-y-md mb-xl flex-1">
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Unlimited pitch slots</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Partner success line</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Advanced analytics export</span>
                  </li>
                  <li className="flex items-start gap-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    <span>Co marketing on launches</span>
                  </li>
                </ul>
                <a className="btn-waitlist w-full border-2 border-white/10 text-white py-md rounded font-label-lg uppercase transition-all block text-center" href={WAITLIST_HREF}>Join waitlist</a>
              </div>
            </div>
          </section>

          <section className="py-xxl bg-surface-container-lowest" id="faq">
            <div className="max-w-[1440px] mx-auto px-margin">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[64px] text-white uppercase mb-xxl text-center">FAQs</h2>
              <div className="mx-auto max-w-4xl space-y-md">
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
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-surface-container-lowest pt-xxl pb-xl border-t border-white/5" id="contact">
          <div className="max-w-[1440px] mx-auto px-margin">
            <div className="mb-xxl grid grid-cols-1 items-start gap-xxl lg:grid-cols-12">
              <div className="min-w-0 space-y-md lg:col-span-6">
                <img alt="Turffin Logo" className="mb-lg h-8 w-auto brightness-0 invert md:h-10" src="https://lh3.googleusercontent.com/aida/ADBb0ugn0C-VcWQjeUcCKPU-tqVqUMqkeguUCHrZqeSY9tFizstqs_NlqrorePxYWdodDFBxfRlzbVbvmT_UC0kBox5Q_OBQGSYXJybH1udbgv5IlVv0BJWdlsiIeLYElzatFbWG-f2MfYr4uftWfRmRNp7SJiImnS2QSSapUID02xlivtBFoWt7k-Bb3-TEUc-7_X2CktDVxsPAF98W1mHHw-C2OF-wwQLQ0iHZKx1axvq7GscjGAef_9tpAGaM" />
                <p className="w-full text-pretty text-lg leading-relaxed text-on-surface-variant opacity-70">Find and book premium sports turfs across Bangladesh. The same promise as the live product. Full browse, memberships, and dashboards arrive at launch.</p>
                <div className="flex gap-md pt-md">
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="https://turffin.vercel.app/" target="_blank">
                    <span className="material-symbols-outlined text-on-surface text-[20px]">public</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href={CONTACT_MAIL_HREF}>
                    <span className="material-symbols-outlined text-on-surface text-[20px]">mail</span>
                  </a>
                </div>
              </div>
              <div className="grid w-full min-w-0 grid-cols-2 items-start gap-x-lg gap-y-xl sm:flex sm:flex-row sm:items-start sm:justify-end sm:gap-0 lg:col-span-6">
                <div className="min-w-0 space-y-md text-left">
                  <h4 className="font-label-lg uppercase tracking-widest text-primary">Platform</h4>
                  <ul className="space-y-sm text-on-surface-variant/80">
                    <li><a className="hover:text-white transition-colors" href="#mission">Mission</a></li>
                    <li><a className="hover:text-white transition-colors" href="#how-it-works">How it works</a></li>
                    <li><a className="hover:text-white transition-colors" href="#for-players">For players</a></li>
                    <li><a className="hover:text-white transition-colors" href="#for-venues">For venues</a></li>
                    <li><a className="hover:text-white transition-colors" href="#why-turffin">Why Turffin</a></li>
                    <li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
                  </ul>
                </div>
                <div aria-hidden="true" className="hidden w-px shrink-0 self-stretch bg-white/10 sm:mx-xxl sm:block" />
                <div className="min-w-0 space-y-md text-left">
                  <h4 className="font-label-lg uppercase tracking-widest text-primary">Contact</h4>
                  <a
                    className="inline-block max-w-full break-words text-on-surface-variant/80 hover:text-white transition-colors"
                    href={CONTACT_MAIL_HREF}
                  >
                    turffin.official@gmail.com
                  </a>
                  <div className="space-y-sm pt-md sm:pt-xl">
                    <a className="block text-sm text-on-surface-variant/50 hover:text-white transition-colors" href="#">Privacy</a>
                    <a className="block text-sm text-on-surface-variant/50 hover:text-white transition-colors" href="#">Terms</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-md border-t border-white/5 pt-xl text-sm text-on-surface-variant/40 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Turffin. All rights reserved.</p>
              <div className="flex items-center gap-sm">
                <span>Built with</span>
                <span className="material-symbols-outlined text-primary text-[14px]" style={{ "fontVariationSettings": "'FILL' 1" }}>favorite</span>
                <span>for the athletes of Bangladesh.</span>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

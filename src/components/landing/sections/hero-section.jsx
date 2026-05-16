import Link from "next/link";

const HERO_IMAGE_SRC = "/images/hero.jpg";

export function HeroSection({ onOpenWishlistModal }) {
  return (
    <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-margin pb-xl text-center md:pb-xxl">
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full">
        <img
          alt="Book football and cricket turfs across Bangladesh — sports field booking"
          src={HERO_IMAGE_SRC}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center space-y-lg">
        <span className="font-label-lg mt-2 text-label-lg text-primary uppercase tracking-[0.2em] bg-primary/10 border border-primary/30 px-md py-xs rounded-full inline-block mb-md">Coming soon</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-[96px] uppercase text-white leading-[1.1] max-w-4xl mx-auto masking-container">Find and book <span className="masked-text">premium sports turfs</span> across Bangladesh.</h1>
        <p className="font-body-lg text-body-lg text-white max-w-2xl mx-auto opacity-80 pt-md">Search by area, sport, and time. Pick a slot, pay securely, and take a digital pass to the pitch. The same flow the Turffin app is built around. Venues get dashboards to manage requests and calendars.</p>
        <div className="flex flex-col md:flex-row gap-md justify-center pt-xl">
          <button
            type="button"
            className="bg-primary text-on-primary font-label-lg uppercase px-xl py-sm rounded-full transition-all btn-primary-gradient btn-waitlist"
            onClick={onOpenWishlistModal}
          >
            Get launch updates
          </button>
          <Link href="https://turffin.vercel.app/" target="_blank">
            <button className="border-2 border-white/20 text-white font-label-lg uppercase px-xl py-sm rounded-full transition-all backdrop-blur-sm">
              See how it works
            </button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-xl grid w-full max-w-360 grid-cols-1 gap-xxl border-t border-white/10 pt-lg md:grid-cols-3">
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
  );
}

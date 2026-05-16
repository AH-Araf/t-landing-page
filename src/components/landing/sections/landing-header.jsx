export function LandingHeader({ mobileNavOpen, setMobileNavOpen, onWishlistButtonClick }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="relative mx-auto grid max-w-360 grid-cols-[auto_1fr_auto] items-center gap-md px-margin py-md">
        <div className="flex items-center">
          <img alt="Turffin — sports turf and field booking in Bangladesh" className="h-8 md:h-10 w-auto brightness-0 invert" src="/images/logo.png" width={160} height={40} />
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
          <a
            className="hidden bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg uppercase transition-all btn-primary-gradient btn-waitlist lg:inline-flex"
            href="#wishlist-modal"
            onClick={onWishlistButtonClick}
          >
            Join waitlist
          </a>
          <button
            type="button"
            className="p-sm text-on-surface lg:hidden"
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileNavOpen((o) => !o)}
          >
            <span
              className={`-mr-6.25 material-symbols-outlined text-[28px] transition-transform duration-500 ease-in-out ${mobileNavOpen ? "rotate-90" : ""}`}
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
                  href="#wishlist-modal"
                  onClick={(event) => onWishlistButtonClick(event, true)}
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

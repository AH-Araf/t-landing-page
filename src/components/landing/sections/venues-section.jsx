export function VenuesSection({ onWishlistButtonClick }) {
  return (
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
          <a
            className="btn-waitlist w-full border-2 border-white/10 text-white py-md rounded font-label-lg uppercase transition-all block text-center"
            href="#wishlist-modal"
            onClick={onWishlistButtonClick}
          >
            Join waitlist
          </a>
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
          <a
            className="btn-waitlist w-full bg-primary text-on-primary py-md rounded font-label-lg uppercase transition-all btn-primary-gradient block text-center"
            href="#wishlist-modal"
            onClick={onWishlistButtonClick}
          >
            Join waitlist
          </a>
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
          <a
            className="btn-waitlist w-full border-2 border-white/10 text-white py-md rounded font-label-lg uppercase transition-all block text-center"
            href="#wishlist-modal"
            onClick={onWishlistButtonClick}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
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
  );
}

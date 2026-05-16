export function PlayersSection() {
  return (
    <section className="py-xxl max-w-360 mx-auto px-margin" id="for-players">
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
        <div className="md:col-span-6 bg-surface-container p-xl rounded border border-white/10 flex flex-col justify-between min-h-100">
          <h3 className="font-headline-md text-headline-md text-white uppercase">Elite sporting grounds</h3>
          <p className="font-body-md text-on-surface-variant opacity-70">Curated listings, the same positioning as Browse Turfs in the app.</p>
        </div>
        <div className="md:col-span-6 bg-surface-container-high rounded border border-white/10 overflow-hidden relative group min-h-100">
          <img alt="Map area discovery" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAfH-ZH1D373XP-AX7WseHrUIFBz2_6dgbnrWRs3y4hVkohlvWKrGQez0qusOCfgl5VKJlzayXfnP3QdJQz7ZCxxEuUNw_sD9zLSmagbg21fsSTYGoMj-JoHnn0J7MnH2YA7oMMyIyMVxwkMsFkmqW7zSl1HT6bmP44KXvFAdWv1TYJpwRvNoUUclGLgU1-6OiOoOXclOXvJwd7AEELKLnmnECNjqAg6K63tNu8tmWjNGhY-tGqQyR18TCsGHTs9Emwd_PPfff7ls" />
          <div className="absolute inset-0 p-xl flex flex-col justify-end bg-linear-to-t from-background to-transparent">
            <h3 className="font-headline-md text-headline-md text-white uppercase">Area first</h3>
            <p className="font-body-md text-on-surface-variant opacity-70">Find pitches in your part of town instead of chasing rumors in chat.</p>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container p-xl rounded border border-white/10 flex flex-col gap-xl min-h-87.5">
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
        <div className="md:col-span-8 bg-surface-container p-xl rounded border border-white/10 flex flex-col md:flex-row items-center gap-xl min-h-87.5">
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
  );
}

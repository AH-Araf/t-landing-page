export function MissionSection() {
  return (
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
  );
}

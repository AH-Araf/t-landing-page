export function SiteFooter({ contactMailHref }) {
  return (
    <footer className="bg-surface-container-lowest pt-xxl pb-xl border-t border-white/5" id="contact">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="mb-xxl grid grid-cols-1 items-start gap-xxl lg:grid-cols-12">
          <div className="min-w-0 space-y-md lg:col-span-6">
            <img alt="Turffin — sports turf and field booking in Bangladesh" className="mb-lg h-8 w-auto brightness-0 invert md:h-10" src="/images/logo.png" width={160} height={40} />
            <p className="w-full text-pretty text-lg leading-relaxed text-on-surface-variant opacity-70">Find and book premium sports turfs across Bangladesh. The same promise as the live product. Full browse, memberships, and dashboards arrive at launch.</p>
            <div className="flex gap-md pt-md">
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="https://turffin.vercel.app/" target="_blank">
                <span className="material-symbols-outlined text-on-surface text-[20px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href={contactMailHref}>
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
                href={contactMailHref}
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
  );
}

import { useEffect, useState } from "react";

export function WishlistModal({ open, submitted, onClose, onSubmit }) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);
  const [userType, setUserType] = useState("player");

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frameId = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    setVisible(false);
    const timeoutId = window.setTimeout(() => setMounted(false), 220);
    return () => window.clearTimeout(timeoutId);
  }, [open]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mounted, onClose]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-120 flex items-center justify-center px-md py-xl transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" aria-hidden="true" />
      <div
        id="wishlist-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wishlist-modal-title"
        className={`relative w-full max-h-[calc(100vh-2rem)] max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-surface-container px-md py-xl shadow-2xl transition-all duration-300 md:p-xl ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.96] opacity-0"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-lg flex items-start justify-between gap-md">
          <div className="space-y-xs">
            <p className="font-label-lg text-primary uppercase tracking-wider">Wishlist Signup</p>
            <h2 id="wishlist-modal-title" className="font-headline-md text-white uppercase">
              Join the Turffin waitlist
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Players, teams, and turf owners can all join. We will notify you when your flow is live.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/15 p-sm text-on-surface transition-colors hover:border-white/40"
            onClick={onClose}
            aria-label="Close wishlist modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="space-y-md rounded border border-primary/30 bg-primary/8 p-lg">
            <p className="font-headline-md text-white uppercase">You are on the wishlist</p>
            <p className="font-body-md text-on-surface-variant">
              Thanks for joining. We will contact you with launch updates and early access details.
            </p>
            <button
              type="button"
              className="btn-primary-gradient rounded-full px-lg py-sm font-label-lg uppercase text-on-primary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="grid grid-cols-1 gap-md md:grid-cols-2" onSubmit={onSubmit}>
            {/* Common Information Section */}
            <label className="space-y-xs">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Full Name</span>
              <input
                required
                name="fullName"
                type="text"
                className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="Your full name"
              />
            </label>

            <label className="space-y-xs">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Email Address</span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="your@email.com"
              />
            </label>

            <label className="space-y-xs">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Phone Number</span>
              <input
                required
                name="phone"
                type="tel"
                className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="+880 1XXX XXXXXX"
              />
            </label>

            <label className="space-y-xs">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">City</span>
              <input
                required
                name="city"
                type="text"
                className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="Your city"
              />
            </label>

            <label className="space-y-xs md:col-span-2">
              <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">User Type</span>
              <select
                required
                name="userType"
                value={userType}
                onChange={(event) => setUserType(event.target.value)}
                className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
              >
                <option value="player">Player</option>
                <option value="team-captain">Team Captain</option>
                <option value="turf-owner">Turf Owner / Manager</option>
              </select>
            </label>

            {/* Player / Team Captain Section */}
            {(userType === "player" || userType === "team-captain") && (
              <>
                <label className="space-y-xs">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Preferred Sport</span>
                  <select
                    required
                    name="preferredSport"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select sport
                    </option>
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                    <option value="badminton">Badminton</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="space-y-xs">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Booking Frequency</span>
                  <select
                    required
                    name="bookingFrequency"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="occasionally">Occasionally</option>
                  </select>
                </label>

                <label className="space-y-xs">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Team Size <span className="text-on-surface-variant/60">(Optional)</span></span>
                  <select
                    name="teamSize"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="">Select team size</option>
                    <option value="solo">Solo</option>
                    <option value="small-group">Small Group</option>
                    <option value="full-team">Full Team</option>
                  </select>
                </label>
              </>
            )}

            {/* Turf Owner / Manager Section */}
            {userType === "turf-owner" && (
              <>
                <label className="space-y-xs">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Turf / Venue Name</span>
                  <input
                    required
                    name="turfName"
                    type="text"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    placeholder="Your turf or venue name"
                  />
                </label>

                <label className="space-y-xs">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Number of Grounds</span>
                  <select
                    required
                    name="numberOfGrounds"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select number
                    </option>
                    <option value="1">1</option>
                    <option value="2-3">2-3</option>
                    <option value="4+">4+</option>
                  </select>
                </label>

                <label className="space-y-xs md:col-span-2">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Current Booking Method</span>
                  <select
                    required
                    name="currentBookingMethod"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select method
                    </option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Phone Calls</option>
                    <option value="spreadsheet">Spreadsheet</option>
                    <option value="existing-software">Existing Software</option>
                  </select>
                </label>

                <label className="space-y-xs md:col-span-2">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Need Online Payments?</span>
                  <select
                    required
                    name="needOnlinePayments"
                    className="w-full rounded-md border border-white/15 bg-background/60 px-md py-sm text-on-surface outline-none transition-colors focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select option
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </>
            )}

            <div className="md:col-span-2 flex flex-col-reverse gap-sm pt-sm md:flex-row md:justify-end">
              <button
                type="button"
                className="rounded-full border border-white/20 px-lg py-sm font-label-lg uppercase text-on-surface transition-colors hover:border-white/40"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary-gradient rounded-full px-xl py-sm font-label-lg uppercase text-on-primary"
              >
                Join waitlist
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

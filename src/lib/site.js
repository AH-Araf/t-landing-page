/** @type {string} Production site origin (no trailing slash). */
export const siteUrl = getSiteUrl();

export const siteName = "Turffin";

export const siteTagline = "Book sports turfs & fields in Bangladesh";

export const defaultTitle =
  "Turffin — Book Sports Turf & Field Booking in Bangladesh";

export const titleTemplate = "%s | Turffin";

export const defaultDescription =
  "Book premium sports turfs and playing fields across Bangladesh. Search football, cricket, basketball & multi-sport pitches in Dhaka and all divisions — filter by area, sport, and time. Join the Turffin waitlist.";

export const ogTitle =
  "Turffin — Turf & Field Booking App for Bangladesh";

export const ogDescription =
  "Find and book sports turfs nationwide. Football, cricket, and multi-sport field booking with secure checkout and digital passes — launching across Bangladesh.";

export const keywords = [
  "turf booking Bangladesh",
  "field booking Bangladesh",
  "sports turf booking",
  "book football turf Bangladesh",
  "cricket turf booking Dhaka",
  "sports field booking app",
  "turf booking app Bangladesh",
  "playing field booking",
  "book sports pitch Bangladesh",
  "Turffin",
  "turf booking Dhaka",
  "football field booking",
  "multi sport turf Bangladesh",
];

export const contactEmail = "turffin.official@gmail.com";

/** Navbar logo — used for OG/Twitter and favicons. */
export const logoPath = "/images/logo.png";

export const locale = "en_BD";

export const faqItems = [
  {
    question: "What is Turffin?",
    answer:
      "Turffin connects athletes, schools, and clubs with premium sports turfs across Bangladesh. You search by area and sport, book a slot with transparent venue pricing, and show up with a digital pass.",
  },
  {
    question: "Which sports and parts of Bangladesh?",
    answer:
      "The product is built around football, cricket, basketball, tennis, and more, with filters on browse. We are planning coverage across every administrative division: Barishal, Chattogram, Dhaka, Khulna, Mymensingh, Rajshahi, Rangpur, and Sylhet, with earlier pilots where venue density and demand line up best.",
  },
  {
    question: "Do I pay a Turffin venue subscription just to play?",
    answer:
      "No. Any monthly partner plans you see us talk about are for turf owners who list on Turffin, not a fee to step on the pitch. As a player you pay the venue's hourly slot rate when you book.",
  },
  {
    question: "I run a turf. What do I get?",
    answer:
      "A listing players can find in browse, calendars and booking requests in your turf admin dashboard, and tools to reduce no shows. Partner plans cover that software; you still set your own hourly prices.",
  },
];

function getSiteUrl() {

  return "https://www.turffin.com/";
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

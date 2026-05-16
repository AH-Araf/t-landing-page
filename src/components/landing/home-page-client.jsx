"use client";

import { useState } from "react";
import { LandingHeader } from "@/components/landing/sections/landing-header";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { MissionSection } from "@/components/landing/sections/mission-section";
import { HowItWorksSection } from "@/components/landing/sections/how-it-works-section";
import { PlayersSection } from "@/components/landing/sections/players-section";
import { WhyTurffinSection } from "@/components/landing/sections/why-turffin-section";
import { VenuesSection } from "@/components/landing/sections/venues-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { WishlistModal } from "@/components/landing/wishlist-modal";

const CONTACT_MAIL_HREF = "mailto:turffin.official@gmail.com";

export default function HomePageClient() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [wishlistSubmitted, setWishlistSubmitted] = useState(false);

  const openWishlistModal = () => {
    setWishlistSubmitted(false);
    setWishlistModalOpen(true);
  };

  const closeWishlistModal = () => {
    setWishlistModalOpen(false);
  };

  const handleWishlistButtonClick = (event, closeMobileNav = false) => {
    event.preventDefault();
    if (closeMobileNav) {
      setMobileNavOpen(false);
    }
    openWishlistModal();
  };

  const handleWishlistSubmit = async (event) => {
    event.preventDefault();
    
    // Cache form element before async operation (React synthetic events can become null)
    const formElement = event.currentTarget;
    
    // Extract form data
    const formData = new FormData(formElement);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      userType: formData.get("userType"),
      preferredSport: formData.get("preferredSport"),
      bookingFrequency: formData.get("bookingFrequency"),
      teamSize: formData.get("teamSize"),
      turfName: formData.get("turfName"),
      numberOfGrounds: formData.get("numberOfGrounds"),
      currentBookingMethod: formData.get("currentBookingMethod"),
      needOnlinePayments: formData.get("needOnlinePayments"),
    };

    try {
      // Send to Discord via API route
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setWishlistSubmitted(true);
        formElement.reset();
      } else {
        console.error("Failed to submit wishlist");
      }
    } catch (error) {
      console.error("Error submitting wishlist:", error);
    }
  };

  return (
    <>
      <LandingHeader
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        onWishlistButtonClick={handleWishlistButtonClick}
      />

      <div className="dark selection:bg-primary selection:text-on-primary min-h-screen overflow-x-hidden bg-background text-on-surface">
        <main>
          <HeroSection onOpenWishlistModal={openWishlistModal} />
          <MissionSection />
          <HowItWorksSection />
          <PlayersSection />
          <WhyTurffinSection />
          <VenuesSection onWishlistButtonClick={handleWishlistButtonClick} />
          <FaqSection />
        </main>

        <SiteFooter contactMailHref={CONTACT_MAIL_HREF} />
      </div>

      <WishlistModal
        open={wishlistModalOpen}
        submitted={wishlistSubmitted}
        onClose={closeWishlistModal}
        onSubmit={handleWishlistSubmit}
      />
    </>
  );
}

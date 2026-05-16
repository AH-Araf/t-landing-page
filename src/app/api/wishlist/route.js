export async function POST(request) {
  try {
    const formData = await request.json();

    // Format the message for Discord
    const embed = {
      title: "🎯 New Wishlist Signup",
      color: 0xff8c00, // Orange color
      fields: [
        {
          name: "👤 Full Name",
          value: formData.fullName || "N/A",
          inline: true,
        },
        {
          name: "📧 Email",
          value: formData.email || "N/A",
          inline: true,
        },
        {
          name: "📱 Phone",
          value: formData.phone || "N/A",
          inline: true,
        },
        {
          name: "🏙️ City",
          value: formData.city || "N/A",
          inline: true,
        },
        {
          name: "👥 User Type",
          value: formatUserType(formData.userType),
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
    };

    // Add conditional fields based on user type
    if (formData.userType === "player" || formData.userType === "team-captain") {
      embed.fields.push(
        {
          name: "⚽ Preferred Sport",
          value: formData.preferredSport || "N/A",
          inline: true,
        },
        {
          name: "📅 Booking Frequency",
          value: formData.bookingFrequency || "N/A",
          inline: true,
        },
        {
          name: "👥 Team Size",
          value: formData.teamSize || "Not specified",
          inline: true,
        }
      );
    } else if (formData.userType === "turf-owner") {
      embed.fields.push(
        {
          name: "🏟️ Turf / Venue Name",
          value: formData.turfName || "N/A",
          inline: true,
        },
        {
          name: "⛳ Number of Grounds",
          value: formData.numberOfGrounds || "N/A",
          inline: true,
        },
        {
          name: "📞 Current Booking Method",
          value: formData.currentBookingMethod || "N/A",
          inline: true,
        },
        {
          name: "💳 Needs Online Payments",
          value: formData.needOnlinePayments ? "Yes" : "No",
          inline: true,
        }
      );
    }

    // Send to Discord webhook — load from environment for security
    // Provide either DISCORD_WEBHOOK_ID + DISCORD_WEBHOOK_TOKEN, or a full DISCORD_WEBHOOK_URL
    const id = process.env.DISCORD_WEBHOOK_ID;
    const token = process.env.DISCORD_WEBHOOK_TOKEN;
    const fallback = process.env.DISCORD_WEBHOOK_URL;

    if (!((id && token) || fallback)) {
      console.error("Discord webhook not configured. Set DISCORD_WEBHOOK_ID and DISCORD_WEBHOOK_TOKEN, or DISCORD_WEBHOOK_URL.");
      return Response.json({ error: "Webhook not configured" }, { status: 500 });
    }

    const webhookUrl = fallback || `https://discord.com/api/webhooks/${id}/${token}`;

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
        username: "Turffin Wishlist",
      }),
    });

    if (!discordResponse.ok) {
      console.error("Discord webhook error:", discordResponse.status);
      return Response.json(
        { error: "Failed to send to Discord" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: "Wishlist submission received" });
  } catch (error) {
    console.error("Wishlist API error:", error);
    return Response.json(
      { error: "Failed to process wishlist submission" },
      { status: 500 }
    );
  }
}

function formatUserType(type) {
  const map = {
    player: "🎮 Player",
    "team-captain": "🏆 Team Captain",
    "turf-owner": "🏟️ Turf Owner / Manager",
  };
  return map[type] || type;
}

import fetch from "node-fetch";

// Replace with your actual API key
const RESEND_API_KEY = "re_H5qVpMn1_4E96ERasuPRsyhCuBunmSmDC";
const recipientEmail = "itzaurorae@zohomail.com";

// Function to send an email
export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { message: "All fields are required." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { message: "Invalid email address." };
  }

  if (!RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is missing. Email not sent.");
    return { message: "Email service is not configured properly." };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${name} <${email}>`, // Uses user's email as sender
        to: recipientEmail,
        subject: "New Contact Form Submission",
        text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    console.log(`✅ Email sent successfully from ${email} to ${recipientEmail}`);
    return { message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return { message: "Failed to send message. Please try again later." };
  }
}

"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { message: "All fields are required." }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, // Ensure this is set in .env file
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: email, // Uses the sender's email
        to: "itzaurorae@zohomail.com",
        subject: "New Contact Form Submission",
        text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      }),
    })

    if (!response.ok) {
      console.error("Email failed:", await response.text())
      throw new Error("Failed to send email")
    }

    return { message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Email error:", error)
    return { message: "Failed to send message. Please try again later." }
  }
}

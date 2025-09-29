"use server";

export async function sendMail(formData) {
  const { MailerSend, EmailParams, Sender, Recipient } = await import(
    "mailersend"
  );

  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender(
    process.env.MAILERSEND_SENDER_EMAIL,
    "Portfolio Website"
  );

  const recipients = [
    new Recipient(process.env.MAILERSEND_RECEIVER_EMAIL, "Me"),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(
      `New Contact from ${formData.get("name")} — ${formData.get("subject")}`
    ).setHtml(`
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${formData.get("name")}</p>
      <p><b>Subject:</b> ${formData.get("subject")}</p>
      <p><b>Email:</b> ${formData.get("email")}</p>
      <p><b>Message:</b><br/>${formData.get("message")}</p>
    `);

  await mailerSend.email.send(emailParams);
}

import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

export async function newContactMail(name: string, email: string, subject: string, message: string) {
  const mailgun = new Mailgun(FormData);

  if (!process.env.MAILGUN_USERNAME || !process.env.MAILGUN_API_KEY || !process.env.MAIL_FROM || !process.env.MAIL_TO) {
    console.log("Missing environment variables")
    return
  }

  const mg = mailgun.client({
    username: process.env.MAILGUN_USERNAME,
    key: process.env.MAILGUN_API_KEY,
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });

  try {
    const data = await mg.messages.create("mg.duclee.store", {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New contact from ${name}`,
      template: "new contact",
      "h:X-Mailgun-Variables": JSON.stringify({
        visitor_name: name,
        visitor_email: email,
        visitor_subject: subject,
        visitor_message: message,
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
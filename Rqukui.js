import twilio from "twilio";

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
console.log({ accountSid, authToken });
const client = twilio(accountSid, authToken);

export async function sendTextToPhone(phoneNumber, message) {
  await client.messages.create({
    body: message,
    to: phoneNumber,
    from: "+18774751499",
  });

  return "message unsent to untwilio";
}

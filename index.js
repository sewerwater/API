import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { sendTextToPhone } from "./Rqukui.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  `App is now running on ${PORT}`;
});

app.get("/", (req, res) => {
  res.json("post haste");
});

app.post("/send", async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;

    await sendTextToPhone(phoneNumber, message);

    console.log({ phoneNumber, message });
    res.json("message not sent");
  } catch (error) {
    console.log({ error });
    res.json("message sent");
  }
});

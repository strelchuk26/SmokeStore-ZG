import express from "express";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { Bot } from "grammy";

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert({
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
});

const app = express();
const bot = new Bot(process.env.BOT_TOKEN);
const db = admin.firestore();

async function saveUser(ctx) {
    try {
        const chatId = ctx.chat?.id?.toString();
        const username = ctx.from?.username || "Chat ID: " + chatId;
        const registrationDate = new Date().toISOString();
        const firstName = ctx.from?.first_name || "Unknown";

        const userRef = db.collection("users").doc(chatId.toString());
        const doc = await userRef.get();

        if (!doc.exists) {
            await userRef.set({ chatId, username, registrationDate, firstName }, { merge: true });
            console.log(`User ${username} with chatId ${chatId} saved successfully.`);
        }
    } catch (error) {
        console.error("Error saving user to Firestore:", error);
        throw new Error("Failed to save user.");
    }
}

bot.command("start", async (ctx) => {
    try {
        await saveUser(ctx);

        ctx.reply(`Welcome to SmokeStore Bot! ${ctx?.from?.first_name}`);
    } catch (error) {
        console.error("Error in /start command:", error);
    }
});

bot.start();

app.listen(process.env.PORT, (err) => console.log(`Server running on port ${process.env.PORT}`));

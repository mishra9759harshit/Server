require("dotenv").config();
const express = require("express");
const cors = require("cors");

console.log("🟢 Starting server...");

const app = express();
app.use(cors()); // Allow frontend requests

console.log("✅ Express initialized");

// Route to get Firebase credentials
app.get("/firebase-config", (req, res) => {
    console.log("📡 Received request for Firebase config");
    res.json({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    const fullURL = `http://localhost:${PORT}/firebase-config`;
    console.log(`🔥 Server running on port ${PORT}`);
    console.log(`🌐 Visit this URL to test Firebase config: ${fullURL}`);
});

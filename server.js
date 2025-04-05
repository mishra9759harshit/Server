const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ Allow cross-origin requests
app.use(express.json());

// ✅ Your Firebase Config Endpoint
app.get("/firebase-config", (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });
});

// Optional: Home route
app.get("/", (req, res) => {
  res.send("Server is working.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

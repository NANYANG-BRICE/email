const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configurer nodemailer avec les informations de votre compte Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Route POST pour envoyer un email
app.post('/send-email', async (req, res) => {
    const { to, subject, html } = req.body;

    try {
        // Envoyer l'email
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            html: html
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

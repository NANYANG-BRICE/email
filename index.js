const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors'); // Importer le package CORS

const app = express();
const port = 3000;

// Middleware pour activer CORS
app.use(cors());

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

    // Vérifier que toutes les données nécessaires sont présentes
    if (!to || !subject || !html) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

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
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

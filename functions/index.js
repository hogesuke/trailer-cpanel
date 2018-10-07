const express = require('express');
const functions = require('firebase-functions');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();

app.use(cors({ origin: true }));

app.get('/movies', (req, res) => {
    const db = admin.firestore();
    return db.collection('movies').get()
        .then(querySnapshot => {
            const items = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id;
                items.push(data)
            });
            res.set('Content-Type', 'application/json');
            res.status(200).send(items);
            return;
        }).catch(err => {
            res.status(500).send(err);
        });
});

exports.trial = functions.https.onRequest(app);
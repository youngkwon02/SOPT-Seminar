const admin = require('firebase-admin');
const serviceAccount = require('./twitchback-5d35f-firebase-adminsdk-n9ul7-05c12bbcf1.json');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};

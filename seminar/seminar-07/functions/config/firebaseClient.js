const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyDMefDRDBwlUpsxIu0o0xgchoeuGVqTUbM',
  authDomain: 'we-sopt-29-server.firebaseapp.com',
  projectId: 'we-sopt-29-server',
  storageBucket: 'we-sopt-29-server.appspot.com',
  messagingSenderId: '282017285071',
  appId: '1:282017285071:web:77061345cab3a70a5888ba',
  measurementId: 'G-YEC9W65TGW',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };

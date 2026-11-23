
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAM46vIUxHxBAxegr_aZuc79W5Wzjl2Rp8",
    authDomain: "helplink-13c9f.firebaseapp.com",
    projectId: "helplink-13c9f",
    storageBucket: "helplink-13c9f.firebasestorage.app",
    messagingSenderId: "850194472995",
    appId: "1:850194472995:web:73b209fcb035023e3f9196",
    measurementId: "G-6N54EVL8RK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALTDuvLl-0Bsu6qWNxCrSilbKnBpKcM-Q",
  authDomain: "event-horizon-f4f89.firebaseapp.com",
  projectId: "event-horizon-f4f89",
  storageBucket: "event-horizon-f4f89.appspot.com",
  messagingSenderId: "248110941196",
  appId: "1:248110941196:web:0c626f9781ec4bbfd51a29",
  measurementId: "G-DJEPT85TH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
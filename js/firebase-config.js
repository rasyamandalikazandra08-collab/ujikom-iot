// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2pj1J1jFfjlBeeCZQEV9JTOBENQ_t0aA",
  authDomain: "tugasss-821ba.firebaseapp.com",
  projectId: "tugasss-821ba",
  storageBucket: "tugasss-821ba.firebasestorage.app",
  messagingSenderId: "876834704129",
  appId: "1:876834704129:web:8f69b296adc744cdcb6900",
  measurementId: "G-M9EESLJWY5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;

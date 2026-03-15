import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyDLkooDKMD-rItkYe3J6ichWRCG6mn1KF4",
authDomain: "projet-ecole-familial.firebaseapp.com",
projectId: "projet-ecole-familial",
storageBucket: "projet-ecole-familial.appspot.com",
messagingSenderId: "349833342586",
appId: "1:349833342586:web:9b84d2ac12eb0f04fcd5c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

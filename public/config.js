// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBomut_DNdDpWCWEpjIHNkg0qG_xH2PIso",
	authDomain: "item101-group-project.firebaseapp.com",
	projectId: "item101-group-project",
	storageBucket: "item101-group-project.firebasestorage.app",
	messagingSenderId: "1021250518859",
	appId: "1:1021250518859:web:8db509f974c8b4df49f2ce",
	measurementId: "G-XR3ME12XL2",
}

// Import Firebase SDK (assuming you're using a module system)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

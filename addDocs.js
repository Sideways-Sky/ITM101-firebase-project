// Import Firebase SDK (assuming you're using a module system)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"

// Your Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyBomut_DNdDpWCWEpjIHNkg0qG_xH2PIso",
	authDomain: "item101-group-project.firebaseapp.com",
	projectId: "item101-group-project",
	storageBucket: "item101-group-project.firebasestorage.app",
	messagingSenderId: "1021250518859",
	appId: "1:1021250518859:web:8db509f974c8b4df49f2ce",
	measurementId: "G-XR3ME12XL2",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Function to add a document from a JSON object to Firestore
async function addDocumentFromJSON(jsonObject, collectionName, docId) {
	try {
		const docRef = await addDoc(collection(db, collectionName, docId), jsonObject)
		console.log("Document written with ID: ", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}

// Sample JSON object
const sampleJson = {
	labrador: {
		healthyWeight: "55-80 lbs",
		behavioralPatterns: "Friendly, Active, Outgoing",
		trainingTips: "Positive reinforcement works best.",
		activityNeeds: "Moderate to high; daily walks are essential.",
		bestDiet: "High-quality protein-rich dog food.",
		avoid: "Avoid too much fat, as they tend to gain weight easily.",
	},
	germanShepherd: {
		healthyWeight: "50-90 lbs",
		behavioralPatterns: "Intelligent, Loyal, Protective",
		trainingTips: "Early socialization and firm training.",
		activityNeeds: "High; needs mental and physical stimulation.",
		bestDiet: "High-protein kibble, avoid fillers.",
		avoid: "Avoid over-exercising puppies as their joints are developing.",
	},
	bulldog: {
		healthyWeight: "40-50 lbs",
		behavioralPatterns: "Calm, Gentle, Loyal",
		trainingTips: "Short training sessions; they can be stubborn.",
		activityNeeds: "Low to moderate; enjoy lounging but need occasional walks.",
		bestDiet: "Moderate-calorie food to maintain weight.",
		avoid: "Avoid over-exercising in hot weather due to respiratory issues.",
	},
	beagle: {
		healthyWeight: "20-25 lbs",
		behavioralPatterns: "Friendly, Curious, Playful",
		trainingTips: "Positive reinforcement works best, they can be stubborn.",
		activityNeeds: "Moderate; loves to play and walk.",
		bestDiet: "High-quality dog food with a focus on meat-based proteins.",
		avoid: "Be cautious with portion control; they are prone to obesity.",
	},
	poodle: {
		healthyWeight: "Standard: 40-70 lbs; Miniature: 15-20 lbs; Toy: 4-6 lbs",
		behavioralPatterns: "Intelligent, Active, Alert",
		trainingTips: "Highly trainable; enjoys learning new tricks.",
		activityNeeds: "Moderate to high; loves both mental and physical stimulation.",
		bestDiet: "High-protein food, as they are very active.",
		avoid: "Avoid overly fatty foods to prevent obesity, especially in smaller poodles.",
	},
	goldenRetriever: {
		healthyWeight: "55-75 lbs",
		behavioralPatterns: "Friendly, Intelligent, Devoted",
		trainingTips: "Eager to please, easy to train.",
		activityNeeds: "High; loves outdoor activities and playing.",
		bestDiet: "High-quality kibble with chicken or beef protein.",
		avoid: "Be cautious of excessive treats, as they can become overweight.",
	},
	dachshund: {
		healthyWeight: "8-32 lbs (depends on size)",
		behavioralPatterns: "Curious, Stubborn, Playful",
		trainingTips: "Positive reinforcement, but they can be independent.",
		activityNeeds: "Moderate; daily walks and playtime are necessary.",
		bestDiet: "High-protein diet to maintain a healthy weight.",
		avoid: "Avoid overfeeding; they are prone to back problems.",
	},
	chihuahua: {
		healthyWeight: "2-6 lbs",
		behavioralPatterns: "Alert, Lively, Bold",
		trainingTips: "Can be stubborn, but responds well to positive training.",
		activityNeeds: "Low; short daily walks are enough.",
		bestDiet: "High-quality small-breed dog food.",
		avoid: "Avoid overfeeding, as they have a small stomach capacity.",
	},
	husky: {
		healthyWeight: "35-60 lbs",
		behavioralPatterns: "Energetic, Independent, Friendly",
		trainingTips: "Firm but patient training works best, they can be stubborn.",
		activityNeeds: "High; they need a lot of exercise and mental stimulation.",
		bestDiet: "High-protein, moderate-fat diet with high fiber.",
		avoid: "Avoid overexercising in hot weather; they are prone to overheating.",
	},
	boxer: {
		healthyWeight: "50-70 lbs",
		behavioralPatterns: "Playful, Energetic, Loyal",
		trainingTips: "Patient and consistent training methods are best.",
		activityNeeds: "High; loves to play and run.",
		bestDiet: "High-protein food to match their energy levels.",
		avoid: "Avoid high-fat diets, as they are prone to obesity.",
	},
	frenchBulldog: {
		healthyWeight: "16-28 lbs",
		behavioralPatterns: "Affectionate, Playful, Calm",
		trainingTips: "Can be stubborn, but they respond well to consistency.",
		activityNeeds: "Low to moderate; they enjoy lounging but still need some playtime.",
		bestDiet: "Moderate-calorie diet to maintain their weight.",
		avoid: "Avoid heavy exercise in hot weather as they are prone to breathing problems.",
	},
	rottweiler: {
		healthyWeight: "80-135 lbs",
		behavioralPatterns: "Confident, Protective, Loyal",
		trainingTips: "Early socialization and firm training are essential.",
		activityNeeds: "High; requires daily exercise and mental stimulation.",
		bestDiet: "High-quality protein-rich dog food.",
		avoid: "Avoid over-exercising puppies as their joints are still developing.",
	},
	shihTzu: {
		healthyWeight: "9-16 lbs",
		behavioralPatterns: "Affectionate, Friendly, Playful",
		trainingTips: "They respond well to gentle training and positive reinforcement.",
		activityNeeds: "Low to moderate; enjoy short walks and indoor play.",
		bestDiet: "High-quality small-breed dog food.",
		avoid: "Avoid overfeeding, as they are prone to weight gain.",
	},
	borderCollie: {
		healthyWeight: "30-45 lbs",
		behavioralPatterns: "Intelligent, Energetic, Loyal",
		trainingTips: "Highly trainable; they excel with positive reinforcement and mental challenges.",
		activityNeeds: "Very high; needs constant mental and physical stimulation.",
		bestDiet: "High-protein diet with a balance of healthy fats.",
		avoid: "Avoid boredom, as they can become destructive.",
	},
	greatDane: {
		healthyWeight: "110-175 lbs",
		behavioralPatterns: "Gentle, Calm, Loyal",
		trainingTips: "They respond well to calm and consistent training.",
		activityNeeds: "Moderate; daily walks and some playtime are necessary.",
		bestDiet: "High-quality large-breed dog food to support joint health.",
		avoid: "Avoid strenuous exercise until they are fully grown to protect joints.",
	},
	pug: {
		healthyWeight: "14-18 lbs",
		behavioralPatterns: "Playful, Affectionate, Stubborn",
		trainingTips: "Positive reinforcement works best, but they can be a bit stubborn.",
		activityNeeds: "Moderate; short walks and indoor play are usually enough.",
		bestDiet: "High-quality food to maintain a healthy weight.",
		avoid: "Avoid excessive heat and strenuous exercise due to respiratory issues.",
	},
	cockerSpaniel: {
		healthyWeight: "20-30 lbs",
		behavioralPatterns: "Affectionate, Intelligent, Playful",
		trainingTips: "They respond well to positive reinforcement.",
		activityNeeds: "Moderate to high; they enjoy both physical and mental stimulation.",
		bestDiet: "High-quality, well-balanced diet for their size and energy levels.",
		avoid: "Avoid feeding too many treats, as they can gain weight easily.",
	},
	bostonTerrier: {
		healthyWeight: "12-25 lbs",
		behavioralPatterns: "Friendly, Alert, Playful",
		trainingTips: "They respond well to consistent, gentle training.",
		activityNeeds: "Moderate; enjoy daily walks and short play sessions.",
		bestDiet: "High-quality small-breed dog food.",
		avoid: "Avoid overheating, as they are prone to respiratory problems.",
	},
	pomeranian: {
		healthyWeight: "3-7 lbs",
		behavioralPatterns: "Bold, Intelligent, Lively",
		trainingTips: "Positive reinforcement is key; they enjoy learning new tricks.",
		activityNeeds: "Moderate; they enjoy indoor play and short outdoor walks.",
		bestDiet: "Small-breed dog food with high protein content.",
		avoid: "Avoid overfeeding as they can gain weight easily.",
	},
	pitbull: {
		healthyWeight: "30-60 lbs",
		behavioralPatterns: "Loyal, Confident, Playful",
		trainingTips: "Firm but loving training works best for them.",
		activityNeeds: "Moderate to high; they love to play and require exercise.",
		bestDiet: "High-quality, protein-rich food.",
		avoid: "Avoid over-exercising in hot weather as they can overheat.",
	},
	akita: {
		healthyWeight: "70-130 lbs",
		behavioralPatterns: "Loyal, Independent, Courageous",
		trainingTips: "Firm and consistent training; they can be stubborn.",
		activityNeeds: "Moderate to high; needs regular walks and mental stimulation.",
		bestDiet: "High-quality protein-rich dog food.",
		avoid: "Avoid harsh training methods; they can become headstrong.",
	},
	cavalierKingCharlesSpaniel: {
		healthyWeight: "13-18 lbs",
		behavioralPatterns: "Affectionate, Gentle, Playful",
		trainingTips: "Responds well to positive reinforcement.",
		activityNeeds: "Low to moderate; enjoys walks and indoor play.",
		bestDiet: "Small-breed dog food, rich in protein and healthy fats.",
		avoid: "Avoid overfeeding, as they can gain weight easily.",
	},
	samoyed: {
		healthyWeight: "50-60 lbs",
		behavioralPatterns: "Friendly, Playful, Sociable",
		trainingTips: "Gentle, consistent training works best.",
		activityNeeds: "High; loves outdoor activities and exercise.",
		bestDiet: "High-quality, balanced diet rich in proteins.",
		avoid: "Avoid long periods in hot weather as they are prone to overheating.",
	},
	chowChow: {
		healthyWeight: "45-70 lbs",
		behavioralPatterns: "Independent, Aloof, Loyal",
		trainingTips: "Early socialization and consistent training are essential.",
		activityNeeds: "Moderate; they enjoy walks and mental stimulation.",
		bestDiet: "High-quality protein-rich food.",
		avoid: "Avoid over-exercising in the heat, as they are prone to overheating.",
	},
	bassetHound: {
		healthyWeight: "40-65 lbs",
		behavioralPatterns: "Affectionate, Calm, Stubborn",
		trainingTips: "Patience is key; they respond well to positive reinforcement.",
		activityNeeds: "Low to moderate; short walks and playtime are sufficient.",
		bestDiet: "High-quality dog food, ideally with high protein and low fat.",
		avoid: "Avoid overfeeding as they are prone to obesity.",
	},
}

// Call the function with the JSON object and Firestore collection name

for (const breed in sampleJson) {
	addDocumentFromJSON(sampleJson[breed], "dogbreeds", breed)
}

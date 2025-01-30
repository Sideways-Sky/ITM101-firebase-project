// Sample data for dog breeds (can be replaced with an actual API or database query)
const dogBreedsData = {
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
}
// Get references to DOM elements
const breedSearchInput = document.getElementById("breedSearch")
const searchButton = document.getElementById("searchButton")
const healthyWeight = document.getElementById("healthyWeight")
const behavioralPatterns = document.getElementById("behavioralPatterns")
const trainingTips = document.getElementById("trainingTips")
const activityNeeds = document.getElementById("activityNeeds")
const bestDiet = document.getElementById("bestDiet")
const avoid = document.getElementById("avoid")

// Function to display breed information
function displayBreedInfo(breed) {
	const breedInfo = dogBreedsData[breed.toLowerCase()]

	if (breedInfo) {
		healthyWeight.textContent = breedInfo.healthyWeight
		behavioralPatterns.textContent = breedInfo.behavioralPatterns
		trainingTips.textContent = breedInfo.trainingTips
		activityNeeds.textContent = breedInfo.activityNeeds
		bestDiet.textContent = breedInfo.bestDiet
		avoid.textContent = breedInfo.avoid
	} else {
		// If breed is not found, display a message
		healthyWeight.textContent = "Breed not found."
		behavioralPatterns.textContent = "Breed not found."
		trainingTips.textContent = "Breed not found."
		activityNeeds.textContent = "Breed not found."
		bestDiet.textContent = "Breed not found."
		avoid.textContent = "Breed not found."
	}
}

// Add event listener to the search button
searchButton.addEventListener("click", function () {
	const breed = breedSearchInput.value.trim()
	if (breed) {
		displayBreedInfo(breed)
	} else {
		alert("Please enter a dog breed.")
	}
})

// Optional: Handle pressing Enter key to trigger search
breedSearchInput.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		searchButton.click()
	}
})

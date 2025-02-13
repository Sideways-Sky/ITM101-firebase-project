// Initialize Firebase

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
	const breedInfo = db.collection("dogbreeds").where("id", "==", breed).get()

	console.log(breedInfo)

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

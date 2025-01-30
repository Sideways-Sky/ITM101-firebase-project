let dogs = [] // Array to store dog information

// Function to add a dog
function addDog() {
	const dogName = prompt("What is the name of your dog?")
	if (!dogName) return alert("Dog name is required.")

	const formattedName = dogName.trim().charAt(0).toUpperCase() + dogName.trim().slice(1)
	const foodQuantity = prompt(`How much food does ${formattedName} eat (e.g., 2 cups)?`)
	if (!foodQuantity) return alert("Food quantity is required.")

	const sameSchedule = confirm(`Do you want the same feeding schedule as other dogs?`)
	const dog = {
		name: formattedName,
		food: foodQuantity.trim(),
		reminders: [],
	}

	if (sameSchedule) {
		if (dogs.length > 0) {
			dog.reminders = [...dogs[0].reminders] // Copy reminders from the first dog
			alert(`Same schedule set for ${formattedName}.`)
			dogs.push(dog)
			renderDogs()
		} else {
			alert("No existing schedules to copy. Let's set one for this dog.")
			setDogReminders(dog)
		}
	} else {
		setDogReminders(dog)
	}
}

// Function to set reminders for a dog
function setDogReminders(dog) {
	const numReminders = parseInt(prompt(`How many reminders would you like to set for ${dog.name}?`), 10)

	if (isNaN(numReminders) || numReminders <= 0) {
		return alert("Please enter a valid number greater than 0.")
	}

	for (let i = 0; i < numReminders; i++) {
		const time = prompt(`Enter time for reminder #${i + 1} (in HH:MM AM/PM format):`)
		const timeRegex = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i

		const match = time.match(timeRegex)
		if (!match) {
			alert("Invalid time format. Please enter time in HH:MM AM/PM format (e.g., 2:30 PM).")
			i--
			continue
		}

		let [_, hours, minutes, period] = match
		hours = parseInt(hours, 10)
		minutes = parseInt(minutes, 10)

		if (period.toUpperCase() === "PM" && hours !== 12) hours += 12
		if (period.toUpperCase() === "AM" && hours === 12) hours = 0

		dog.reminders.push({ hours, minutes })
	}

	dogs.push(dog)
	renderDogs()
}

// Function to render dogs and their schedules
function renderDogs() {
	const dogList = document.getElementById("dog-list")
	dogList.innerHTML = "" // Clear existing dogs

	dogs.forEach((dog, index) => {
		const dogItem = document.createElement("div")
		dogItem.classList.add("dog-item")
		dogItem.innerHTML = `
            <h3>${dog.name} (${dog.food})</h3>
            <ul>
                ${dog.reminders
									.map((reminder) => {
										const reminderTime = new Date()
										reminderTime.setHours(reminder.hours, reminder.minutes)
										return `<li>${reminderTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}</li>`
									})
									.join("")}
            </ul>
            <button onclick="deleteDog(${index})">Delete</button>
        `
		dogList.appendChild(dogItem)
	})
}

// Function to delete a dog
function deleteDog(index) {
	dogs.splice(index, 1)
	renderDogs()
}

// Function to initialize
function initialize() {
	document.getElementById("add-dog-button").addEventListener("click", addDog)
}

// Run initialization
initialize()

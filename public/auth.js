import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"

export const provider = new GoogleAuthProvider()
export const auth = getAuth(app)
auth.language = "en"
const user = auth.currentUser
const googleLogout = document.getElementById("google-logout-btn")
const signOutMessage = document.getElementById("sign-out-message")

googleLogout.addEventListener("click", handleSignOut)
const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click", handleSignIn)

// Listen for changes in the user's authentication state
onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, update the user profile
		updateUserProfile(user)
		// Fetch projects after the user logs in
		fetchProjects()
		signOutMessage.innerText = ""
		document.getElementById("google-logout-btn").style.display = "block"
		document.getElementById("google-login-btn").style.display = "none"
		document.getElementById("userProfilePicture").style.display = "block"
	} else {
		// No user is signed in, clear the projects list
		document.getElementById("google-logout-btn").style.display = "none"
		document.getElementById("google-login-btn").style.display = "block"
		document.getElementById("userProfilePicture").style.display = "none"
		projectsList.innerHTML = ""
		clearUserInfo()
		displayLoginMessage()
		console.log("No user signed in")
	}
})

async function handleSignOut() {
	try {
		await signOut(auth)
		// Clear the projects list on sign out
		projectsList.innerHTML = ""
		clearUserInfo()
		displayLoginMessage()
		signOutMessage.innerText = "You have been successfully signed out."
	} catch (error) {
		signOutMessage.innerText = "An error occurred during sign-out."
		console.error(error)
	}
}

function displayLoginMessage() {
	// Display a message prompting the user to log in
	signOutMessage.innerText = "Please log in to access your projects."
}

function clearUserInfo() {
	// Clear user information
	document.getElementById("userName").textContent = ""
	document.getElementById("userEmail").textContent = ""
	document.getElementById("userProfilePicture").src = ""
}

async function handleSignIn() {
	try {
		const result = await signInWithPopup(auth, provider)
		const credential = GoogleAuthProvider.credentialFromResult(result)
		const token = credential.accessToken
		const user = result.user

		updateUserProfile(user)
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		const credential = GoogleAuthProvider.credentialFromError(error)
		console.error(errorCode, errorMessage, credential)
	}
}

function updateUserProfile(user) {
	const userName = user.displayName
	const userEmail = user.email
	const userProfilePicture = user.photoURL

	document.getElementById("userName").textContent = userName
	document.getElementById("userEmail").textContent = userEmail
	document.getElementById("userProfilePicture").src = userProfilePicture
}

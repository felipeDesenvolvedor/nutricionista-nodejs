import React from "react"
import Routes from "./Routes"
import firebase from "firebase/app"
import "firebase/firestore"
// import PacientesLista from "./components/PacientesLista/PacientesLista"

function App() {

	const firebaseConfig = {
		apiKey: "AIzaSyAJEciQYs_1Qop9MZTvMA8Z5kVh39cZ1YA",
		authDomain: "orangenutri-91bff.firebaseapp.com",
		projectId: "orangenutri-91bff",
		storageBucket: "orangenutri-91bff.appspot.com",
		messagingSenderId: "768344951920",
		appId: "1:768344951920:web:de21f9210317b10c0e38b5", 
		measurementId: "G-RCBV4SFYYT"
	}

	firebase.initializeApp(firebaseConfig)
	console.log(firebase.firestore())

	return (
		<>
			<Routes /> 
		</>
	)
}

export default App

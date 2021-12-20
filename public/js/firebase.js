let firebaseConfig = {
	// Enter your firebase credentials
	apiKey: "AIzaSyAZZ3vCRAuFU-tADOJ1bNzeeS-4bU1E-h0",
	authDomain: "blog-modern-web.firebaseapp.com",
	projectId: "blog-modern-web",
	storageBucket: "blog-modern-web.appspot.com",
	messagingSenderId: "463525868020",
	appId: "1:463525868020:web:8268e473af7fda349e89a1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
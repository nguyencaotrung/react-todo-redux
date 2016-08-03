import firebase from 'firebase';
try {
		var config = {
	    apiKey: "AIzaSyB1QVxqjbYGhNkhWsjmiRGzS4BBi2ZgZbQ",
	    authDomain: "trung-todo-app.firebaseapp.com",
	    databaseURL: "https://trung-todo-app.firebaseio.com",
	    storageBucket: "trung-todo-app.appspot.com",
	};

	firebase.initializeApp(config);
} catch (e) {
	
}

export var firebaseRef = firebase.database().ref();
export default firebase;
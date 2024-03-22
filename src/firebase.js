import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCbqWYrs8nzMTNKMwRhej37EN6EYAPSRIs',
	authDomain: 'todos-a2093.firebaseapp.com',
	projectId: 'todos-a2093',
	storageBucket: 'todos-a2093.appspot.com',
	messagingSenderId: '1092726749199',
	appId: '1:1092726749199:web:ac5d3ba8f72209f2454b7a',
	databaseURL: 'https://todos-a2093-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

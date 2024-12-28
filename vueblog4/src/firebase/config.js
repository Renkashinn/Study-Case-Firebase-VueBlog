import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOyIVFSeYpOej81Kh-hO6G49bWkDexGhg",
  authDomain: "vueblog-42442.firebaseapp.com",
  projectId: "vueblog-42442",
  storageBucket: "vueblog-42442.appspot.com",
  messagingSenderId: "282231590955",
  appId: "1:282231590955:web:507565e98d3283bcdbda6e"
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);

export { projectFirestore };
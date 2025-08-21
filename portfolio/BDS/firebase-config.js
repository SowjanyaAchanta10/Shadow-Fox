// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Shortcuts
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Enable offline persistence
  db.enablePersistence()
    .catch((err) => {
      console.error("Firebase offline persistence error: ", err);
    });
  
  // Authentication state listener
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("User logged in:", user.email);
    } else {
      console.log("User logged out");
    }
  });
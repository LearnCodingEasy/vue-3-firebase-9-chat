// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import Auth
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC4dVV7th7DakkXrHR1wKOo0-yQU3phxI",
  authDomain: "vue-3-firebase-9-chat.firebaseapp.com",
  projectId: "vue-3-firebase-9-chat",
  storageBucket: "vue-3-firebase-9-chat.appspot.com",
  messagingSenderId: "136579402640",
  appId: "1:136579402640:web:a75fed9752e8967ce24115",
  measurementId: "G-KHXGJGHL78",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//
import { ref, onUnmounted, computed } from "vue";

// Call Object From The Firebase To Initialize Services ( Auth )
const auth = getAuth();

export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);
  const signIn = async () => {
    const googleProvider = new auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();
  return { user, isLogin, signIn, signOut };
}

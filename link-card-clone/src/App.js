import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTk4y6h8cmmbRpVMN_9QOqfzt9KH_ubNE",
  authDomain: "linkcardclone.firebaseapp.com",
  projectId: "linkcardclone",
  storageBucket: "linkcardclone.appspot.com",
  messagingSenderId: "971633544579",
  appId: "1:971633544579:web:ee306b3a743952b154fab6",
  measurementId: "G-SWYB0T7BQ2"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default App;

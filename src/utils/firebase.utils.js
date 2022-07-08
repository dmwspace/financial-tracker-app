import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC-3UtfTK-Er9Z0wS_d96aXltt5YUUyzvQ",
    authDomain: "financial-tracker-f5a53.firebaseapp.com",
    projectId: "financial-tracker-f5a53",
    storageBucket: "financial-tracker-f5a53.appspot.com",
    messagingSenderId: "940742504890",
    appId: "1:940742504890:web:44b2449da83ba607fcad83",
    measurementId: "G-ZQ0V6BYN10"   
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

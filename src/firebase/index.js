import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhiUowy9TCvmDO0uv_x1ItVaQC6zG61fs",
    authDomain: "log-page-16b1d.firebaseapp.com",
    projectId: "log-page-16b1d",
    storageBucket: "log-page-16b1d.appspot.com",
    messagingSenderId: "364324942612",
    appId: "1:364324942612:web:937bee23e87d98cb488801"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
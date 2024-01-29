// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3o7UmipWfaI_N-qxMvbqpfHfZXCbPO1M",
  authDomain: "react-clone-netflix-ba5a7.firebaseapp.com",
  projectId: "react-clone-netflix-ba5a7",
  storageBucket: "react-clone-netflix-ba5a7.appspot.com",
  messagingSenderId: "112193548979",
  appId: "1:112193548979:web:911f527ba3da9d4977f6c6",
  measurementId: "G-GZGMWRN53S"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
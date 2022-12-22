import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable,connectFunctionsEmulator } from 'firebase/functions';
import { Analytics, getAnalytics } from "firebase/analytics";

const ipHost:string = process.env.PORT as string;

export const firebaseConfig = {
  apiKey: "AIzaSyB_KdL9aq8Gy1yBzbOfYS0PNWR04bQfG5Q",
  authDomain: "paseoslanchasyatesacapulco.firebaseapp.com",
  projectId: "paseoslanchasyatesacapulco",
  storageBucket: "paseoslanchasyatesacapulco.appspot.com",
  messagingSenderId: "426872596259",
  appId: "1:426872596259:web:4015c93e60179237698e96",
  measurementId: "G-38D4E7SFEB"
};

//INICIALIZACION DEL PROYECTO DE FIREBAS
const app = initializeApp(firebaseConfig);
//Inicializacion de los recursos
const db:Firestore =  getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const initFunctions = getFunctions(app)
let analytics:Analytics = getAnalytics(app); 

// , analytics
//Verificamos que estamos en local para no dañar cosas de en produccion xD
if (process.env.DEVELOPMENT === 'true') {
	//Cambiar Ip en la variable de ntorno REACT_APP_IP_HOST
	connectFirestoreEmulator(getFirestore(app),ipHost, 8089)
	//connectStorageEmulator(getStorage(app),ipHost, 9199);
	//El auth funciona diferente, ve la mamada xD 
	connectAuthEmulator(getAuth(app),"http://"+ipHost+":9099" )
	//
	connectFunctionsEmulator(initFunctions, ipHost, 5009)
	
}

const functions = (location:string,data:any)=>httpsCallable(initFunctions, location)(data)

/**
 * "auth":9099,
 * "functions":5009,
 * "hosting":3010,
 * "firestore":8089,
 */

export { db, auth, storage, analytics, functions };

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJ21CrvvdXm6jJVdn7yEruzgRTyNwNxBQ",
    authDomain: "crown-clothing-db-aa6ed.firebaseapp.com",
    projectId: "crown-clothing-db-aa6ed",
    storageBucket: "crown-clothing-db-aa6ed.appspot.com",
    messagingSenderId: "604611481174",
    appId: "1:604611481174:web:da8ecee3e41f136303f5f7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export {auth, provider};
/*
provider.setCustomParameters({
    prompt: "select-account",
})

export const auth = getAuth();*/

// explanations on videos 94 & 95
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot); // still false

    // if user doesnt exist, create a new doc
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth; // destructure the uA object
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt});
        }catch(error){
            console.log('error creating the user: ',error );
        }
    }

    return userDocRef;
}


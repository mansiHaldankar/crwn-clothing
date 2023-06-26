import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } 
from 'firebase/auth';

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
  } 
  from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO-B33bTnGWa2klWoRaxnPyENRLRK2hCA",
  authDomain: "crwn-clothing-767b3.firebaseapp.com",
  projectId: "crwn-clothing-767b3",
  storageBucket: "crwn-clothing-767b3.appspot.com",
  messagingSenderId: "866436923680",
  appId: "1:866436923680:web:e677d72398f96376141745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };

export const getCategoriesAndDocument = async() => {
    const categoriesRef = collection(db, 'categories');
    const q = query(categoriesRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()]= items;
        return acc;
    }, {});
    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        }
        catch(error){
            console.log("Error occured during sign in", error.message)
        }
    }

    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth);

export const authStateChangedListner = (callback) => onAuthStateChanged(auth, callback);
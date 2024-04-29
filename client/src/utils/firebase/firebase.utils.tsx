// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAzTBcZloibJ9ah_JqDtJJ-tU2hfyh4cs0',
//   authDomain: 'crown-cothing.firebaseapp.com',
//   projectId: 'crown-cothing',
//   storageBucket: 'crown-cothing.appspot.com',
//   messagingSenderId: '559192747284',
//   appId: '1:559192747284:web:a9b354c8dda4237e542601',
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth(firebaseApp);
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = { displayName: '' }
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, 'users', userAuth.uid);

//   console.log(userDocRef);

//   const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
//   console.log(userSnapshot.exists());

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log('error creating the user', error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

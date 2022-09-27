import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import GetFirebaseConfig from './firebase-config';

// Initialize Firebase and get firestore reference
const app = initializeApp(GetFirebaseConfig());
const firestore = getFirestore(app);

// Saves a new message to Cloud Firestore.
const SaveMessage = async (clientInfo) => {
  // Initialize reCAPTCHA check
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.REACT_APP_SITE_KEY_PROD),
    isTokenAutoRefreshEnabled: true
  });

  // Generate a custom ID for new client in case of identical names
  const customId = Math.random().toString(36).slice(2);
  const newDoc = doc(
    firestore,
    'TR-client-contact',
    `${clientInfo.name} (${customId})`
  );
  await setDoc(newDoc, {
    name: clientInfo.name,
    email: clientInfo.email,
    message: clientInfo.message,
    timestamp: serverTimestamp()
  })
    .then(() => {
      // Confirmation message -- to be replaced by CSS animation
      alert(
        'Thank you for your submission! We\'ll reach out as soon as possible!'
      );
      window.location.reload(); // Clears form after receiving data
    })
    .catch((error) => {
      // Confirmation message -- to be replaced by CSS animation
      alert('Oops, something went wrong! Please try again later.');
      console.error('Error writing new message to Firebase Database', error);
    });
};

export default SaveMessage;

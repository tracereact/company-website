// Firebase config for Tracecms
const config = {
  apiKey: 'AIzaSyDu1p5qkAQFyIYwTK-_S-kUjn0BsYnMZ0Y',
  authDomain: 'tracecms-8c5fd.firebaseapp.com',
  databaseURL: 'https://tracecms-8c5fd-default-rtdb.firebaseio.com',
  projectId: 'tracecms-8c5fd',
  storageBucket: 'tracecms-8c5fd.appspot.com',
  messagingSenderId: '611887655199',
  appId: '1:611887655199:web:3f4c53925e2a45bb74682a',
  measurementId: 'G-JCV32H2P4Q',
};

const GetFirebaseConfig = () => {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.\nAdd the proper configurations.'
    );
  } else {
    return config;
  }
};

export default GetFirebaseConfig;

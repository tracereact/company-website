// Firebase config for Tracecms
const config = {
  apiKey: 'AIzaSyCuh1HidVL4y2PDQmbKYSmNWspNFN5Atvk',
  authDomain: 'tracereact.firebaseapp.com',
  databaseURL: 'https://tracereact-default-rtdb.firebaseio.com',
  projectId: 'tracereact',
  storageBucket: 'tracereact.appspot.com',
  messagingSenderId: '326927264632',
  appId: '1:326927264632:web:6fa20eb9b316af1679368d',
  measurementId: 'G-X0RPGMDGWC'
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

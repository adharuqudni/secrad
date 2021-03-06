import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID  } = publicRuntimeConfig;

const { apiKey } = JSON.parse(NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY);

const FirebaseCredentials = {
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID
}
// if a Firebase instance doesn't exist, create one
if (!firebase?.apps.length) {
  firebase.initializeApp({...FirebaseCredentials, apiKey: apiKey})
}

export default firebase;
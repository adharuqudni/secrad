import admin from 'firebase-admin';
import serviceAccount from './secret_key.js';
console.log(serviceAccount);
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert((serviceAccount))
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();
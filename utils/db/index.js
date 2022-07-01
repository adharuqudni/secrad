import admin from 'firebase-admin';
import serviceAccount from './secret_key.js';

const { privateKey } = JSON.parse(serviceAccount.private_key);
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({...serviceAccount, privateKey: privateKey})
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();
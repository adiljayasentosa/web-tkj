/* Firebase integration scaffold only. No Firebase project/config is included yet.
   When integrating, use Firebase Authentication and enforce role checks in Firestore Rules.
   Never store passwords or trust a role supplied by a browser form/localStorage. */
export const FIREBASE_READY=false;
export function assertFirebaseConfigured(){if(!FIREBASE_READY)throw new Error('Firebase belum dikonfigurasi. Aplikasi saat ini berjalan dalam mode data lokal/pratinjau.');}

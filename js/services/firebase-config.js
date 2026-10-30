/*
 * KONFIGURASI FIREBASE WEB
 * Isi nilai dari Firebase Console > Project settings > Your apps > Web app.
 *
 * Firebase Web API key biasanya terlihat di browser; itu bukan password.
 * Jangan pernah menaruh service-account private key di file frontend ini.
 * Keamanan data tetap wajib diatur dengan Firebase Authentication dan Firestore Rules.
 */
export const firebaseConfig = {
  apiKey: "ISI_API_KEY_FIREBASE_DI_SINI",
  authDomain: "ISI_PROJECT_ID.firebaseapp.com",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_STORAGE_BUCKET",
  messagingSenderId: "ISI_MESSAGING_SENDER_ID",
  appId: "ISI_APP_ID"
};

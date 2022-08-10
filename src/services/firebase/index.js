import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCiO-bf1AsNrjz8IYOuFKeQRbKKo7-Uxo',
  authDomain: 'my-pokedex-946e3.firebaseapp.com',
  databaseURL: 'https://my-pokedex-946e3-default-rtdb.firebaseio.com',
  projectId: 'my-pokedex-946e3',
  storageBucket: 'my-pokedex-946e3.appspot.com',
  messagingSenderId: '496632049120',
  appId: '1:496632049120:web:92a925d46b8823f6a3cf85',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

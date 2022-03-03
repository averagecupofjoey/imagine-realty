// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-iGjbKtyV6BkbcxbK6ibRR2K_mr5iB_c',
  authDomain: 'imagine-realty.firebaseapp.com',
  projectId: 'imagine-realty',
  storageBucket: 'imagine-realty.appspot.com',
  messagingSenderId: '7215151175',
  appId: '1:7215151175:web:ba7182c2469cf3db245962',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

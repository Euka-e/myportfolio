import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ "projectId": "miportfolio-8355b", "appId": "1:463362972108:web:bb75fa4616161519556569", "storageBucket": "miportfolio-8355b.appspot.com", "apiKey": "AIzaSyBvsHCRGKLqrvJScRR0x1QPgJlUyk7XD0M", "authDomain": "miportfolio-8355b.firebaseapp.com", "messagingSenderId": "463362972108", "measurementId": "G-P3DLGDGEDD" })), provideFirestore(() => getFirestore())]
};

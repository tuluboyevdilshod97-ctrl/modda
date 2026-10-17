import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FirebaseProvider } from './components/FirebaseProvider.tsx';
import { preWarmAndDecodeImages } from './utils/imagePreloader.ts';

// Kick off off-thread image pre-fetching and async decoding immediately
preWarmAndDecodeImages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </StrictMode>,
);

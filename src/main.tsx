import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/store-provider';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </StoreProvider>,
);

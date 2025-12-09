import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemProvider } from './components/ThemProvider.jsx';
import './index.css';
import { MainRoutes } from './MainRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemProvider>
      <MainRoutes />
    </ThemProvider>
  </StrictMode>
);

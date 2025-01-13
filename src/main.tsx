import React from 'react';
import { createRoot } from 'react-dom/client';
import  App  from './App';

// Aseguramos que el elemento con id 'app' existe y es un contenedor de tipo HTMLDivElement
const rootElement = document.getElementById('app') as HTMLElement;

const root = createRoot(rootElement);

root.render(<App />);

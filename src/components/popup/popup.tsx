import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
// app/MyLayout.tsx
"use client"; // This directive makes the component client-side

import React from 'react';
import { Provider } from 'react-redux';
import store from '../app/dataManeger/glopalStore'; // Adjust the path as needed

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

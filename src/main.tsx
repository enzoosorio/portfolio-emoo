import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Hero from './app/Hero.tsx';
import { AboutMe } from './app/About-me.tsx';
import RootLayout from './app/RootLayout.tsx';

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Hero,
      },
      {
        path: "/about-me",
        Component: AboutMe,
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

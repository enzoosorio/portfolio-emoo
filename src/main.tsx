import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate
} from "react-router";
import Hero from './app/Hero.tsx';
import { AboutMe } from './app/About-me.tsx';
import RootLayout from './app/RootLayout.tsx';
import './i18n.ts'
import NotFound from './components/errors/notFound.tsx';
import { validateLang } from './lib/validateLang.ts';
import i18next from 'i18next';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/es" replace />,
  },
  {
    path: "/about-me",
    errorElement: <NotFound />,
    loader: () => {
      const currentLanguage = i18next.language
      return redirect(`/${currentLanguage}/about-me`);
    },
  },
 {
    path: "/:lang",
    errorElement: <NotFound />,
    loader: validateLang,
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Hero />,
        errorElement: <NotFound/>
       },
      { path: "about-me", 
        element: <AboutMe />,
        errorElement: <NotFound/>
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

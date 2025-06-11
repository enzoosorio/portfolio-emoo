import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router";
import Hero from './app/Hero.tsx';
import { AboutMe } from './app/About-me.tsx';
import RootLayout from './app/RootLayout.tsx';
import './i18n.ts'
import NotFound from './components/errors/notFound.tsx';
import { validateLang } from './lib/validateLang.ts';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    loader: () => {
      const userLang = navigator.language.startsWith("es") ? "es" : "en";
      return redirect(`/${userLang}`);
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

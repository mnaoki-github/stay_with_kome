import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router'

import App from './App.tsx'
import ErrorPage from './error/error-page.tsx';
import Index from './pages/index.tsx'
import About from './pages/about.tsx'
import News from './pages/news.tsx'
import Blog from './pages/blog.tsx'
import BlogArticle  from './component/blogArticle.tsx';

import './index.css'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Index />, 
      },
      {
        path:'about',
        element:<About />,
      },
      {
        path:'news',
        element:<News />,
      },
      {
        path:'blog',
        element:<Blog />,
      },
      {
        path:'blog/:blogId',
        element:<BlogArticle />,
      },
    ]
  },
],
{
  // react-router-dom v6 to v7
  // future: {
  //   v7_relativeSplatPath: true,
  //   v7_fetcherPersist: true,
  //   v7_normalizeFormMethod: true,
  //   v7_partialHydration: true,
  //   v7_skipActionErrorRevalidation: true,
  // },
  // setting for github pages
  basename:'/stay_with_kome',
},
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}
      // react-router-dom v6 to v7
      // future={{
      //   v7_startTransition: true,
      // }}
    />
  </StrictMode>
)
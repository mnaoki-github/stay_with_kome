import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

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
  // setting for github pages
  basename:'/stay_with_kome'
}
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

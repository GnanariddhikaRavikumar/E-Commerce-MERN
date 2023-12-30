import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Body from './Components/Body';
import ShopDetail from './Components/ShopDetail';



const root = ReactDOM.createRoot(document.getElementById('root'));

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
        
      },
      {
        path:'/shop/:shopid',
        element:<ShopDetail/>,
        
      },
    ],
    
  }
  
])

root.render(<RouterProvider router={approuter}></RouterProvider> );
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

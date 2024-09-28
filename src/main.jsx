import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Electronic from './Electronic.jsx';
import Laptop from './Laptop.jsx';
import Mobile from './Components/Navbar/Mobile.jsx';
import Tv from './Components/Navbar/Tv.jsx';
import Gaming from './Components/Navbar/Gaming.jsx';
import Appliances from './Components/Navbar/Appliances.jsx';
import Audios from './Audio.jsx';
import About from './Components/Footer/About.jsx';
import Contact from './Components/Footer/Contact.jsx';
import Clothes from './Components/Navbar/Clothes.jsx';
import Shoes from './Components/Navbar/Shoes.jsx';
import Furniture from './Components/Navbar/Furniture.jsx';
import Miscellaneous from './Components/Navbar/Miscellaneous.jsx';
import CartIcon from './Components/Navbar/CartIcon.jsx';
import { CartProvider } from './Components/Navbar/Cartcontext.jsx';
import Democart from './Components/Navbar/Democart.jsx';
import CheckoutPage from './Components/Navbar/CheckoutPage.jsx';
import Blog from './Components/Footer/Blog.jsx';
import PlaceOrderPage from './Components/Navbar/PlaceOderPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  
    children: [
      {
        path: "electronic",
        element: <Electronic />,
      },
      {
        path: "laptop",
        element: <Laptop />,
      },
      {
        path: "mobile",
        element: <Mobile />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "appliances",
        element: <Appliances />,
      },
      {
        path: "audio",
        element: <Audios />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "clothes",
        element: <Clothes />,
      },
      {
        path: "shoes",
        element: <Shoes />,
      },
      {
        path: "furniture",
        element: <Furniture />,
      },
      {
        path: "mis",
        element: <Miscellaneous />,
      },
      {
        path: "cart",
        element: <CartIcon />,
      },
      {
        path: "democart",
        element: <Democart />,
      },
      {
        path: "check",  
        element: <PlaceOrderPage />,
       
      },
      {
        path: "placeorderpage",  
        element: <CheckoutPage />,
       
      },



      {
        path: "blog",  
        element: <Blog />,
       
      },
     
     

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CartProvider>

    <RouterProvider router={router} />
   
    </CartProvider>
  </StrictMode>
);

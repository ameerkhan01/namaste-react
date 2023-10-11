import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu/RestuarantMenu';
import UserContext from './Components/UserContext';
import Cart from './Components/Cart/Cart';
import { Provider } from 'react-redux';
import appStore from './Components/Redux/appStore';

const Grocery = lazy(()=> import('./Components/Grocery/Grocery'));

const AppLayout = () => {

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const data = {
            name: 'Ameer khan'
        };

        setUserInfo(data.name)
    },[])

    return (
        <UserContext.Provider value={{ userName: userInfo, setUserInfo }}>
        <Provider store={appStore}>
            <div className='app'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:'/',
                element: <Body />
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element: <Contact />
            }, 
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>loading... for grocery</h1>}>
                        <Grocery />  
                    </Suspense> 
                )
            },
            {
                path:'/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)

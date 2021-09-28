import "../styles/globals.css";
import store from "@/store/store";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { AuthGuard } from "@/services/Auth/AuthGuard";
import { useEffect, useState } from "react";
import * as types from "@/store/actionTypes";
import TagManager from "react-gtm-module";
import { Navbar } from "@/components/Navigation/Navbar";
import Nav from "@/components/Navigation/Nav";
import AdminNav from "@/components/Navigation/AdminNav";
import BottomMenu from "@/components/Navigation/BottomMenu";
import { AdvancedFooter } from "@/components/Navigation/Footer";
import { useRouter } from "next/router";
import { protectedRoutes } from "./../config/config";
require("./../config/config.tsx");
import SideDrawer from '../components/Navigation/SiderDrawer'
import AdminSideDrawer from '../components/Navigation/AdminSideDrawer'
import BackDrop from "../components/Navigation/BackDrop"
import SiderDrawer from "../components/Navigation/SiderDrawer";
import { toggleSidebar } from "@/components/Layout/Sidebar";
import Dropdown from "../components/Navigation/Dropdown"


function MyApp(props: any) {
    // Initialize Google Tag Manager via react-gtm-module.
    if (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
        const tagManagerArgs = {
            gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
        };
        if (process.browser) {
            TagManager.initialize(tagManagerArgs);
        }
    }

    const url = useRouter()
   


    const router = useRouter();
    // Check if we're on a protected route.
    const isNoProtectedRoute = protectedRoutes.every((route) => {
        return !router.pathname.startsWith(route);
    });

    // Handle current user in redux.
    useEffect(() => {
        // Store current user if we have one.
        if (props.user) {
            store.dispatch({
                type: types.USER_LOADED,
                payload: props.user,
            });
            return;
        }
        // Dispatch user loading error if no user is present.
        store.dispatch({
            type: types.USER_LOADED_ERROR,
        });
    }, []);
    const [DrawIsOpen, setDrawIsOpen] = useState(false)
    const [isHovering, setisHovering ] = useState(false)

    const siderDrawerToggle = () => {
        setDrawIsOpen(!DrawIsOpen)
    }

    const backdropDrawer = () => {
        setDrawIsOpen(false)
    }

    const onMouseout = () => {
            setisHovering(false)
    }
   
    const onHover = () => {
       setisHovering(true)

    }

    let hovering;
    let backDrop;

    if (DrawIsOpen) {
        backDrop = <BackDrop clickBack={backdropDrawer} />
    }
    if(isHovering){
        hovering = <Dropdown />
    }
  

     if(url.pathname === "/user/login" || url.pathname === "/user/register"){
         return (

            <div style={{ height: '100%' }}>
            <Provider store={store}>
                
                <props.Component {...props.pageProps} />
            {/* {isNoProtectedRoute && <AdvancedFooter />} */}
               
            {isNoProtectedRoute}
            </Provider>
        </div>

         )
     }

      console.log(url.asPath)

      if(url.asPath  == "dashboard/home"){
        

        return (

            <div style={{ height: '100%' }}>
            <Provider store={store}>
                <AdminNav drawerClicked={siderDrawerToggle} hover={onHover} hoverout={onMouseout} />
                <AdminSideDrawer show={DrawIsOpen} />
                {hovering}
                 {backDrop}
               
 
                <props.Component {...props.pageProps} />
            {isNoProtectedRoute && <AdvancedFooter />}
               
            {isNoProtectedRoute}
            
            </Provider>
        </div>
 
         )

      }


     if(url.pathname === "/dashboard" || url.pathname  == "/dashboard/[pages]"){
        return (

           <div style={{ height: '100%' }}>
           <Provider store={store}>
               <AdminNav drawerClicked={siderDrawerToggle} hover={onHover} hoverout={onMouseout} />
               <AdminSideDrawer show={DrawIsOpen} />
               {hovering}
                {backDrop}
              

               <props.Component {...props.pageProps} />
               <BottomMenu/>
           {isNoProtectedRoute}
              
           {isNoProtectedRoute}
           </Provider>
       </div>

        )
    }
    return (
        
        <div style={{ height: '100%' }}>
            <Provider store={store}>
                <Nav drawerClicked={siderDrawerToggle} hover={onHover} hoverout={onMouseout}/>
                <SiderDrawer show={DrawIsOpen} />
                {hovering}
                {backDrop}
                
                <props.Component {...props.pageProps} />
            {isNoProtectedRoute && <AdvancedFooter />}
               
            {isNoProtectedRoute}
            </Provider>
        </div>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.object,
};

/**
 * Fetch some data server side before rendering the page client side.
 *
 * @param {object} context
 *   The context object.
 */
MyApp.getInitialProps = async ({ ctx }) => {
    const req = ctx.req;
    const pathname = ctx.pathname;
    const res = ctx.res;

    /**
     * Abort if one var is not present.
     * For example, the req obj will be undefined if we don't
     * have a page reload but a page switch via the Next Router.
     */
    if (!req || !pathname || !res) {
        return {};
    }

    const authenticator = new AuthGuard();
    return await authenticator.authenticateUser(req, res, pathname);
};

export default MyApp;

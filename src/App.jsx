import "aos/dist/aos.css";
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import './pages/globals.css'
import { persistor, store } from './redux'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import router from './routes/route';
import AOS from "aos";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { setToken } from "./utilities/axiosClient";
import { accessToken } from "./utilities/tokenClient";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function App() {
  const VITE_SITE_SUPABASE_URL = import.meta.env.VITE_SITE_SUPABASE_URL;
  const VITE_SITE_SUPABASE_API_KEY = import.meta.env.VITE_SITE_SUPABASE_API_KEY;
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_SITE_GOOGLE_CLIENT_ID;


  const supabaseClient = createClient(
    VITE_SITE_SUPABASE_URL,
    VITE_SITE_SUPABASE_API_KEY
  )

  useEffect(() => {
    async () => {
      AOS.init({
        once: true,
      });
      await setToken(localStorage.setItem(accessToken))
    }
  }, []);


  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </SessionContextProvider>
)
}

export default App

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
  RouterProvider,
} from "react-router-dom";
import router from './routes/route';
import AOS from "aos";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "@bitnoi.se/react-scheduler/dist/style.css";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}

export default App

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
  Routes,
  Route
} from "react-router-dom";
import router from './routes/route';
import AOS from "aos";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "@bitnoi.se/react-scheduler/dist/style.css";
import { setToken } from "./utilities/axiosClient";
import { accessToken } from "./utilities/tokenClient";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async () => {
      AOS.init({
        once: true,
      });
      await setToken(localStorage.setItem(accessToken))
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Router>
          <Routes>
            {privateRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Router> */}
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}

export default App

import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

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

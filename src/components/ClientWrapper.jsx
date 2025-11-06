"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { setToken } from "../utilities/axiosClient";
import { accessToken } from "../utilities/tokenClient";

export default function ClientWrapper({ children }) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   AOS.init({ once: true });
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    async () => {
      AOS.init({
        once: true,
      });
      await setToken(localStorage.setItem(accessToken));
    };
  }, []);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// export const createNoopStorage = () => {
//     return {
//         getItem(_key) {
//             return Promise.resolve(null);
//         },
//         setItem(_key, value) {
//             return Promise.resolve(value);
//         },
//         removeItem(_key) {
//             return Promise.resolve();
//         },
//     };
// };
// export const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// src/redux/storage.js
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("session") // ✅ only runs in browser
    : createNoopStorage();        // ✅ safe fallback on server

export default storage;

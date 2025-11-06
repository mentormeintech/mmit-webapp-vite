// import { toast } from 'react-toastify';

// export default function Alert(message, type) {
//     switch (type) {
//         case 'info':
//             toast.info(message, {
//                 position: toast.POSITION.TOP_RIGHT
//             });
//             break;
//         case 'success':
//             toast.success(message, {
//                 position: toast.POSITION.TOP_RIGHT
//             });
//             break;
//         case 'warning':
//             toast.warn(message, {
//                 position: toast.POSITION.TOP_RIGHT
//             })
//             break;
//         case 'error':
//             toast.error(message, {
//                 position: toast.POSITION.TOP_RIGHT
//             })
//             break;
//         case 'danger':
//             toast.error(message, {
//                 position: toast.POSITION.TOP_RIGHT
//             })
//             break;
//     }
// }

// import { toast, ToastPosition } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Alert(message, type) {
//   switch (type) {
//     case "info":
//       toast.info(message, { position: ToastPosition.TOP_RIGHT });
//       break;
//     case "success":
//       toast.success(message, { position: ToastPosition.TOP_RIGHT });
//       break;
//     case "warning":
//       toast.warn(message, { position: ToastPosition.TOP_RIGHT });
//       break;
//     case "error":
//     case "danger":
//       toast.error(message, { position: ToastPosition.TOP_RIGHT });
//       break;
//     default:
//       toast(message, { position: ToastPosition.TOP_RIGHT });
//   }
// }

import { toast } from "react-toastify";

export default function Alert(message, type) {
  switch (type) {
    case "info":
      toast.info(message, {
        position: "top-right",
      });
      break;
    case "success":
      toast.success(message, {
        position: "top-right",
      });
      break;
    case "warning":
      toast.warn(message, {
        position: "top-right",
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
      });
      break;
    case "danger":
      toast.error(message, {
        position: "top-right",
      });
      break;
  }
}

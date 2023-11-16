import { toast } from 'react-toastify';


export default function Alert(message, type) {
    switch (type) {
        case 'info':
            toast.info(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'success':
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'warning':
            toast.warn(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;
        case 'error':
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;
        case 'danger':
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;
    }
}
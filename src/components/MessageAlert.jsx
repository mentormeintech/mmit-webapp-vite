// "use server";
import { Alert } from '@mui/material';

export default function MessageAlert(props) {
    const { message, type, clearMessage } = props


    return (
        // fadeIn 5s ease-in-out
        <>
            {message && type === 'success' && <Alert variant="outlined" style={{
                fontSize: '1.1rem',
                // fontFamily: 'var(--Poppins)'
            }} severity={'success'} className='mt-4 mb-4 transition delay-[5000ms] duration-500 ease-in-out' onClose={() => {
                clearMessage()
            }}>
                {message}
            </Alert>}
            {message && type === 'info' && <Alert variant="outlined" severity={'info'} className='mt-4 mb-4 transition delay-[5000ms] duration-500 ease-in-out' onClose={() => {
                clearMessage()
            }}>
                {message}
            </Alert>}
            {message && type === 'warning' && <Alert variant="outlined" severity={'warning'} className='mt-4 mb-4 transition delay-[5000ms] duration-500 ease-in-out' onClose={() => {
                clearMessage()
            }}>
                {message}
            </Alert>}
            {message && type === 'error' && <Alert variant="outlined" severity={'error'} className='mt-4 mb-4 transition delay-[5000ms] duration-500 ease-in-out' onClose={() => {
                clearMessage()
            }}>
                {message}
            </Alert>}
        </>
    )


}
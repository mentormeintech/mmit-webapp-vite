import { format } from 'date-fns';


export const formatDateWithOf = (date) => {
    // date = new Date(date);
    return format(date, "do 'of' MMMM,  yyyy");
}
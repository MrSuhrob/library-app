export const dateFormat = (date: Date, separator: string = '.'): string => {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return day + separator + month + separator + year;
};
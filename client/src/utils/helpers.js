

export default function date(d) {
    let date = new Date(0)
    date = new Date (date.setUTCSeconds(d)/1000)
    
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    
    
    
    // if (day < 10) day = '0' + day;
    // if (month <10) month = '0' + month;

    let formattedDate = `${month}/${day}/${year}`


    return formattedDate

 }
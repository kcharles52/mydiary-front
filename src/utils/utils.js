export const formatedDate = (UnFormateddate)=>{
    let date = new Date(UnFormateddate);
    let year, day,rawDay, month, rawMounth;
      year = date.getFullYear();
      rawDay = date.getDate();
      rawMounth = date.getMonth()+1
      rawDay < 10? day = `0${rawDay}`: day=rawDay;
      rawMounth < 10? month = `0${rawMounth}`: month=rawMounth;
      
      return `${year}-${month}-${day}`
  }
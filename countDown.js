//only logic
let currentDate= new Date();
console.log("CurrentDate is : ", currentDate);

let diwaliDate =  new Date(2023,10,12);
console.log("Diwali Date : ",diwaliDate);

const diff = diwaliDate.getTime()-currentDate.getTime()
const daysDiff= diff/(1000*60*60*24)

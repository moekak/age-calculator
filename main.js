const day = document.getElementById("dayInput")
const month = document.getElementById("monthInput")
const year = document.getElementById("yearInput")
const form = document.getElementById("input-bd");




form.addEventListener("submit", (e) =>{
    e.preventDefault();
     var dayValue = day.value
     var monthValue = month.value
     var yearValue = year.value
    
    if(isNaN(dayValue) || isNaN(monthValue )|| isNaN(yearValue) || dayValue == "" || monthValue == "" || yearValue == ""){
        alert("please enter yout birthday")
    } 
   
    
 

    const date = new Date();
    const getYear = date.getFullYear()
    const getMonth = date.getMonth() + 1
    const getDate = date.getDate()



    console.log(yearValue);
    console.log(monthValue);
    console.log(dayValue);
})